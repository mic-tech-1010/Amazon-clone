import ImageCarousel from "./Carousel"
import CategoryCards from "./CategoryCards";
import { useMediaQuery } from '@/hooks/use-media-query';
import ProductSlider from "./ProductSlider";


function Main() {
    const isTablet = useMediaQuery("(min-width: 480px)")
    return (
        <main>
            {isTablet && <ImageCarousel />}
            <CategoryCards />
            <ProductSlider />
        </main>
    )
}

export default Main