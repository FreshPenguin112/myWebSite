<script>
    import "../app.css"
    import fresh from '$lib/assets/fresh.avif';
	let { children } = $props();
</script>


<svelte:head>
    <link rel="preload" as="image" href={fresh} type="image/avif" />
	<link rel="icon" href={fresh} type="image/avif" />
</svelte:head>

{@render children?.()}
