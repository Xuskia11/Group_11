const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const info = {
          Username: e.target.userName.value,
          Email: e.target.userEmail.value,
          Password: e.target.userPass.value
        };

        // Add to localStorage
        if (JSON.parse(localStorage.getItem(JSON.stringify(e.target.userEmail.value)))){
            alert("Succesfull")
        } else {
            localStorage.setItem(JSON.stringify(e.target.userEmail.value), JSON.stringify(info));
        }
        
        
    }
    return (
        <div className="conatiner">
            <form onSubmit={handleSubmit}>
                <input name="userName" type="text" placeholder="Username: "/>
                <input name="userEmail" type="email"  placeholder="Emaill: "/>
                <input name="userPass" type="password" placeholder="Password: "/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUp