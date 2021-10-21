import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'uSync 8.x',
    version: '8',
    link: '/docs/8.x/intro',
    description: (
      <>
        Documentation for uSync & uSync.Complete running on Umbraco 8.x websites

      </>
    ),
  },
  {
    title: 'uSync 9.x',
    version: '9',
    link: '/docs/intro',
    description: (
      <>
        Running uSync &amp; uSync.Complete on Umbraco 9 and the .Net core platform
      </>
    ),
  },
];

function Feature({ title, link, version, description }) {
  return (
    <div className={clsx('col col--6')}>

      <Link
        className="feature-link"
        to={link}>        
        <div className="text--center">
          <h1 class="feature-title">{title}</h1>
        </div>
        <div className="text--center padding-horiz--md">
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
