// src/routes/+page.server.ts
import { notVercel } from '$lib/server/env';

export function load() {
  return {
    notVercel
  };
}
