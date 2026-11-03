import {useRef, useState, useReducer, useCallback} from 'react'
import './App.css'
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import Header from "./components/Header.jsx";
import Exam from "./components/Exam.jsx";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: 'React 공부하기',
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: '빨래하기',
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: '노래 연습하기',
        date: new Date().getTime(),
    },
]

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map((item) =>
                item.id === action.targetId
                    ? {...item, isDone: !item.isDone}
                    : item);
        case 'DELETE':
            return state.filter(
                (item) => item.id !== action.targetId
            );
    }
}

function App(callback, deps) {
    // const [todos, setTodos] = useState(mockData);
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    // const onCreate = (content) => {
    //     // const newTodo = {
    //     //     id: idRef.current++,
    //     //     isDone: false,
    //     //     content: content,
    //     //     date: new Date().getTime(),
    //     // }
    //     // setTodos([...todos, newTodo]);
    //
    //     dispatch({
    //         type: "CREATE",
    //         data: {
    //             id: idRef.current++,
    //             isDone: false,
    //             content: content,
    //             date: new Date().getTime(),
    //         }
    //     })
    // }

    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            }
        })
    }, [])

    // const onUpdate = (targetId) => {
    //     // todos State의 값들 중에
    //     // targetId와 일치하는 id를 갖는 to-do Item의 isDone 변경
    //     // setTodos(
    //     //     todos.map((todo) => {
    //     //         return todo.id === targetId
    //     //             ? {...todo, isDone: !todo.isDone,}
    //     //             : todo
    //     //     }))
    //
    //     dispatch({
    //         type: "UPDATE",
    //         targetId: targetId,
    //     })
    //
    // }

    const onUpdate = useCallback((targetId) => {

        dispatch({
            type: "UPDATE",
            targetId: targetId,
        })

    }, [])

    // const onDelete = (targetId) => {
    //     // return setTodos(todos.filter((todo) => todo.id !== targetId));
    //     dispatch({
    //         type: "DELETE",
    //         targetId: targetId,
    //     })
    // }

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId,
        })
    }, [])

    return (
        <div className="App">
            {/*<Exam/>*/}
            <Header/>
            <Editor onCreate={onCreate}/>
            <List todos={todos}
                  onUpdate={onUpdate}
                  onDelete={onDelete}/>
        </div>
    )
}

export default App
