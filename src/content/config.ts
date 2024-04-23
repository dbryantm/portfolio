// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"
import { blogSchema } from "../schemas/blog"

// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: blogSchema,
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
}
