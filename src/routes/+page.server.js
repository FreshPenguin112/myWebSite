// src/routes/+page.server.ts
import { notVercel } from '$lib/notVercel';

export function load() {
  return {
    notVercel
  };
}
