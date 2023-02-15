import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const App = () => {
    const dispatch = useDispatch();

    const todoState = useSelector((state) => {
        return state.todos;
    }); // [ ] < 여기에다가 {}를 넣는다.

    const [todo, setTodo] = useState({
        id: Date.now(),
        title: '',
        isDone: false,
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
                <h1>Works</h1>
                {todoState
                    .filter((item) => item.isDone === false)
                    .map((item) => (
                        <StTodoItem key={item.id}>
                            {item.title}{' '}
                            <button
                                onClick={() => {
                                    dispatch({ type: '삭제하기', payload: item.id });
                                }}
                            >
                                삭제
                            </button>
                            <button onClick={() => dispatch({ type: '업데이트', payload: item })}>
                                완료
                            </button>
                        </StTodoItem>
                    ))}
            </div>
            <div>
                <h1>Done</h1>
                {todoState
                    .filter((item) => item.isDone === true)
                    .map((item) => (
                        <StTodoItem key={item.id}>
                            {item.title}{' '}
                            <button
                                onClick={() => {
                                    dispatch({ type: '삭제하기', payload: item.id });
                                }}
                            >
                                삭제
                            </button>
                            <button onClick={() => dispatch({ type: '업데이트', payload: item })}>
                                취소
                            </button>
                        </StTodoItem>
                    ))}
            </div>
        </StContainer>
    );
};

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

export default App;
