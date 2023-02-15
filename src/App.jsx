import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state) => {
        console.log('todos', state.todos.todos);
        return state.todos.todos;
    }); // [ ] < 여기에다가 {}를 넣는다.

    const [todo, setTodo] = useState({
        id: new Date(),
        title: '',
    });
    return (
        <div>
            <label>제목</label>
            <input
                type="text"
                value={todo.title}
                onChange={({ target: { value: title } }) => {
                    setTodo((pre) => ({
                        ...pre,
                        title,
                    }));
                }}
            />
            <button
                onClick={() => {
                    dispatch({
                        type: '추가하기',
                        payload: todo,
                    });
                }}
            >
                Todo 추가하기
            </button>

            <br />
            <br />
            <h1>Todo!</h1>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.title}</div>
            ))}
        </div>
    );
};

export default App;
