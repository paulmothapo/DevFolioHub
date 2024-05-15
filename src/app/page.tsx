import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainHero from "@/components/MainHero";
import FeaturedPortfolios from "@/FeaturedPortfolios";
import TopPortfolios from "@/TopPortfolios";
import RecentPortfolios from "@/RecentPortfolios";

export default function Home() {
  return (
    <>
      <Header />
      <MainHero />
      <section id="featured-portfolios">
        <FeaturedPortfolios />
      </section>
      <TopPortfolios />
      <RecentPortfolios />
      <Footer/>
    </>
  );
}
