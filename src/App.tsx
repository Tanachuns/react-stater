import { Route, Routes } from "react-router-dom";
import Hello from "./pages/hello/hello";

//Pages

function App() {
  return (
    <>
      <Routes>
        <Route element={<Hello />} path="/hello" />
      </Routes>
    </>
  );
}

export default App;
