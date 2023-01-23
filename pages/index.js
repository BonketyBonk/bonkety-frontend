import ChooseOpponent from "../components/ChooseOpponent";
import BetAmount from "../components/BetAmount";
import Submit from "../components/Submit";
import Disclaimer from "../components/Disclaimer";
import Result from "../components/Result";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Services from "../components/Services";
// import Footer from "../components/Footer";
// import Form from "../components/Form";

export default function Home() {
  return (
    <div>
      <ChooseOpponent />
      <BetAmount />
      <Submit />
      <Disclaimer />
      {/* <Result /> */}
    </div>
  );
}
