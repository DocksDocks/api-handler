# Installation

Current Version - v1.2.0

`npm i empathy-api-handler`

# Usage

create a '.env' with your secret:
```
NEXT_HASH_HANDLER=MY_SECRET_VERY_SECRET
```

create a 'handler.ts' to initialize the class and export it;
```
import { ApiHandler } from 'empathy-api-handler';

const hash = process.env.HASH_HANDLER as string;
const basePath = "http://localhost:3333";

export const apiHandler = new ApiHandler(hash,basePath);
```

now when using in other files you can import and use it with your instance:
```
import { apiHandler } from "./handler";

const hash = process.env.HASH_HANDLER as string;
const route: string = "/api/login";
const payload: Object = {
    email: "test@email.com",
    password: "test123",
};
const response = await apiHandler.POST({ route, payload, hash });
```
