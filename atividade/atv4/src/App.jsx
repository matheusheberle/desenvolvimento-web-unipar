import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const postData = {
    title: "Tudo o que você precisa saber sobre GTA VI",
    author: "Redação Unipar Games",
    date: "02/10/2026",
    content: "GTA VI é o próximo título da Rockstar Games..."
  };

  return (
    <div>
      <Header />
      <Navigation />
      
      <div id="layout-geral">
        <Sidebar />
        <main id="container">
          <Article {...postData} />
        </main>
      </div>
      
      <Footer />
    </div>
  );
}