import React, {useState} from 'react';
import {useDispatch} from "react-redux"; //react redux에 있는 store
import {addTodoAction} from "./store/schedule.action";
import uuid from 'uuid/v4'

const ToDoInput = () => {
    const [todo, setTodo] = useState("") //임시저장
    const dispatch = useDispatch()
    const addToDo = todo => dispatch(addTodoAction(todo)) //addTodoAction에서 parameter로 todo를 받기 때문에 전달해줘야 한다 그러면 addToDo는 reducer가 된다
    const handleChange = e => {
        e.preventDefault() //데이터를 줄때 양방항으로 퍼져버리는데 이벤트 캡쳐링을 막기 위해 해줘야한다.
        setTodo(e.target.value)
    }
    const submitForm = e =>{
        e.preventDefault()
        const newTodo = {
            todoId :uuid(), //토큰이 발급되어 들어갔다.
            name : todo,
            complete : false
        }
        addToDo(newTodo) //consumer react-redux에 보내서 axios로 통신한다.
        setTodo("") //state 안에 있는 Todo를 지운다.
    }

    return (
        <>
            <form onSubmit={submitForm} method="POST">
                <div className="row mt-3">
                    <div className="form-group col-sm-8">
                        <input
                            type="text"
                            placeholder="Add a todo"
                            name="todo"
                            className="form-control"
                            value={todo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-sm-4">
                        <button type="submit" className="btn btn-primary btn-md">
                            Add Todo
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ToDoInput;