// import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Dash from "./components/dash";
import Forget from "./pages/auth/forget/forget";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Error404 from "./pages/Error/404/error404";
import Error500 from "./pages/Error/500/error500";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dash />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget-password' element={<Forget />} />
          <Route path='/error400' element={<Error404 />} />
          <Route path='/error500' element={<Error500 />} />
          {/* <Route path='/hotels' element={<List />} /> */}
          {/* <Route path='/hotels/:id' element={<Hotel />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
