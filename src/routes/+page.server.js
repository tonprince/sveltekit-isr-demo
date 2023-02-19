import { BYPASS_TOKEN } from '$env/static/private';
import { nanoid } from "nanoid";

export const config = {
  isr: {
    expiration: 30,
    bypassToken: BYPASS_TOKEN,
  }
};

export const prerender = true;

export async function load() {
  console.log("Server load");

  let uuid = nanoid();
  return { uuid };
}