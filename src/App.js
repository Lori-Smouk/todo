import './App.css';
import {useState, useEffect} from "react";

function App() {
    const [todo, setTodo]= useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                setTodo(json)
            })
    }, []);


  return (
      <div>
          <header>
              S.O.W.A
          </header>
          <div className="main">
              {todo.map(item => {
                  return (
                      item.completed ? (
                          <div className="w-295">
                              <div className="img">
                                  <img src="https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg"
                                       alt=""
                                       className="img"/>
                              </div>
                              <div className="zagolovok">
                                  {item.title}
                              </div>
                              <button className="btn">
                                  Hello World!
                              </button>
                          </div>) : false
                  )
              })}
          </div>
      </div>
  );
}

export default App;
