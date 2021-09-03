import "./App.scss";
import Header from "../header/Header"
import Banner from "../banner/Banner";
import CatalogLead from "../catalog-lead/CatalogLead";
import Footer from "../footer/Footer"
import Goods from "../goods/Goods"

export default function App(props) {
  return (
    <div className="page">
      <Header/>
      <Banner />
      <Goods/>
      <Footer/>
    </div>
  );
}
