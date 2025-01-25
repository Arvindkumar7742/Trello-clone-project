import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import BoardsPage from "./pages/BoardsPage";
import BoardDetailsPage from "./pages/BoardDetailsPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      {/* Adding Routes page for the all the pages */}
      <Routes>
        <Route path="/" element={<Navigate to="/boards" replace />} />
        <Route path="/boards" element={<MainLayout />}>
          <Route index element={<BoardsPage />} />
          <Route path="/boards/:id" element={<BoardDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
