// src/routes/+page.server.ts
import { isLocalProdBuild } from '$lib/isLocalProdBuild';

export function load() {
  return {
    isLocalProdBuild
  };
}
