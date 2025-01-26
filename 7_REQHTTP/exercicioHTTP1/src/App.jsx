import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// componets
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
