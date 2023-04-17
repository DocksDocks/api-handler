import { ErrorHandlerObject } from "./constants";
import { HASH_DECODE } from "./hooks";
import {
  GET,
  POST,
  DELETE,
  PUT,
  GET_SETTINGS,
  POST_SETTINGS,
  DELETE_SETTINGS,
  PUT_SETTINGS,
} from "./modules";

export class ApiHandler {
  hash: string;
  constructor(hash: string) {
    this.hash = hash;
  }
  GET(
    settings: typeof GET_SETTINGS
  ): Promise<any> | { error: boolean; message: string } {
    if (HASH_DECODE(settings.hash, this.hash)) return GET(settings);
    return ErrorHandlerObject;
  }
  POST(
    settings: typeof POST_SETTINGS
  ): Promise<any> | { error: boolean; message: string } {
    if (HASH_DECODE(settings.hash, this.hash)) return POST(settings);
    return ErrorHandlerObject;
  }
  DELETE(
    settings: typeof DELETE_SETTINGS
  ): Promise<any> | { error: boolean; message: string } {
    if (HASH_DECODE(settings.hash, this.hash)) return DELETE(settings);
    return ErrorHandlerObject;
  }
  PUT(
    settings: typeof PUT_SETTINGS
  ): Promise<any> | { error: boolean; message: string } {
    if (HASH_DECODE(settings.hash, this.hash)) return PUT(settings);
    return ErrorHandlerObject;
  }
}
