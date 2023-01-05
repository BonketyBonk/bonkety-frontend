import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head></Head>

      <header>
        <Navbar />
      </header>

      <main>
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
