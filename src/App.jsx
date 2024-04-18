import CardComponent from "./components/cardComponent";
import SendMoney from "./components/sendMoney";
import icon from "./assets/dollar.png";
import Korrency from "./components/korrency";
import Header from "./components/header";
import HeroSection from "./components/heroSection";

function App() {
  return (
    <div className="main-container">
      <Header />
      <HeroSection />
      <Korrency />
    </div>
  );
}

export default App;
