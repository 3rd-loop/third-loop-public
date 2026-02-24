# third-loop-public
Official public repository for Third Loop - company information, documentation, and open resources

## Documentation Site

The `docs/` directory contains a [Docusaurus](https://docusaurus.io/) site.

### Getting Started

```bash
cd docs
pnpm install
```

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm start` | Start the development server with hot reload |
| `pnpm run build` | Build the static site for production |
| `pnpm run serve` | Serve the production build locally |
| `pnpm run serve:build` | Build and serve in one step |

## How to Contribute

### Adding Documentation

Create a new `.md` file in `docs/docs/` (or a subdirectory). Add frontmatter at the top:

```md
---
sidebar_position: 1
---

# Your Page Title

Your content here...
```

Files are organized by folder. To add a page to an existing section, place it in the appropriate subdirectory (e.g. `docs/docs/tutorial-getting-started/`). To create a new section, add a new folder with a `_category_.json`:

```json
{
  "label": "Section Name",
  "position": 3
}
```

### Adding Blog Posts

Create a new `.md` file in `docs/blog/` using the naming convention `YYYY-MM-DD-your-slug.md`:

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

For posts with images, create a folder instead (e.g. `docs/blog/2025-01-15-my-post/`) containing an `index.md` and any image assets.

Authors are defined in `docs/blog/authors.yml`. Add your entry there before referencing it in a post.
