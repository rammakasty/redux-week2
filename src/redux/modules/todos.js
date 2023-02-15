// 액션 타입

// 액션 크리에이터
// 초기값
// array [{},{}]
// return [{기존에 있던 값},업{데이트된 값}]
const initialState = [
    {
        id: 1,
        title: '리액트는 재밌다',
        isDone: false,
    },
    {
        id: 2,
        title: '코딩은 재밌어요',
        isDone: true,
    },
];

// 리듀서 = 함수다
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case '추가하기':
            return [...state, action.payload];
        case '삭제하기':
            return state.filter((item) => item.id !== action.payload);
        case '업데이트':
            action.payload.isDone = !action.payload.isDone;
            return state.map((item) => (item.id === action.payload.id ? action.payload : item));
        default:
            return state;
    }
};

export default todosReducer;
