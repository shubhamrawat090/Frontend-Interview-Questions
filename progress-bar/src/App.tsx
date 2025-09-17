import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <main className="main">
      <p>Progress Bar</p>
      <ProgressBar progress={0} width={"400px"} />
    </main>
  );
}

export default App;
