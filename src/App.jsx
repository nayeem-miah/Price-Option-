import "./App.css";
import NabBar from "./Components/NabBar/NabBar";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import LineCharts from "./Components/LineCharts/LineCharts";
import Phones from "./Components/Phones/Phones";

function App() {
  return (
    <>
    <NabBar></NabBar>
    <DaisyNav></DaisyNav>
      <h1 className="text-7xl bg-red-400">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      
      <Phones></Phones>
    </>
  );
}

export default App;
