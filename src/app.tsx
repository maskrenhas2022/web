import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from './pages/create-room';
import { Room } from "./pages/room";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para a página inicial (CreateRoom) */}
        <Route index element={<CreateRoom />} />

        {/* Rota para a página Room, acessível via "/room" */}
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}