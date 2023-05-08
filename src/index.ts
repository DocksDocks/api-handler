import { ErrorHandlerObject } from "./constants";
import { HASH_DECODE } from "./hooks";
import {
  DEFAULT_DELETE_SETTINGS,
  DEFAULT_GET_SETTINGS,
  DEFAULT_POST_SETTINGS,
  DEFAULT_PUT_SETTINGS,
  DELETE,
  GET,
  POST,
  PUT,
} from "./modules";

export class ApiHandler {
  hash: string;
  basePath: string;
  constructor(hash: string, basePath: string) {
    this.hash = hash;
    this.basePath = basePath;
  }
  GET(
    settings: typeof DEFAULT_GET_SETTINGS
  ): Promise<any> | Promise<{ error: boolean; message: string }> {
    settings.route = `${this.basePath}${settings.route}`;
    if (HASH_DECODE(settings.hash, this.hash)) return GET(settings);
    return Promise.resolve(ErrorHandlerObject);
  }
  POST(
    settings: typeof DEFAULT_POST_SETTINGS
  ): Promise<any> | Promise<{ error: boolean; message: string }> {
    settings.route = `${this.basePath}${settings.route}`;
    if (HASH_DECODE(settings.hash, this.hash)) return POST(settings);
    return Promise.resolve(ErrorHandlerObject);
  }
  DELETE(
    settings: typeof DEFAULT_DELETE_SETTINGS
  ): Promise<any> | Promise<{ error: boolean; message: string }> {
    settings.route = `${this.basePath}${settings.route}`;
    if (HASH_DECODE(settings.hash, this.hash)) return DELETE(settings);
    return Promise.resolve(ErrorHandlerObject);
  }
  PUT(
    settings: typeof DEFAULT_PUT_SETTINGS
  ): Promise<any> | Promise<{ error: boolean; message: string }> {
    settings.route = `${this.basePath}${settings.route}`;
    if (HASH_DECODE(settings.hash, this.hash)) return PUT(settings);
    return Promise.resolve(ErrorHandlerObject);
  }
}
