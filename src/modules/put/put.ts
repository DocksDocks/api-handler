import { FIXED_OPTIONS, Payload, ResponseObject } from "../../constants";
import { HASH_DECODE } from "../../hooks";
import fetch from "node-fetch";

export async function PUT({
  cookie = "",
  route,
  payload = {},
  hash,
}: {
  cookie?: string;
  route: string;
  payload: Payload;
  hash: string;
}) {
  try {
    HASH_DECODE(hash);
    const options = {
      method: "PUT",
      ...FIXED_OPTIONS({ cookie }),
      body: JSON.stringify(payload),
    };
    // Make API request and get response object
    const response = await fetch(route, options);
    const responseObject: ResponseObject = await response.json();
    return responseObject;
  } catch (e) {
    console.log(e);
    return e;
  }
}
