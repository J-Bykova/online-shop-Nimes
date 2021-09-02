import "./App.scss";
import Header from "../header/Header"
import Banner from "../banner/Banner";
import CatalogLead from "../catalog-lead/CatalogLead";

export default function App() {
  return (
    <div className="page">
      {/*<Banner/>*/}
      <Header/>
      <CatalogLead/>
    </div>
  );
}
