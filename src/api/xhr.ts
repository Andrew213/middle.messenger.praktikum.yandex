/* eslint-disable class-methods-use-this */
enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type Options = {
  method: METHOD;
  data?: any;
};

function queryStringify(obj: Record<string, any>) {
  let params = "?";
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      params = params.concat(`${key}=${obj[key].join(",")}&`);
    } else if (typeof obj[key] === "object") {
      params = params.concat(`${key}=${obj[key].toString()}&`);
    } else {
      params = params.concat(`${key}=${obj[key]}&`);
    }
  }

  return params.slice(0, -1);
}

type OptionsWithoutMethod = Omit<Options, "method">;

class HTTPTransport {
  get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.GET });
  }

  request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
    const { method, data } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}

const api = new HTTPTransport();

export default function fetch(url: string, options: any = {}): Promise<any> {
  const { tries = 1 } = options;

  function onError(err: Error) {
    const triesLeft = tries - 1;
    if (!triesLeft) {
      throw err;
    }

    return fetch(url, { ...options, tries: triesLeft });
  }

  return api.request(url, options).catch(onError);
}
