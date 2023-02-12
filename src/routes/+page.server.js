import { BYPASS_TOKEN } from '$env/static/private';

export const config = {
  isr: {
    expiration: false,
    bypassToken: BYPASS_TOKEN,
  }
};

export const prerender = true;

export const load = () => {
  let timestamp = new Date();
  return { timestamp };
}