import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Content from "./components/content";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        <div className="w-1/6 bg-gray-400">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Content />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
