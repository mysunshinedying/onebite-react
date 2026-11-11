import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import {Route, Routes} from "react-router";
import Notfound from "./pages/Notfound.jsx";

// 1. "/": Home 페이지
// 2. "/new" : 새 일기
// 3. "/diary" 일기 조회
function App(callback, deps) {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/diary" element={<Diary/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
    )
}

export default App
