import { Payload, ResponseObject } from "../../constants";
import { HASH_DECODE } from "../../hooks";
import fetch from "node-fetch";

export async function GET({
  route,
  payload = {},
  hash,
}: {
  route: string;
  payload?: Payload;
  hash: string;
}) {
  try {
    HASH_DECODE(hash);
    const options = {
      method: "GET",
      credentials: "include" as RequestCredentials,
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Make API request and get response object
    const response = await fetch(route, options);
    const responseObject: ResponseObject = await response.json();
    // Use Object.entries to iterate over the properties of the payload object,
    // and only include the properties that exist in the response oabject
    if (Object.keys(payload).length === 0) return responseObject;
    const pickedObject = Object.fromEntries(
      Object.entries(payload)
        .filter(([key]) => key in responseObject)
        .map(([key, value]) => [key, responseObject[key]])
    );
    return pickedObject;
  } catch (e) {
    console.log(e);
    return e;
  }
}
