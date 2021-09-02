import "./App.scss";
import Header from "../header/Header"
import Banner from "../banner/Banner";
import CatalogLead from "../catalog-lead/CatalogLead";
import Footer from "../footer/Footer"

export default function App() {
  return (
    <div className="page">
      <Header/>
      {/*<CatalogLead />*/}
      <Footer />
    </div>
  );
}
