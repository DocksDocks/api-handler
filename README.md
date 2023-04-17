# Installation

Current Version - v1.1.0

`npm i empathy-api-handler`

# Usage

```
import { ApiHandler } from 'empathy-api-handler';
const hash = process.env.HASH_HANDLER as string;
const apiHandler = new ApiHandler(hash);
const route: string = "http://localhost:3333/api/auth/generate_access_token";
const payload: Object = {
    email: "test@email.com",
    password: "test123",
};
const response = await apiHandler.POST({ route, payload, hash });
```
