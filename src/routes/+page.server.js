import { BYPASS_TOKEN } from '$env/static/private';

export const config = {
  isr: {
    expiration: 30,
    bypassToken: BYPASS_TOKEN,
  }
};

export const prerender = 'auto';

export const load = () => {
  console.log("Server load");
  let timestamp = new Date();
  return { timestamp };
}