import { Route, Routes } from "react-router";
import Home from "./components/main/Home";
import Test from "./components/main/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
