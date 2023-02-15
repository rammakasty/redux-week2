// 액션 타입

// 액션 크리에이터

// 초기값
const initialState = {
    todos: [
        {
            id: 1,
            title: '리액트는 재밌다',
        },
        {
            id: 2,
            title: '코딩은 재밌어요',
        },
    ],
};

// 리듀서 = 함수다.
const todosReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case '추가하기':
            return {
                ...state,
                todos: state.todos.concat(action.payload),
            };

        default:
            return state;
    }
};

export default todosReducer;
