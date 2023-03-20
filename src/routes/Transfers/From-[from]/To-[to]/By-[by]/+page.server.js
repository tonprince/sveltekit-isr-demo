import { BYPASS_TOKEN } from '$env/static/private';

export const config = {
  isr: {
    expiration: false,
    bypassToken: BYPASS_TOKEN,
    allowQuery: []
  }
};

export async function load({params}) {
  return { from: params.from, to: params.to, by: params.by };
}