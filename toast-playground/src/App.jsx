import "./App.css";
import { Header } from "./components/Header";
import ToastPlayground from "./components/Toast/ToastPlayground/ToastPlayground";

function App() {
  return (
    <main className="container">
      <Header />
      <ToastPlayground />
    </main>
  );
}

export default App;
