import { Header, Sidebar } from "./components";
import { Route, Routes } from "react-router-dom";
import { HomePage, WorkTablePage } from "./pages";
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work_table" element={<WorkTablePage />} />
      </Routes>
    </>
  );
}
export default App;
