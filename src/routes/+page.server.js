import { BYPASS_TOKEN } from '$env/static/private';
import { nanoid } from "nanoid";

export const config = {
  isr: {
    expiration: false,
    bypassToken: BYPASS_TOKEN,
  }
};

export const csr = false;
export const prerender = 'auto';

export async function load({ params }) {
  console.log("Server load");

  let uuid = nanoid();
  return { uuid , name: params.name};
}