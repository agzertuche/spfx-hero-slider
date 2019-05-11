import * as React from 'react';
import { HeroSliderProps } from './HeroSliderProps';
import { HeroSliderState } from './HeroSliderState';
import { Slide, Nav, Controls } from '../../components';
import { ComponentStatus } from '../../models/ComponentStatus';
import styles from '../HeroSlider/HeroSlider.module.scss';

export default class HeroSlider extends React.Component<
  HeroSliderProps,
  HeroSliderState
  > {
  constructor(props: HeroSliderProps) {
    super(props);

    this.state = {
      slides: [],
      currentIndex: 0,
      componentStatus: ComponentStatus.Loading
    };
  }

  public render(): React.ReactElement<HeroSliderProps> {
    const {
      slides,
      currentIndex
    } = this.state;

    return (
      <div className={styles.slider}>
        <Controls />
        <Nav />
        {slides.map((slide, index) => (
          //      Watch out when Overwriting values with the '...' Spread Operator
          //<Slide key={slide.id} isActive={currentIndex === index} {...slide} />
          <Slide key={slide.id} {...slide} isActive={currentIndex === index}  />
        ))}
      </div>
    );
    // return <div>🐣 Hello World! testing hot reloading</div>;
  }

  public componentDidMount(): void {
    const { slidesLimit, dataProvider, contentTypeName } = this.props;

    // if (!contentTypeName) {
    //   return this.setState({
    //     componentStatus: ComponentStatus.MissingConfiguration,
    //   });
    // }

    dataProvider
      .getSlides(contentTypeName)
      .then(result => {
        if (result.length === 0) {
          return this.setState({
            componentStatus: ComponentStatus.Error,
          });
        }

        this.setState({
          slides: result.slice(0, slidesLimit),
          componentStatus: ComponentStatus.Completed,
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          componentStatus: ComponentStatus.Error,
        });
      });
  }
}
