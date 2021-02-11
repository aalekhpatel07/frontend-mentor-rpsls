<script>
	export let appName;
	
</script>
<style global lang="postcss">

/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */
@tailwind utilities;

</style>
<main>
	<h1>Welcome to {appName} App!</h1>
	<img src="/favicon.png" alt="Svelte Logo" />
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
<footer>
	<nav class="flex flex-col"	>
		<a href="https://svelte.dev/docs">API</a>
		<a href="https://svelte.dev/examples">Examples</a>
		<a href="https://svelte.dev/repl/hello-world">REPL</a>
		<a href="https://svelte.dev/blog">Blog</a>
		<a href="https://svelte.dev/faq">FAQ</a>
		<a href="https://discord.com/invite/yy75DKs">Discord</a>
		<a href="https://github.com/sveltejs/svelte">GitHub</a>
	</nav>
</footer>
