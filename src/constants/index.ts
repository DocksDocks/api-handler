export type Payload = {
  [key: string]: any;
};

export type ResponseObject = Record<string, any>;

export const ErrorHandlerObject: {
  error: boolean;
  message: string;
} = {
  error: true,
  message: "Credentials in this request are invalid.",
};
