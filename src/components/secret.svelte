<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        DarkMode,
        P,
    } from "flowbite-svelte";
    import { SunSolid, MoonSolid } from "flowbite-svelte-icons";
    import Home from "$components/home.svelte";
    import { currentPage } from "$lib/stores";
</script>

<Navbar>
    <!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events -->
    <span
        style="cursor: pointer;"
        class="hover:text-blue-700"
        on:click={() => currentPage.set(Home)}>Home</span
    >
</Navbar>
<!-- svelte-ignore a11y-img-redundant-alt -->
<img
    src="fresh.png"
    alt="Secret Image"
    class="mx-auto my-10 w-1/2"
/>