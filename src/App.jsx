import SendMoney from "./components/sendMoney";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import KorrencyWork from "./components/korrencyWork";
import OurStory from "./components/ourStory";
import MoneySecured from "./components/moneySecured";
import FAQ from "./components/faq";
import Support from "./components/support";
import GetStarted from "./components/getStarted";
import Footer from "./components/footer";
import WhyChooseKorrency from "./components/whyChooseKorrency";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="main-container">
        <WhyChooseKorrency />
        <KorrencyWork />
        <SendMoney />
        <OurStory />
        <MoneySecured />
        <FAQ />
        <Support />
        <GetStarted />
      </div>
      <Footer />
    </div>
  );
}

export default App;
