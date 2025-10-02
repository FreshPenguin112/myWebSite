<script lang="js">
    import { onMount, afterUpdate } from 'svelte';
    import Home from "$components/home.svelte";
    import { currentPage } from '$lib/stores';
    afterUpdate(() => {
        const main = document.querySelector('main');
        if (main) {
            main.style.minHeight = `${window.innerHeight}px`;
            main.style.height = 'auto';
        }
    });
</script>

<svelte:head>
    <title>Fresh's Site</title>
    <style lang="stylus">
        @import "../lib/styles/global.styl";
    </style>
</svelte:head>

<main style="width: 100%;" class="dark:bg-black dark:text-white">
    {#if $currentPage}
        <svelte:component this={$currentPage} />
    {:else}
        <Home />
    {/if}
</main>
