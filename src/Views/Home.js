import About from "../components/About";
import Cources from "../components/Cources";
import Enroll from "../components/Enroll";
import ExampleCarousel from "../components/ExampleCarousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ margin: "5px 0" }}>
        <ExampleCarousel />
      </div>
      <div style={{ margin: "5px 0" }}>
        <Enroll />
      </div>
      <div style={{ margin: "5px 0" }}>
        <Cources />
      </div>
      <div style={{ margin: "5px 0" }}>
        <Footer />
      </div>
      <div style={{ margin: "5px 0" }}>
        <About />
      </div>
    </div>
  );
}

export default Home;
