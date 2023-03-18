import { BYPASS_TOKEN } from '$env/static/private';
import { nanoid } from "nanoid";

export const config = {
  isr: {
    expiration: false,
    bypassToken: BYPASS_TOKEN,
  }
};

export async function load() {
  let uuid = nanoid();
  console.log(`Load function triggered with new UUID ${uuid}`);
  return { uuid, byPassToken: BYPASS_TOKEN };
}