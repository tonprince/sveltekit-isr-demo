import { BYPASS_TOKEN } from '$env/static/private';
import { nanoid } from "nanoid";

export const config = {
  isr: {
    expiration: 30,
    bypassToken: BYPASS_TOKEN,
  }
};

export async function load({ setHeaders }) {
  console.log("Server load");
  setHeaders({
    "cache-control": "max-age=604800, must-revalidate",
  });

  let uuid = nanoid();
  return { uuid };
}