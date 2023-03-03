<script>
  export let data;
</script>

<h1>Welcome to SvelteKit with ISR</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<p>UUID generated from load function: {data.uuid}</p>
<p>BYPASS TOKEN to invalidate route: {data.byPassToken}</p>