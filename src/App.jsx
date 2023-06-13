import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/home";
import { ListChat } from "./pages/list";
import { PasswordInput } from "./pages/login";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/list" element={<ListChat/>}></Route>
      <Route path="/login" element={<PasswordInput/>}></Route>
    </Routes>
    </>
  );
}

export default App;
