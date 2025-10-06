<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        DarkMode,
        P,
        Heading,
        Avatar,
    } from "flowbite-svelte";
    import { SunSolid, MoonSolid } from "flowbite-svelte-icons";
    import { currentPage } from "$lib/stores";

    import Secret from "$components/secret.svelte";
    import AboutMe from "$components/aboutme.svelte";
    import fresh from "$lib/assets/fresh.avif";
    import { onMount } from "svelte";

    let debug;
    onMount(() => {
        document.title = "Fresh's Site";
        document.getElementById("profile-picture").oncontextmenu = (e) => {
            e.preventDefault();
            return false;
        };
        document.getElementById("profile-picture").ondragstart = (e) => {
            e.preventDefault();
            return false;
        };
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
    function handleExploreClick() {
        currentPage.set(AboutMe);
    }
</script>

<Navbar>
    <!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events -->
    <span
        style="cursor: default"
        on:click={handleBrandClick}
        class="font-black no-select rainbow-text"
    >
        FreshPenguin112
    </span>
    <div class="flex items-center gap-2 ml-auto">
        <a href="/jellyfin" target="_blank"><P class="hover:text-blue-700">Jellyfin</P></a>
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

<div class="no-select flex flex-col items-center mt-10">
    <Avatar
        src={fresh}
        id="profile-picture"
        size="xl"
        cornerStyle="rounded"
        draggable="false"
        style="pointer-events:none;"
        class="no-select"
    ></Avatar>
    <P class="mb-6 text-xl text-center font-bold">FreshPenguin112</P>
    <P class="text-lg text-center"
        >Hey! Welcome to my Website!
        <br />I'm FreshPenguin112(<em>freh-shh-pen-gwin-wuhn-wuhn-too</em>), a
        Software Developer and Tech Enthusiast.
        <!-- svelte-ignore a11y_no_static_element_interactions a11y_missing_attribute a11y_click_events_have_key_events -->
        <br />Feel free to
        <a
            on:click={handleExploreClick}
            class="underline text-blue-400 hover:text-blue-700">explore
        </a> and learn more about me!
    </P>
</div>

