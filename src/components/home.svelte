<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        DarkMode,
        P,
        Avatar,
    } from "flowbite-svelte";
    import { SunSolid, MoonSolid } from "flowbite-svelte-icons";
    import { currentPage } from "$lib/stores";

    import Secret from "$components/secret.svelte";
    import fresh from "$lib/assets/fresh.avif";
    import { onMount } from "svelte";

    let debug;
    onMount(() => {
        document.title = "Fresh's Site";
        debug = new URLSearchParams(window.location.search).has("debug");
    });
    let clickCount = 0;
    function handleBrandClick() {
        clickCount += 1;
        if (clickCount >= (debug ? 1 : 10)) {
            currentPage.set(Secret);
            clickCount = 0;
        }
    }
</script>

<Navbar>
    <!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events -->
    <span style="cursor: default" on:click={handleBrandClick} class="no-select"
        >FreshPenguin112</span
    >
    <div class="flex items-center gap-2 ml-auto">
        <a href="/jellyfin"><P class="hover:text-blue-700">Jellyfin</P></a>
        <DarkMode class="text-lg">
            {#snippet lightIcon()}
                <SunSolid color="yellow" />
            {/snippet}
            {#snippet darkIcon()}
                <MoonSolid color="grey" />
            {/snippet}
        </DarkMode>
    </div>
</Navbar>

<div class="flex flex-col items-left mt-10">
    <Avatar
        src={fresh}
        size="xl"
        cornerStyle="rounded"
        draggable="false"
        (dragstart)="false;"
        style="pointer-events:none;"
        class="no-select"
    ></Avatar>
</div>