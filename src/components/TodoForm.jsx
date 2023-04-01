import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Enter Todo !");
      return;
    }

    props.submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="foromControl">
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={props.edit ? "update Todo ..." : "add Todo ..."}
          ref={inputRef}
        />
        <button className={`btn ${props.edit ? "" : "addTodo" } `} type="submit">{props.edit ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default TodoForm;
