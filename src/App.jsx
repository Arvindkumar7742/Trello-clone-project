import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePages from "./pages/HomePages";
import BoardsPage from "./pages/BoardsPage";

function App() {
  return (
    <>
      {/* Adding Routes page for the all the pages */}
      <Routes>
        <Route path="/" element={<Navigate to="/boards" replace />} />
        <Route path="/boards" element={<MainLayout />}>
          <Route index element={<HomePages />} />
          <Route path="/boards/:id" element={<BoardsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
