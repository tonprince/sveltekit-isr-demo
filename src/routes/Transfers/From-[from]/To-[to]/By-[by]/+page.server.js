import { BYPASS_TOKEN } from '$env/static/private';



export async function load({params}) {
  return { from: params.from, to: params.to, by: params.by };
}