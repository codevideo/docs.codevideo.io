import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Build Software Content Quickly',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        CodeVideo is a framework for producing clear, accurate, and correct software educational content with ease. 
      </>
    ),
  },
  {
    title: 'Build Once, Export Everywhere',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Export your course or lesson to video, markdown, web, and much more in minutes.
      </>
    ),
  },
  {
    title: '100% Open Source',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Everything in the CodeVideo framework and ecosystem is open source. We
        are committed to building a community around the CodeVideo framework.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
