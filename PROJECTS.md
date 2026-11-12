# Managing portfolio projects

Project changes live in this Git repository. Push them to GitHub and Vercel deploys the site. There is no project editor that saves from the browser.

## Where things live

| What | Where |
| --- | --- |
| Project text, links, order, and image paths | `lib/projects.ts` |
| Profile, experience, and skills | `lib/profile.ts` |
| Screenshot files | `public/projects/` |
| Production cards | Homepage section `#projects` |
| Blockchain cards | Homepage section `#web3` |
| Local preview, including hidden drafts | `http://localhost:3000/project-manager` while `npm run dev` is running |

The homepage calls `getPublicProjects()` and shows entries with `published: true`. A card shows `summary`, `contribution` when set, `status`, the technology `tags`, and a link only when that URL is set.

If `coverImage` and `images` are both empty, the card shows a labeled placeholder. That placeholder is not a screenshot. Do not point `coverImage` at a stock image or an illustration and leave the alt text calling it a screenshot.

`description` is stored on the project and is not shown on the public card. Put the text visitors should read in `summary`.

## Add a project

1. Add a screenshot to `public/projects/`. Wide images work best. The card crops them to 16:10 from the top. Use `.png`, `.jpg`, or `.webp`.
2. Add an object to the `projects` array in `lib/projects.ts`.
3. Preview with `npm run dev`.
4. Commit and push.

Use a new `slug`. Leave `liveUrl`, `repoUrl`, and `caseStudyUrl` off until you have the real address. Leave `chainNotes` off until the network or contract detail is verified. Leave `coverImage` off until the file is in `public/projects/`. A path with no file shows a broken image.

```ts
{
  slug: 'example-app',
  title: 'Example App',
  summary: 'One or two sentences visitors read on the card.',
  contribution: 'What you specifically built. Omit this until you can state it.',
  description: 'Optional longer notes. The homepage card does not show this field.',
  category: 'production', // or 'web3'
  status: 'Production',
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
  caseStudyUrl: 'https://example.com/case-study',
  featured: false,
  sortOrder: 16,
  published: false,
}
```

`coverImage` is the public URL, not the disk path. The file `public/projects/example-app.png` is referenced as `/projects/example-app.png`.

The cover’s alternative text is the project title followed by “screenshot”. Extra images use the `alt` you write. Delete URL fields until those addresses are real, and do not publish the example slug.

Set `published` to `true` when the card should appear on the homepage. `published: false` keeps the entry in the file and hides it from visitors. You can still see it at `/project-manager` during local development.

`category: 'production'` places the card under Selected projects. `category: 'web3'` places it under Blockchain & Web3.

`sortOrder` controls order inside that group. Lower numbers come first.

`featured: true` gives a production project the larger slot at the top of Selected projects. It does not add a public “Featured” label.

Four production drafts are already in the file with `published: false`: Dan Ziyal Academy & Consultancy, Shareef NiceHome, STEDi-AI Framework, and Invoice Management Platform. Replace the TODO summary before setting `published` to `true`.

## Update a project

Change the fields on that object in `lib/projects.ts`. To replace a screenshot, add the new file under `public/projects/`, point `coverImage` at it, and delete the old file if nothing else uses it.

To add another screenshot, append to `images`. The card shows those files under the summary, and it skips an image whose `src` is already the cover.

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
