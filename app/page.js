import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Ecilipse from "./components/ecilipse";
import Preloader from "./components/preloader";
const page = () => {
  return (
    <>
      <Preloader />
      <main className="root">
        <Navbar />
        <Header />
        <Ecilipse />
        <Footer />
      </main>
    </>
  );
};

export default page;
