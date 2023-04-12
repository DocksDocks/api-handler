export type Payload = {
  [key: string]: any;
};

export type ResponseObject = Record<string, any>;

export const FIXED_OPTIONS = ({ cookie = "" }: { cookie?: string }) => {
  return {
    credentials: "include" as RequestCredentials,
    headers: {
      "Content-Type": "application/json",
      cookie: cookie!,
    },
  };
};
