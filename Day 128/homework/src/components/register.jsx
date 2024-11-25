const Login = () => {
  function click() {
    alert("You succesfully Login!");
  }
  return (
    <form>
      <input type="email" placeholder="Enter email please: " />
      <input type="password" placeholder="Enter password please: " />
      <button onClick={click} type="button">
        Submit
      </button>
    </form>
  );
};

export default Login;
