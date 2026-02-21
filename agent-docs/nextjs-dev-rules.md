# TROUVE LABS — NEXT.JS DEV RULES
> Agent reference for rendering and caching decisions.
> Keep it simple. Default to SSR. Only reach for directives when there's a specific reason.

---

## 1. RENDERING — THE THREE OPTIONS

```
Default SSR      → rendered on each request, not stored. Fine for most pages.
'use cache'      → rendered once, stored, shared across requests. Use when explicitly needed.
'use client'     → rendered in the browser. Only when interactivity is required.
```

**Rule:** Don't add directives for the sake of it. Default SSR is correct for most of this site.

---

## 2. DIRECTIVE + API CHEATSHEET

| Directive / API | What it does | Use when |
|---|---|---|
| Default SSR | Renders on each request | Most pages and components — this is the default |
| `'use cache'` | Caches output, shared across requests | Data that needs to survive across requests + be tagged |
| `'use client'` | Client-side rendering | Interactivity, hooks, browser APIs, animations |
| `'use server'` | Marks a Server Action | Form submissions, mutations, DB writes |
| `cacheTag('name')` | Tags cached output | When you need targeted invalidation later |
| `revalidatePath('/path', type)` | Clears cache for a route | After a mutation affects a whole page or layout |
| `revalidateTag('name', profile?)` | Clears tagged cache, optionally sets rebuild profile | After a mutation affects specific content |
| `connection()` | Forces dynamic rendering | Inside any function that does a direct DB call |
| `generateStaticParams()` | Pre-builds dynamic slug routes at build time | Only for `/blog/[slug]` — not needed for hardcoded routes |

---

## 3. `revalidateTag` — SECOND ARGUMENT

```ts
// Signature
revalidateTag(tag: string, profile: string | CacheLifeConfig)
```

The second argument is a **cache profile** — it tells Next.js what freshness setting to use when the content rebuilds after being purged.

```ts
revalidateTag('blog-posts')           // purge — rebuilds with whatever profile was set at source
revalidateTag('blog-posts', 'days')   // purge — rebuilds and caches for days
revalidateTag(`post-${slug}`, 'weeks') // purge — rebuilds and caches for weeks
```

Built-in profiles (shortest → longest): `'seconds'` `'minutes'` `'hours'` `'days'` `'weeks'` `'max'`

**For this site:**
```ts
revalidateTag('blog-posts', 'days')       // blog list — refresh daily
revalidateTag(`post-${slug}`, 'weeks')    // individual post — cache longer once published
revalidateTag(`sdk-${name}`, 'weeks')     // SDK content rarely changes
```

---

## 4. `revalidatePath` — SECOND ARGUMENT

```ts
revalidatePath('/path', 'page')     // default — clears just this route
revalidatePath('/path', 'layout')   // clears this route AND everything nested under it
revalidatePath('/', 'layout')       // clears the entire site
```

Think of it as a tree:
```
layout.tsx                          ← revalidatePath('/', 'layout') — clears everything
├── /blog                           ← revalidatePath('/blog', 'layout') — clears blog + all posts
│   ├── /blog/my-post               ← revalidatePath('/blog/my-post', 'page') — clears one post
└── /products
```

> Prefer `revalidateTag` for precision. Use `revalidatePath` when you need to clear a whole section.

---

## 5. `connection()` — WHERE IT LIVES

`connection()` goes inside the **data function**, not the page. This keeps pages clean and means any component calling that function automatically gets dynamic rendering.

```ts
// lib/db/posts.ts
import { connection } from 'next/server'
import { db } from '@/lib/drizzle'

export async function getPosts() {
  await connection()
  return await db.select().from(posts)
}

export async function getPostBySlug(slug: string) {
  await connection()
  return await db.select().from(posts).where(eq(posts.slug, slug))
}
```

Then pages and components just call the function — they don't need to know about `connection()`:

```tsx
// SSR component
const posts = await getPosts()

// Via Server Action (for client components)
'use server'
export async function fetchPosts() {
  return await getPosts()
}
```

---

## 6. WHEN TO USE `'use cache'`

