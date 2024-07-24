import CarigoryCard from './components/categoryHome';
import HeroPage from './components/heroPage';
import ProductsCard from './components/productsHome';
import CarouselPage from './components/corouselHome';
import GalareyHome from './components/galareyHome';



export default function Home() {

  return (
    <div>
      <HeroPage />
      <CarigoryCard />
      <ProductsCard />
      <CarouselPage />
      <GalareyHome />
    </div>
  );
}
