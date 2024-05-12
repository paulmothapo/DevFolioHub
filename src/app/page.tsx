import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import FeaturedPortfolios from '@/FeaturedPortfolios';
import TopPortfolios from '@/TopPortfolios';
import RecentPortfolios from '@/RecentPortfolios';

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <FeaturedPortfolios />
    <TopPortfolios />
    <RecentPortfolios />
    </>
  );
}
