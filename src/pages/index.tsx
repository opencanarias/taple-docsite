import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate from '@docusaurus/Translate';
import DocPageStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img className={styles.icon} src="img/logo-taple-icon.svg"></img>
        <img className={styles.logo_taple} src="img/logo-taple.svg"></img>
        <div className={styles.boxText}>
          <h1><Translate>Tracking (Autonomous) of Provenance and Lifecycle Events</Translate></h1>
          <p>
            <Translate>
              Discover TAPLE technology, a DLT solution for the traceability of the life cycle of different elements in an efficient, scalable and environmentally sustainable way.
            </Translate>
          </p>
        </div>
        <HomepageFeatures />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <div className={DocPageStyles.docPage}>
        <div className={clsx(styles.container)}>
          <HomepageHeader />
        </div>
        <br />
      </div>
    </Layout>
  );
}
