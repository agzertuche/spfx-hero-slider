import { Slide } from './slide';

export interface DataProvider {
  getSlides(contentTypeName?: string): Promise<Slide[]>;
}
