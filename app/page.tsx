import About from "./Components/About/About";
import Discount from "./Components/Discount/Discount";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Overview from "./Components/Overview/Overview";
import Plans from "./Components/Plans/Plans";
import Practice from "./Components/Practice/Practice";

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar />
      <Overview />
      <Features />
      <div className="max-w-6xl mx-auto">
        <About />
        <Practice />
        <Plans />
        <Discount />
        <Footer />
      </div>
    </main>
  );
}
