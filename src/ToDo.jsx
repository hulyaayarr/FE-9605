import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./todo.module.css";
import orangeBall from "./assets/orange-ball.svg";
import littleBall from "./assets/little-blue.svg";
import blueBall from "./assets/blue.svg";
import star from "./assets/star.svg";

export function ToDo() {
  const initialInput = " ";
  const [todoInput, setTodoInput] = useState(initialInput);

  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (e) => {
    e.preventDefault();

    if (todoInput.trim() !== "") {
      //Deleting all the spaces and checking if the user given an empty string or not
      setTodos([...todos, { text: todoInput }]);
      setTodoInput("");
    }
  };

  const removeTodo = (value) => {
    setTodos((oldValues) => {
      return oldValues.filter((toDo) => toDo !== value);
    });
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].completed) {
      newTodos[index].completed = false;
    } else {
      newTodos[index].completed = true;
    }

    setTodos(newTodos);
  };

  return (
    <>
      <section className={styles.wrapper}>
        <Container>
          <Row>
            <Col>
              <h1 className={styles.cardTitle}>Daily Tasks:</h1>
              <div className={`${styles.cardContent} position-relative`}>
                <img
                  src={orangeBall}
                  alt="Big ball"
                  className="position-absolute"
                  style={{
                    top: `-30%`,
                    left: `105%`,
                  }}
                />
                <img
                  src={blueBall}
                  alt="Big ball"
                  className="position-absolute"
                  style={{
                    top: `105%`,
                    left: `5%`,
                  }}
                />
                <img
                  src={littleBall}
                  alt="Big ball"
                  className="position-absolute"
                  style={{
                    top: `90%`,
                    left: `-10%`,
                  }}
                />
                <img
                  src={star}
                  alt="Big ball"
                  className="position-absolute"
                  style={{
                    top: `-30%`,
                    left: `-10%`,
                  }}
                />
                <form onSubmit={addTodo}>
                  <label>
                    New Task:
                    <input
                      type="text"
                      name="name"
                      className={`${styles.nexTask}`}
                      onChange={(e) => setTodoInput(e.target.value)}
                      value={todoInput}
                    />
                  </label>
                  <button type="submit" className={`${styles.addButton}`}>
                    Add
                  </button>
                </form>
                <ul className={styles.listTodoUl}>
                  {todos.map((todo, index) => (
                    <li className={styles.listTodo} key={index}>
                      <button
                        type="button"
                        className={`btn btn-success ${
                          todo.completed ? styles.completed : ""
                        }`}
                        onClick={() => completeTodo(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-check2-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                        </svg>
                      </button>
                      {todo.completed ? <del>{todo.text}</del> : todo.text}

                      <svg
                        onClick={() => removeTodo(todo)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="#ff7272"
                        className={`${styles.svgTrash} bi bi-trash-fill`}
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
