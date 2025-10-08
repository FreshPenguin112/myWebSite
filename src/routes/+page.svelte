<script lang="js">
    import Home from "$components/home.svelte";
    import { currentPage } from "$lib/stores";
    export let data;
</script>

<svelte:head>
    <title>Fresh's Site</title>
    <style lang="stylus">
        @import "../lib/styles/global.styl";
    </style>
</svelte:head>

<div class="full-page bg-gray-200 dark:bg-black dark:text-white">
    {#if $currentPage}
        {#key $currentPage}
            <svelte:component isLocalProdBuild={data.isLocalProdBuild} this={$currentPage} />
        {/key}
    {:else}
        {#key 'home'}
            <Home isLocalProdBuild={data.isLocalProdBuild} />
        {/key}
    {/if}
</div>
