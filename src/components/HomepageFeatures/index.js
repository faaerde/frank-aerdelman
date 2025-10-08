import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: 'Technical Writing Jobs',
      link: 'docs/category/work-experience',
    Svg: require('@site/static/img/undraw_book-writer_ri5u.svg').default,
    description: (
      <>
          Over 22 years of experience providing documentation covering the military, aerospace/aviation, commercial/industrial, and semiconductor industries.
      </>
    ),
  },
  {
    title: 'Hobbies',
      link: 'docs/category/hobbies',
    Svg: require('@site/static/img/undraw_jogging_tf9a.svg').default,
    description: (
      <>
        I've got several hobbies that I'm passionate about!
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
          <Link to={link}><Heading as="h3">{title}</Heading></Link>
        <p>{description}</p>
      </div>
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
