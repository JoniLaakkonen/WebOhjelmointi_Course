import Header from "./components/Header";
import Urheilijat from "./components/Urheilijat";
import Error from "./components/errorpage";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <div className='main'>
        <Routes>
          <Route path='/' element={<><Header /> <Urheilijat /></>} />
          <Route path="*" element={
            <>
              <Error />
            </>
          }>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
