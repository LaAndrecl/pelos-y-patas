# De Pelos y Patas por Emilia

Portal de noticias sobre el mundo de las mascotas, hecho con Astro (https://astro.build).

## Como agregar una noticia nueva

1. Ve a la carpeta src/content/noticias/
2. Crea un archivo nuevo, por ejemplo mi-noticia.md
3. Copiale este encabezado y cambia los datos:

---
titulo: "Titulo de la noticia"
resumen: "Resumen corto, una o dos frases."
categoria: "Salud y Cuidado"
fecha: 2026-08-10
---

Aqui va el contenido completo de la noticia, en Markdown normal.

La categoria debe ser exactamente una de estas cinco:
Salud y Cuidado, Adopcion, Curiosidades, Entrevistas, Emilia Opina.

Si quieres que una noticia aparezca como la destacada de portada, agregale destacada: true.

## Como ver el sitio en tu computador

npm install
npm run dev

Luego abre la direccion que aparezca en la terminal (normalmente http://localhost:4321).

## Como publicarlo en Cloudflare Pages

Instrucciones detalladas en la conversacion con Claude.
