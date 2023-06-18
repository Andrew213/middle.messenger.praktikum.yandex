export default function getProps(obj: Record<string, any>): string {
  let props = "";
  if (obj) {
    for (const [key, value] of Object.entries(obj)) {
      props += `${key}="${value}" `;
    }
  }

  return props.trim();
}
