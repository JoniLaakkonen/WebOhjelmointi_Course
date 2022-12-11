import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Error from './components/errorpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Header/> <About/> <Footer/></>}/>
        <Route path="*" element={<><Error /></>}></Route>
      </Routes>
    </>
  );
}

export default App;
