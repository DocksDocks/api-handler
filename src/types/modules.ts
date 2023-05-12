type MethodType = "POST" | "PUT" | "GET" | "DELETE";

export type getOptionsObject = {
  method: MethodType;
  cookie?: string;
  payload?: Object;
  credentials?: RequestCredentials;
};

export type DEFAULT_POST_SETTINGS = {
  cookie?: string;
  route: string;
  payload: Object;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json?: boolean;
};

export type DEFAULT_PUT_SETTINGS = {
  cookie?: string;
  route: string;
  payload: Object;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json?: boolean;
};

export type DEFAULT_GET_SETTINGS = {
  cookie?: string;
  route: string;
  payload?: Object;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json?: boolean;
};

export type DEFAULT_DELETE_SETTINGS = {
  cookie?: string;
  route: string;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json?: boolean;
};
