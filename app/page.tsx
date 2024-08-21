
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection/Hero";
import Carousel from "@/components/Carousel/Carousel";
import PopularCars from "@/components/PopularCars/PopularCars";
import Subscribe from "@/components/Subscribe/Subscribe";
import RentalSteps from "@/components/RentalSteps/RentalSteps";
import AvailableLocations from "@/components/AvailableLocations/AvailableLocations";
import FAQ from "@/components/FAQ/FAQ";
export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection/>
      <Carousel/>
      <PopularCars/>
      <Subscribe/>
      <RentalSteps/>
      <AvailableLocations/>
      <FAQ/>
    </main>
  );
}
