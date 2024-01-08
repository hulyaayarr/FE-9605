import { useState } from "react";

//import { button } from "react-bootstrap";

function App() {
  const initial = " ";
  const [todoInput, setTodoInput] = useState(initial);

  console.log(todoInput);

  return (
    <>
      <form>
        <label>
          Hedef:
          <input
            type="text"
            name="name"
            onChange={(e) => setTodoInput(e.target.value)}
            value={todoInput}
          />
        </label>
        <button type="submit">Ekle</button>
      </form>
    </>
  );
}

export default App;
