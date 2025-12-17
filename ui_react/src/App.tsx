import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<div><h2>Home Page</h2><p>Welcome to the app.</p></div>} />
        <Route path="about" element={<div><h2>About Page</h2><p>This is the about page.</p></div>} />
      </Route>
    </Routes>
  );
}

export default App;
