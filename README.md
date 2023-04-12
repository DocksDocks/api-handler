# Installation

Current Version - v1.0.5

`npm i empathy-api-handler`

# Usage

```
import { POST } from 'empathy-api-handler'

const route: string = "http://localhost:3333/api/auth/generate_access_token";
  const payload: Object = {
    email: "test@email.com",
    password: "test123",
  };
const hash: string = `hello`;
const response = await POST({ route, payload, hash });
```
