import * as React from 'react';
import { SlideProps } from './SlideProps';
import styles from '../Slide/Slide.module.scss';
import { truncateString } from '../../../../utils/index';

/*
          DESTRUCTION #1
const Slide: React.StatelessComponent<SlideProps> = ({
    title,
    description,
    categories,
    ctaButton,
    imageUrl,
    isActive,
  }) =>
*/

const Slide: React.StatelessComponent<SlideProps> = (props) => {
    //  DESTRUCTION #2
    const {
      title,
      description,
      categories,
      ctaButton,
      imageUrl,
      isActive,
    } = props;


    //TODO is active or not
    console.log(title);

    const backgroundStyles = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
    };

    const renderCategories = () => {
      if (!categories) return null;
  
      return (
        categories
          // convert to array
          .split(', ')
          // get unique values
          .filter((value, index, self) => self.indexOf(value) === index)
          .map(category => {
            return (
              <span key={category} className={styles.category}>
                {category}
              </span>
            );
          })
      );
    };


    return (
      <section className={styles.slide} style={backgroundStyles}>
        <div className={styles.headline}>
          {renderCategories()}
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{truncateString(description)}</p>
          <a className={styles.cta} href={ctaButton.url}>
            {ctaButton.text}
          </a>
        </div>
    </section>
    );
  };
  
  export default Slide;