import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    categoria: z.enum([
      'Salud y Cuidado',
      'Adopción',
      'Curiosidades',
      'Entrevistas',
      'Emilia Opina',
    ]),
    fecha: z.coerce.date(),
    destacada: z.boolean().optional().default(false),
    imagen: z.string().optional(),
  }),
});

export const collections = { noticias };
