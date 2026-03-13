# Third Loop — Public Docs

The official public documentation site for [Third Loop](https://thirdloop.io). Built with [Docusaurus](https://docusaurus.io/).

> This repository is public. Anyone can read it, but only Third Loop team members can contribute.

---

## Contributing

This repo is maintained exclusively by the Third Loop team. External pull requests will not be accepted.

### Adding Documentation

Create a `.md` file in `docs/docs/` (or a subdirectory). Add frontmatter at the top:

```md
---
sidebar_position: 1
---

# Your Page Title

Content here...
```

To add a page to an existing section, place it in the appropriate subdirectory. To create a new section, add a folder with a `_category_.json`:

```json
{
  "label": "Section Name",
  "position": 3
}
```

### Adding Blog Posts

Create a `.md` file in `docs/blog/` using the naming convention `YYYY-MM-DD-your-slug.md`:

```md
---
slug: your-slug
title: Your Blog Post Title
authors: [your-author-key]
tags: [tag1, tag2]
---

Introduction paragraph shown in the blog list.

<!-- truncate -->

Full content here...
```

For posts with images, create a folder (e.g. `docs/blog/2025-01-15-my-post/`) containing an `index.md` and any image assets.

Authors are defined in `docs/blog/authors.yml`. Add your entry there before referencing it in a post.

---

## Local Development

```bash
cd docs
pnpm install
pnpm start        # dev server with hot reload
pnpm run build    # production build
pnpm run serve    # serve the production build locally
```