Don't add it by default. Use it when you have a specific reason:

| Reason | Example |
|---|---|
| Content is fetched externally and should survive across requests | CMS fetch for SDK description |
| You need `cacheTag` for targeted invalidation | Blog posts, SDK pages with changing copy |
| A component is expensive to render and output is shared across users | Heavy data-processing component |

**When NOT to use it:**
- Plain static JSX with no data fetching — default SSR handles this fine
- Components reading `cookies()` or `headers()` — request-specific, never cache
- `'use client'` components — not applicable

---

## 7. `'use client'` — WHEN TO USE IT

Default to Server Component. Only add `'use client'` when the component actually needs it.

| Needs `'use client'` | Does NOT need `'use client'` |
|---|---|
| `useState`, `useEffect`, hooks | Static text or layout |
| Click handlers, form inputs | Async data fetching |
| Browser APIs (window, localStorage) | Conditional rendering based on props |
| Animations (Framer Motion, etc.) | Server Actions |

---

## 8. PAGE-BY-PAGE DECISIONS — THIS SITE

| Page | Rendering | Notes |
|---|---|---|
| `/` | Default SSR | Static brand content, no DB |
| `/products/vision-sdk` etc. | Default SSR | Hardcoded static routes, not dynamic slugs |
| `/use-cases/agentic-video` etc. | Default SSR | Same — hardcoded routes |
| `/docs/*` | Default SSR | Static content |
| `/about` | Default SSR | Pure brand copy |
| Placeholder pages | Default SSR | Title + coming soon |
| `/blog` | `'use cache'` + `cacheTag` + Suspense | Needs invalidation + streaming |
| `/blog/[slug]` | `'use cache'` + `cacheTag` + `generateStaticParams` | Pre-built at deploy, tag per post |
| Any page with DB call | `connection()` inside data function | Dynamic by nature |
| Forms / interactive UI | `'use client'` | Browser interaction needed |
| Mutations | `'use server'` + `revalidateTag` | Server Actions |

> Product and use case pages are **hardcoded routes** (`/products/vision-sdk/page.tsx`), not dynamic `[slug]` routes. No `generateStaticParams` needed.

---

## 9. SUSPENSE + PPR + STREAMING

Use **Suspense blocks** to wrap any section that streams in dynamically — this enables PPR (Partial Prerendering), where the static shell renders immediately and dynamic content streams in after.

```tsx
import { Suspense } from 'react'

export default async function BlogPage() {
  return (
    <main>
      <StaticHero />                         {/* renders immediately */}

      <Suspense fallback={<PostsSkeleton />}>
        <BlogPostList />                      {/* streams in */}
      </Suspense>
    </main>
  )
}
```

**Rules:**
- Static shell (layout, hero, nav) — outside Suspense, renders instantly
- Dynamic content (post lists, filtered results, DB-driven sections) — inside Suspense
- Always provide a `fallback` — a skeleton or loading state
- Do not wrap entire pages in Suspense — only the dynamic parts

**On this site, Suspense will be used for:**
- Blog post list (`/blog`)
- Individual post content (`/blog/[slug]`)
- Any future search or filter UI

**Not needed for:**
- Homepage, SDK pages, use case pages, about, placeholders — fully static, no streaming required

---

## 10. BLOG PHASE — BUILD ONLY WHEN ASKED (VERY IMPORTANT)

Do not start until asked, keep placeholder, or TODO

```ts
// Data functions with connection()
export async function getBlogPosts() {
  await connection()
  return await db.select().from(posts)
}

// Page with cacheTag
export default async function BlogPage() {
  'use cache'
  cacheTag('blog-posts')
  const posts = await getBlogPosts()
  return (...)
}

// Server Action for mutations
'use server'
export async function publishPost(slug: string) {
  await savePost(slug)
  revalidateTag('blog-posts', 'days')
  revalidateTag(`post-${slug}`, 'weeks')
}
```

**TanStack Query** is used client-side only — for pagination, filters, optimistic UI. It does not replace server-side caching.

---

## 11. BUILD ORDER

- I will prompt what to build, page or comp.