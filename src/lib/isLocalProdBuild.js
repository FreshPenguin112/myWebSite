import { env } from '$env/dynamic/private';
const VERCEL = env.VERCEL;

const isDev = process.env.NODE_ENV === 'development' || (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV);

export const isLocalProdBuild = !(VERCEL === '1' || VERCEL === 'true') && !isDev;

console.log('VERCEL:', VERCEL, 'isDev:', isDev, 'isLocalProdBuild:', isLocalProdBuild);