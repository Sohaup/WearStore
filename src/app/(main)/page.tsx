import CategoriesSection from "../_components/fearures/Home/Categories/CategoriesSection";
import CategoryProductsSection from "../_components/fearures/Home/CategoryProducts/CategoryProductsSection";
import LandingSection from "../_components/fearures/Home/Landing/LandingSection";
import NewsSection from "../_components/fearures/Home/News/NewsSection";
import ProductSection from "../_components/fearures/Home/ProductSection/ProductSection";
import StyleSection from "../_components/fearures/Home/StyleSection/StyleSection";
import TestmonialSection from "../_components/fearures/Home/Testmonial/TestmonialSection";


export default function Home() {
  return (
    <>
    <LandingSection/>
    <CategoriesSection/>
    <StyleSection/>
    <ProductSection/>
    <CategoryProductsSection/>
    <TestmonialSection/>
    <NewsSection/>
    </>
  );
}
