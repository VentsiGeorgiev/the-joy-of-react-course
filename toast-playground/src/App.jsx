import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ToastPlayground from "./components/Toast/ToastPlayground/ToastPlayground";

function App() {
  return (
    <main className="container">
      <Header />
      <ToastPlayground />
      <Footer />
    </main>
  );
}

export default App;
