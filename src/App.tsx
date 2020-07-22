import React from 'react';
import ToDoList from "./schedule/ToDoList";
import ToDoInput from "./schedule/ToDoInput";
import store from "./schedule/store"
import {Provider} from 'react-redux'
function App() {
  return (
      <>
          <Provider store={store}>
        <ToDoInput/><br/>
    <ToDoList/>
    </Provider>
</>
  );
}

export default App;
