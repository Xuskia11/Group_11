const Login = ({ loginSucces }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const storedUser = localStorage.getItem(email);

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (parsedUser.password === password) {
        alert(`Welcome ${parsedUser.name}`);
        loginSucces(parsedUser);
      } else {
        alert("Incorrect Password");
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email: " name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login In</button>
      </form>
    </div>
  );
};


export default Login