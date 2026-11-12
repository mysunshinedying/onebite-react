import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import {Link, Route, Routes, useNavigate} from "react-router";
import Notfound from "./pages/Notfound.jsx";

// 1. "/": Home 페이지
// 2. "/new" : 새 일기
// 3. "/diary" 일기 조회
function App(callback, deps) {
    const nav = useNavigate()
    const onClickButton = () => {
        nav('/new');
    }

    return (
        <>
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/new"}>New</Link>
            <Link to={"/diary"}>Diary</Link>
        </div>
            {/*<button onClick={onClickButton}>New 페이지로 이동</button>*/}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/diary/:id" element={<Diary/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
        </>
    )
}

export default App
