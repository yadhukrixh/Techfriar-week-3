import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection/Hero";
import Carousel from "@/components/Carousel/Carousel";
import PopularCars from "@/components/PopularCars/PopularCars";
import SlideInButton from "@/components/SlideInButtons/SlideInButton";
import Subscribe from "@/components/Subscribe/Subscribe";
import RentalSteps from "@/components/RentalSteps/RentalSteps";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection/>
      <SlideInButton/>
      <Carousel/>
      <PopularCars/>
      <Subscribe/>
      <RentalSteps/>
    </main>
  );
}
