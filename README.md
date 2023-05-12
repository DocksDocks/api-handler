# Installation

Current Version - v1.2.3

`npm i empathy-api-handler`

# Usage

create a 'handler.ts' to initialize the class and export it;
```
import { ApiHandler } from 'empathy-api-handler';

const basePath = "http://localhost:3333/api";

export const apiHandler = new ApiHandler(basePath);
```

now when using in other files you can import and use it with your instance:
```
import { apiHandler } from "./handler";

const route: string = "/login";
const payload: Object = {
    email: "test@email.com",
    password: "test123",
};
const response = await apiHandler.POST({ route, payload });
```

## OPTIONS

These are the default options:
```
{
  route: string;
  payload: Payload;
  cookie?: string;
  credentials?: RequestCredentials; // "include" | "same-origin" | "omit"
  return_json?: boolean;
}
```