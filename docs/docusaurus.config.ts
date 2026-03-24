import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Third Loop",
  tagline: "Let your engineers, engineer",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.3rd-loop.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "3rd-loop", // Usually your GitHub org/user name.
  projectName: "third-loop-public", // Usually your repo name.

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content:
          "Third Loop — AI-enabled tools for mechanical, electrical, and nuclear engineers. Let your engineers, engineer.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "Third Loop, AI engineering tools, mechanical engineering, electrical engineering, nuclear engineering, AI for engineers, engineering automation",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:type",
        content: "website",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:title",
        content: "Third Loop — Let your engineers, engineer",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:description",
        content:
          "AI-enabled tools for mechanical, electrical, and nuclear engineers. Augment your workflow with purpose-built AI.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:url",
        content: "https://thirdloop.ai",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:card",
        content: "summary_large_image",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:title",
        content: "Third Loop — Let your engineers, engineer",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:description",
        content:
          "AI-enabled tools for mechanical, electrical, and nuclear engineers. Augment your workflow with purpose-built AI.",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/favicon-32x32.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/favicon-16x16.png",
      },
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          blogSidebarCount: "ALL",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_d1xyGP60riNzzPKWqYstKxpZbT1yExOWZZMW7F8ULYd",
        appUrl: "https://us.i.posthog.com",
        enableInDevelopment: true,
      },
    ],
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: "img/Logo-Color-2x.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [{ name: "robots", content: "index, follow" }],
    navbar: {
      title: "",
      logo: {
        alt: "Third Loop Logo",
        src: "img/Logo-Color.svg",
        srcDark: "img/Logo-White.svg",
        href: "https://3rd-loop.com",
        target: "_self",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "documentationSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/3rd-loop",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/3rd-loop/about",
            },
            {
              label: "X",
              href: "https://x.com/thirdloop",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/3rd-loop",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Third Loop`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
