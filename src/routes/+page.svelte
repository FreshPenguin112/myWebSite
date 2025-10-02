<script lang="js">
    import Home from "$components/home.svelte";
    import { currentPage } from '$lib/stores';
</script>

<svelte:head>
    <title>Fresh's Site</title>
    <style lang="stylus">
        @import "../lib/styles/global.styl";
    </style>
</svelte:head>

<main style="width: 100%; height: 100vh;" class="dark:bg-black dark:text-white">
    {#if $currentPage}
        <svelte:component this={$currentPage} />
    {:else}
        <Home />
    {/if}
</main>
