import { FIXED_OPTIONS, Payload, ResponseObject } from "../../constants";
import { HASH_DECODE } from "../../hooks";
import fetch from "node-fetch";

export async function DELETE({ route, hash }: { route: string; hash: string }) {
  try {
    HASH_DECODE(hash);
    const options = {
      method: "DELETE",
      ...FIXED_OPTIONS,
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
