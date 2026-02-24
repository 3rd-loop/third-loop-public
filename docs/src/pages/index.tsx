import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.splash}>
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <a
          className={styles.cta}
          href="https://3rd-loop.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
        <br />
        <p>
          note this button should just immediately route to 3rd-loop.com
          eventually
        </p>
      </main>
    </Layout>
  );
}
