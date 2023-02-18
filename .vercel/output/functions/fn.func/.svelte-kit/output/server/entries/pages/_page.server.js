const BYPASS_TOKEN = "XYZ";
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
