import React from 'react';
import ToDoList from "./schedule/ToDoList";
import ToDoInput from "./schedule/ToDoInput";
import rootReducer from './todos/store'
import {Provider} from 'react-redux'
import TodosApp from "./todos/TodosApp";
import {createStore} from "redux";
function App() {
    const store = createStore(rootReducer)
  return (
      <>
          <Provider store={store}>
        <TodosApp/>
    </Provider>
</>
  );
}

export default App;
