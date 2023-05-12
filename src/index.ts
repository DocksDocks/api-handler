import {
  DELETE_CALL_ROUTE,
  GET_CALL_ROUTE,
  POST_CALL_ROUTE,
  PUT_CALL_ROUTE,
} from "./modules";

import {
  DEFAULT_DELETE_SETTINGS,
  DEFAULT_GET_SETTINGS,
  DEFAULT_POST_SETTINGS,
  DEFAULT_PUT_SETTINGS,
} from "@/types/modules";

export class ApiHandler {
  basePath: string;
  constructor(basePath: string) {
    this.basePath = basePath;
  }
  GET(settings: DEFAULT_GET_SETTINGS): Promise<any> {
    try {
      settings.route = this.basePath + settings.route;
      return GET_CALL_ROUTE(settings);
    } catch (error) {
      throw new Error("GET Request failed: " + error.message);
    }
  }
  POST(settings: DEFAULT_POST_SETTINGS): Promise<any> {
    try {
      settings.route = this.basePath + settings.route;
      return POST_CALL_ROUTE(settings);
    } catch (error) {
      throw new Error("POST Request failed: " + error.message);
    }
  }
  DELETE(settings: DEFAULT_DELETE_SETTINGS): Promise<any> {
    try {
      settings.route = this.basePath + settings.route;
      return DELETE_CALL_ROUTE(settings);
    } catch (error) {
      throw new Error("DELETE Request failed: " + error.message);
    }
  }
  PUT(settings: DEFAULT_PUT_SETTINGS): Promise<any> {
    try {
      settings.route = this.basePath + settings.route;
      return PUT_CALL_ROUTE(settings);
    } catch (error) {
      throw new Error("PUT Request failed: " + error.message);
    }
  }
}
