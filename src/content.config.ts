import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const KATEGORI = [
  'Herbisida Selektif',
  'Herbisida Sistemik',
  'Herbisida Kontak',
  'Herbisida Kontak Sistemik',
  'Insektisida',
  'Fungisida',
] as const;

const produk = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/produk' }),
  schema: z.object({
    nama: z.string(),
    kategori: z.enum(KATEGORI),
    bahan_aktif: z.string().optional().default(''),
    sasaran: z.string().optional().default(''),
    ringkasan: z.string().optional().default(''),
    gambar: z.string().optional().default(''),
    unggulan: z.boolean().optional().default(false),
    baru: z.boolean().optional().default(false),
  }),
});

const berita = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/berita' }),
  schema: z.object({
    judul: z.string(),
    tanggal: z.coerce.date(),
    cover: z.string().optional().default(''),
    ringkasan: z.string().optional().default(''),
    draft: z.boolean().optional().default(false),
  }),
});

const lowongan = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lowongan' }),
  schema: z.object({
    posisi: z.string(),
    penempatan: z.string(),
    aktif: z.boolean().optional().default(true),
  }),
});

const halaman = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/halaman' }),
  schema: z.object({
    judul: z.string(),
    deskripsi: z.string().optional().default(''),
    blocks: z.array(z.object({ type: z.string() }).passthrough()).optional().default([]),
  }),
});

export const collections = { produk, berita, lowongan, halaman };
