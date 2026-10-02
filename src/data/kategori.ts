import site from './site.json';
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const kategoriInfo: Record<string, { slug: string; desc: string }> = Object.fromEntries(
  site.kategori.map((k: { nama: string; deskripsi: string }) => [k.nama, { slug: slugify(k.nama), desc: k.deskripsi }])
);
