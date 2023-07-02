/* eslint-disable no-use-before-define */
import Block from "./Block.ts";
import Route from "./Route.ts";

class Router {
  private static __instance: Router;

  public routes: Route[] = [];

  private history: History | undefined;

  private _currentRoute: Route | null = null;

  private _rootQuery = "";

  constructor(rootQuery: string) {
    if (Router.__instance) {
      throw new Error("Instance already exists.");
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: Block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });

    this.routes.push(route);

    return this;
  }

  start(): void {
    window.onpopstate = (event) => {
      this._onRoute((event.currentTarget as Window).location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);
    if (!route) {
      this.go("/404");
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    if (this.history) {
      this.history.pushState({}, "", pathname);
      this._onRoute(pathname);
    }
  }

  back() {
    this.history && this.history.back();
  }

  forward() {
    this.history && this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

const router = new Router("#app");

export default router;
