import {
  DEFAULT_DELETE_SETTINGS,
  DEFAULT_GET_SETTINGS,
  DEFAULT_POST_SETTINGS,
  DEFAULT_PUT_SETTINGS,
  DELETE_CALL_ROUTE,
  GET_CALL_ROUTE,
  POST_CALL_ROUTE,
  PUT_CALL_ROUTE,
} from "./modules";

export class ApiHandler {
  basePath: string;
  constructor(basePath: string) {
    this.basePath = basePath;
  }
  async GET(settings: typeof DEFAULT_GET_SETTINGS): Promise<any> {
    try {
      settings.route = this.basePath + settings.route;
      return await GET_CALL_ROUTE(settings);
    } catch (error) {
      throw new Error("GET Request failed: " + error.message);
    }
  }
  async POST(settings: typeof DEFAULT_POST_SETTINGS): Promise<any> {
    try {
      settings.route = this.basePath + settings.route;
      return await POST_CALL_ROUTE(settings);
    } catch (error) {
      throw new Error("POST Request failed: " + error.message);
    }
  }
  async DELETE(settings: typeof DEFAULT_DELETE_SETTINGS): Promise<any> {
    try {
      settings.route = this.basePath + settings.route;
      return await DELETE_CALL_ROUTE(settings);
    } catch (error) {
      throw new Error("DELETE Request failed: " + error.message);
    }
  }
  async PUT(settings: typeof DEFAULT_PUT_SETTINGS): Promise<any> {
    try {
      settings.route = this.basePath + settings.route;
      return await PUT_CALL_ROUTE(settings);
    } catch (error) {
      throw new Error("PUT Request failed: " + error.message);
    }
  }
}
