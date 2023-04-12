export type Payload = {
  [key: string]: any;
};

export type ResponseObject = Record<string, any>;


export const POST_SETTINGS: {
  cookie?: string;
  route: string;
  payload: Payload;
  hash: string;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json: boolean;
} = {
  cookie: "",
  route: "",
  payload: {},
  hash: "",
  credentials: "include",
  return_json: true,
};

export const PUT_SETTINGS: {
  cookie?: string;
  route: string;
  payload: Payload;
  hash: string;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json: boolean;
} = {
  cookie: "",
  route: "",
  payload: {},
  hash: "",
  credentials: "include",
  return_json: true,
};

export const GET_SETTINGS: {
  cookie?: string;
  route: string;
  payload?: Payload;
  hash: string;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json: boolean;
} = {
  cookie: "",
  route: "",
  payload: {},
  hash: "",
  credentials: "include",
  return_json: true,
};



export const DELETE_SETTINGS: {
  cookie?: string;
  route: string;
  hash: string;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json: boolean;
} = {
  cookie: "",
  route: "",
  hash: "",
  credentials: "include",
  return_json: true,
};
