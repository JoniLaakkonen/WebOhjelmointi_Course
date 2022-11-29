//import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Posts />
              </>
            }
          />
          <Route
            path="/add"
            element={
              <>
                <Header />
                <AddPost />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
