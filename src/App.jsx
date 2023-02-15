import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const StContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 30px;
`;

const Stlabel = styled.label`
    display: flex;
    gap: 24px;
`;

const StInput = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const StTodoItem = styled.div`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const StTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 16px;
`;

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

    const handleChange = ({ target: { value: title } }) => {
        setTodo((pre) => ({
            ...pre,
            title,
        }));
    };
    return (
        <StContainer>
            <div>
                <Stlabel>제목</Stlabel>
                <StInput type="text" value={todo.title} onChange={handleChange} />
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
            </div>

            <StTitle>Todo!</StTitle>
            <div>
                {todos.map((todo) => (
                    <StTodoItem key={todo.id}>{todo.title}</StTodoItem>
                ))}
            </div>
        </StContainer>
    );
};

export default App;
