const SignUp = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const userInfo = {
            name: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        // Save User info in localstorage
        const storedUser = localStorage.getItem(userInfo.email);
        if (storedUser){
            alert("This account already existed")
        } else {
            localStorage.setItem(userInfo.email, JSON.stringify(userInfo));
            alert("Account succesfully created !!!")
        }
        
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" required/>
                <input type="email" placeholder="Email: " name="email" required/>
                <input type="password" placeholder="Password" name="password" required/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}


export default SignUp