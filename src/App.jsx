import { useState } from 'react';

const App = () => {
    const [todo, setTodo] = useState({
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
        </div>
    );
};

export default App;
