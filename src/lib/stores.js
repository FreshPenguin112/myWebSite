import { writable } from 'svelte/store';

export const currentPage = writable(null);

import("../components/home.svelte").then((module) => {
    currentPage.set(module.default);
});
