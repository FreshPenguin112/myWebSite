// src/routes/+page.server.ts
import { notVercel } from '$lib';

export function load() {
  return {
    notVercel
  };
}
