# Managing portfolio projects

Project changes live in this Git repository. Push them to GitHub and Vercel deploys the site. There is no project editor that saves from the browser. A static site cannot write files into the repo or store uploads on Vercel.

## Where things live

| What | Where |
| --- | --- |
| Project text, links, order, and image paths | `lib/projects.ts` |
| Screenshot files | `public/projects/` |
| Public cards | Homepage section `#projects` |
| Local preview, including hidden drafts | `http://localhost:3000/project-manager` while `npm run dev` is running |

The homepage calls `getPublicProjects()` and shows entries with `published: true`. Cards show `summary`, the technology `tags`, a cover when `coverImage` or the first extra image exists, and a link only when that URL is set.

`description` is stored on the project and is not shown on the public card. Put the text visitors should read in `summary`. The local preview shows `description` when you set it.

## Add a project

1. Add a screenshot to `public/projects/`. Wide images work best. The card crops them to 16:10 from the top. Use `.png`, `.jpg`, or `.webp`.
2. Add an object to the `projects` array in `lib/projects.ts`.
3. Preview with `npm run dev`.
4. Commit and push.

Use a new `slug`. Leave `liveUrl` and `repoUrl` off until you have the real address. Leave `coverImage` off until the file is in `public/projects/`. A path with no file shows a broken image.

```ts
{
  slug: 'example-app',
  title: 'Example App',
  summary: 'One or two sentences visitors read on the card.',
  description:
    'Optional longer notes. The homepage card does not show this field.',
  category: 'production', // or 'personal'
  tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  coverImage: '/projects/example-app.png',
  images: [
    {
      src: '/projects/example-app-detail.png',
      alt: 'Example App detail screen',
    },
  ],
  liveUrl: 'https://example.com',
  repoUrl: 'https://github.com/Abdul100-han/example-app',
  featured: false,
  sortOrder: 9,
  published: false,
}
```

`coverImage` is the public URL, not the disk path. The file `public/projects/example-app.png` is referenced as `/projects/example-app.png`.

The cover’s alternative text is the project title followed by “screenshot”. Extra images use the `alt` you write. Delete `liveUrl` and `repoUrl` until those addresses are real, and do not publish the example slug.

Set `published` to `true` when the card should appear on the homepage. `published: false` keeps the entry in the file and hides it from visitors. You can still see it at `/project-manager` during local development.

`category: 'production'` places the card under Production work. `category: 'personal'` places it under Personal blockchain projects.

`sortOrder` controls order inside that group. Lower numbers come first. It does not move a project between groups.

`featured: true` adds a Featured label on the card. It does not change the order.

## Update a project

Change the fields on that object in `lib/projects.ts`. To replace a screenshot, add the new file under `public/projects/`, point `coverImage` at it, and delete the old file if nothing else uses it.

## Remove a project

Delete its object from the array. Delete its files in `public/projects/` if no other project references them.

To hide a project without deleting it, set `published: false`.

## Preview

```bash
npm run dev
```

- Public page: [http://localhost:3000/#projects](http://localhost:3000/#projects)
- All entries, including hidden ones: [http://localhost:3000/project-manager](http://localhost:3000/project-manager)

`/project-manager` is a preview. It has no save button and no upload control. After a production build, that URL is a 404, including on Vercel.

## Deploy

From the repository root, after the preview looks right:

```bash
git add lib/projects.ts public/projects
git commit -m "Update portfolio projects"
git push
```

Push the branch Vercel is connected to. Vercel builds from that commit. The live site updates when that deployment finishes.
