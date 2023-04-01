const NavBar = ({unCompletedTodos}) => {
  return (
    <header>
      {unCompletedTodos ? (
        <>
          <span>{unCompletedTodos}</span>
          <h3> UnComplete Todo</h3>
        </>
      ) : (
        <></>
      )}
    </header>
  );
};

export default NavBar;
