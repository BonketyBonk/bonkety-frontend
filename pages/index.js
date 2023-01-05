import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import ChooseOpponent from "../components/ChooseOpponent";
import BetAmount from "../components/BetAmount";
import Footer from "../components/Footer";
import Submit from "../components/Submit";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Services from "../components/Services";
// import Footer from "../components/Footer";
// import Form from "../components/Form";

export default function Home() {
  return (
    <div class="bg-orange-100">
      <Head></Head>

      <header>
        <Navbar />
      </header>

      <main>
        <ChooseOpponent />
        <BetAmount />
        <Submit />
        {/* <Hero />
        <About />
        <Services />
        <Form /> */}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
