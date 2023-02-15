// 원래 있던 코드
import { createStore } from 'redux';
import { combineReducers } from 'redux';

// 새롭게 추가한 부분
import counter from '../modules/counter';
import todos from '../modules/todos';

const rootReducer = combineReducers({
    counter: counter, // ;<- 새롭게 추가한 부분
    todos,
});
const store = createStore(rootReducer);

export default store;
