import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Why?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        People — My eternal Passion. Forever love. All-time Happiness factor.
        I have coached and helped hundreds of Kung Fu Pandas identify who they are,
        their strengths and opportunities, come up with actionable plans, guided them
        through their journey to overcome their fears, failures and accomplishments.
      </>
    ),
  },
  {
    title: 'What?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Identify core values
        Break your mirrors – Stop your own deceptive talk
        Identify your strengths, hidden potentials, energy drainers and opportunities
        Help you chart out meaningful personal and professional goals and walk along
        with you in the journey
        Bring in clarity and hence transformation and growth
      </>
    ),
  },
  {
    title: 'How?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Invested 1:1 conversations
        Self-Introspection and meaningful discussions
        Design personalised systems for transformation
        Share actionable tips and templates
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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
