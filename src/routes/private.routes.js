import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EntryPage from "../pages/EntryPage";
import ExitPage from "../pages/ExitPage";

export default function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/entry" element={<EntryPage />} />
        <Route path="/exit" element={<ExitPage />} />
      </Routes>
    </BrowserRouter>
  );
}
