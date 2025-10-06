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
    import fresh from "$lib/assets/fresh.avif";
    import { currentPage } from "$lib/stores";
    import { onMount } from "svelte";

    // DVD-style bouncing image
    let containerEl;
    let imgEl;
    let navEl; // left for binding, but we'll use DOM query for measurements

    // speed multiplier (px per unit used to derive velocities)
    export let speed = 0.55;

    onMount(() => {
        document.title = "Secret Page";
        let rafId;
        let last = performance.now();

        // initial position and velocity
        let x = 100;
        let y = 100;
        // vx/vy in px per second; we'll convert to px/ms when applying
        let vx = (Math.random() > 0.5 ? 1 : -1) * speed * 300;
        let vy = (Math.random() > 0.5 ? 1 : -1) * speed * 200;

        // ensure navbar stays above by raising its z-index on the actual DOM node
        const navDom = document.querySelector("nav");
        if (navDom && navDom.style) {
            if (!navDom.style.position) navDom.style.position = "relative";
            navDom.style.zIndex = "9999";
        }

        function getBounds() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const imgRect = imgEl
                ? imgEl.getBoundingClientRect()
                : { width: 80, height: 80 };
            let navRect = { bottom: 0 };
            if (navEl && typeof navEl.getBoundingClientRect === "function") {
                navRect = navEl.getBoundingClientRect();
            } else if (
                navDom &&
                typeof navDom.getBoundingClientRect === "function"
            ) {
                navRect = navDom.getBoundingClientRect();
            }
            const left = 0;
            const top = Math.max(navRect.bottom + 8, 0);
            const right = Math.max(0, w - imgRect.width);
            const bottom = Math.max(top, h - imgRect.height);
            return { left, top, right, bottom };
        }

        function update(now) {
            const dt = Math.max(1, now - last); // ms
            last = now;

            const bounds = getBounds();

            // convert velocities to px/ms
            const vxMs = vx / 1000;
            const vyMs = vy / 1000;

            x += vxMs * dt;
            y += vyMs * dt;

            // bounce off left/right
            if (x < bounds.left) {
                x = bounds.left;
                vx = -vx;
            } else if (x > bounds.right) {
                x = bounds.right;
                vx = -vx;
            }

            // bounce off top/bottom
            if (y < bounds.top) {
                y = bounds.top;
                vy = -vy;
            } else if (y > bounds.bottom) {
                y = bounds.bottom;
                vy = -vy;
            }

            if (containerEl) {
                containerEl.style.position = "fixed";
                containerEl.style.left = x + "px";
                containerEl.style.top = y + "px";
                containerEl.style.zIndex = "0";
                containerEl.style.pointerEvents = "none";
            }

            rafId = requestAnimationFrame(update);
        }

        // initialize position near center
        const rect = imgEl ? imgEl.getBoundingClientRect() : null;
        if (rect) {
            x = Math.max(10, (window.innerWidth - rect.width) / 2);
            const navHeight =
                navDom && typeof navDom.getBoundingClientRect === "function"
                    ? navDom.getBoundingClientRect().height
                    : 0;
            y = Math.max(
                10 + navHeight,
                (window.innerHeight - rect.height) / 2
            );
        }

        rafId = requestAnimationFrame(update);

        const onResize = () => {
            // keep image inside bounds when resize happens
            const b = getBounds();
            x = Math.min(Math.max(x, b.left), b.right);
            y = Math.min(Math.max(y, b.top), b.bottom);
        };
        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", onResize);
        };
    });
</script>

<Navbar bind:this={navEl}>
    <!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events -->
    <span
        style="cursor: pointer;"
        class="hover:text-blue-700"
        on:click={() => currentPage.set(Home)}>Home</span
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
<!-- svelte-ignore a11y-img-redundant-alt -->
<div bind:this={containerEl} style="width: 128px; height: 128px;">
    <img
        bind:this={imgEl}
        src={fresh}
        alt="Secret Image"
        style="width:100%; height:100%; display:block;"
    />
</div>
