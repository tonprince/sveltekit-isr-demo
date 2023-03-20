export async function load({params}) {
  return { from: params.from, to: params.to, by: params.by };
}