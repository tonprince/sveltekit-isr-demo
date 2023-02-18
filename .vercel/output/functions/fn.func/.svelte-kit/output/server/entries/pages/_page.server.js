const BYPASS_TOKEN = "430ba799-c91e-4343-bf58-c28b7d380ef4";
const config = {
  isr: {
    expiration: 30,
    bypassToken: BYPASS_TOKEN
  }
};
const prerender = false;
const load = () => {
  console.log("Server load");
  let timestamp = new Date();
  return { timestamp };
};
export {
  config,
  load,
  prerender
};
