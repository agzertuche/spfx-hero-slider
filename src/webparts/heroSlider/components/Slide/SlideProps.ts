import { Slide } from "../../models/slide";

export interface SlideProps extends Slide {
    isActive: boolean;
}