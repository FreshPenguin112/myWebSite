<script>
    export let isLocalProdBuild;
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
        Listgroup,
    } from "flowbite-svelte";
    import { SunSolid, MoonSolid } from "flowbite-svelte-icons";
    import { currentPage } from "$lib/stores";
    import Home from "$components/home.svelte";

    import fresh from "$lib/assets/fresh.avif";
    import { onMount } from "svelte";
    onMount(() => {
        isLocalProdBuild = !location.href.includes("vercel.app");
        document.title = "About Me";
    });

    function newTabOpen(links) {
        return links.map((link) => ({ ...link, target: "_blank" }));
    }

    let myLinks = [
        { name: "GitHub", href: "https://github.com/FreshPenguin112" },
        {
            name: "Discord",
            href: "https://discordapp.com/users/712497713043734539",
        },
        {
            name: "PenguinMod",
            href: "https://penguinmod.com/profile?user=freshpenguin112",
        },
        {
            name: "Scratch",
            href: "https://scratch.mit.edu/users/know0your0true0color",
        },
    ];
</script>

<Navbar class="no-select">
    <!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events -->
    <span
        style="cursor: pointer;"
        class="hover:text-blue-700"
        on:click={() => currentPage.set(Home)}>Home</span
    >
    <div class="flex items-center gap-2 ml-auto">
        {#if isLocalProdBuild}
            <a href="/jellyfin" target="_blank">
                <P class="hover:text-blue-700">Jellyfin</P>
            </a>
        {/if}
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
    <P class="mb-6 text-xl text-center font-bold"><br />My Links</P>
    <Listgroup active items={newTabOpen(myLinks)} />
</div>

<div class="no-select flex flex-col items-center mb-10">
    <P class="mb-6 text-xl text-center font-bold"><br />About Me</P>
    <P class="text-lg text-center">
        I'm <span class="text-sky-500">FreshPenguin112</span>, A {new Date(
            new Date() - new Date("June 15, 2010, 00:00:00")
        ).getFullYear() - 1970} year old developer from
        <span class="text-red-800 line-through">Antarctica</span>
        <a
            class="underline text-blue-400 hover:text-blue-700"
            href="https://wikipedia.org/wiki/United_States"
            target="_blank">The United States of America</a
        >.
        <br />
        I enjoy programming in
        <a
            class="underline text-blue-400 hover:text-blue-700"
            href="https://wikipedia.org/wiki/JavaScript"
            target="_blank">JavaScript</a
        >
        and
        <a
            class="underline text-blue-400 hover:text-blue-700"
            href="https://wikipedia.org/wiki/Node.js"
            target="_blank">Node.js</a
        >.
        <br />
        I use
        <a
            class="underline text-blue-400 hover:text-blue-700"
            href="https://wikipedia.org/wiki/Linux"
            target="_blank">Linux</a
        >, I commonly use
        <a
            class="underline text-blue-400 hover:text-blue-700"
            href="https://wikipedia.org/wiki/Arch_Linux"
            target="_blank">Arch Linux</a
        >,
        <a
            class="underline text-blue-400 hover:text-blue-700"
            href="https://wikipedia.org/wiki/Fedora_Linux"
            target="_blank">Fedora Linux</a
        >, and
        <a
            class="underline text-blue-400 hover:text-blue-700"
            href="https://wikipedia.org/wiki/Nobara_(operating_system)"
            target="_blank">Nobara Linux</a
        >.
        <br />
    </P>
</div>
