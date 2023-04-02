import Select from "react-select";
const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "unCompleted", label: "unCompleted" },
];

const NavBar = ({
  unCompletedTodos,
  filterTodos,
  selectedOption,
  setSelectedOption,
}) => {
  const changeHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };

  return (
    <header>
      {unCompletedTodos ? (
        <>
          <span>{unCompletedTodos}</span>
          <h3> UnComplete Todo</h3>
          <Select
            onChange={changeHandler}
            value={selectedOption}
            options={options}
          />
        </>
      ) : (
        <>
          <h3>There is No Uncompleted Todo</h3>
        </>
      )}
    </header>
  );
};

export default NavBar;
