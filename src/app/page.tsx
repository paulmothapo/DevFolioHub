import Header from "@/nav/Header";
import Footer from "@/nav/Footer";
import MainHero from "@/main/MainHero";
import FeaturedPortfolios from "@/main/FeaturedPortfolios";
import TopPortfolios from "@/main/TopPortfolios";
import RecentPortfolios from "@/main/RecentPortfolios";

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
