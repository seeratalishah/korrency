import SendMoney from "./components/sendMoney";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import KorrencyWork from "./components/korrencyWork";
import OurStory from "./components/ourStory";
import MoneySecured from "./components/moneySecured";
import FAQ from "./components/faq";
import Support from "./components/support";
import GetStarted from "./components/getStarted";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="main-container">
        <KorrencyWork />
        <SendMoney />
        <OurStory />
        <MoneySecured />
        <FAQ />
        <Support />
        <GetStarted />
      </div>
    </div>
  );
}

export default App;
