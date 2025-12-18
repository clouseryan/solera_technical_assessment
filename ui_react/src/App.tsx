import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { About } from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<div><h2>Home Page</h2><p>Welcome to the app.</p></div>} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
