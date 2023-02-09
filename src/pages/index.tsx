import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate from '@docusaurus/Translate';
import DocSidebar from '@theme/DocSidebar';
import { ThemeClassNames } from '@docusaurus/theme-common';
import DocPageStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css';
import SidebarStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css';
import sidebar from '@site/sidebars';

function customizesitebar() {
  let customize_sitebar = sidebar.mainSidebar;
  for (let category of customize_sitebar) {
    for (let item of category.items) {
      if (item.link) {
        item.href = `/docs/${item.link.id}`;
        item.items = [];
      } else if (item.id) {
        item.href = `/docs/${item.id}`;
      }
    }
  }
  return customize_sitebar;
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img className={styles.icon} src="img/logo-taple-icon.svg"></img>
        <img className={styles.logo_taple} src="img/logo-taple.svg"></img>
          <div className={styles.boxText}>
            <h1><Translate>Tracking (Autonomous) of Provenance and Lifecycle Events</Translate></h1>
            <br/>
            <p>
              <Translate>
              Discover TAPLE technology, a DLT solution for the traceability of the life cycle of different elements. It promises to be more efficient, 
              scalable and environmentally sustainable than any other solution of its kind.
              </Translate>
            </p>
          </div>
        <HomepageFeatures />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />"> 
      <div className={DocPageStyles.docPage}>
        <aside className={clsx(ThemeClassNames.docs.docSidebarContainer, SidebarStyles.docSidebarContainer)}>
          <DocSidebar sidebar={customizesitebar()}></DocSidebar>
        </aside>
        <div>
          <HomepageHeader />
        </div>
        <br/>
      </div>
    </Layout>
  );
}
