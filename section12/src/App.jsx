import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import {Link, Route, Routes, useNavigate} from "react-router";
import Notfound from "./pages/Notfound.jsx";
import {getEmotionImage} from "./util/get-emotion-images.js";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";


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
            <Header
                title={"Header"}
                leftChild={<Button text={"Left"}/>}
                rightChild={<Button text={"Right"}/>}
            />
            <Button text={"123"}
                    onClick={() => {
                        console.log('123번 버튼 클릭!')
                    }}/>
            <Button text={"123"}
                    type={"positive"}
                    onClick={() => {
                        console.log('123번 버튼 클릭!')
                    }}/>
            <Button text={"123"}
                    type={"negative"}
                    onClick={() => {
                        console.log('123번 버튼 클릭!')
                    }}/>

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
