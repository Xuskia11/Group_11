const Register = ()  => {

    function click(){
        alert("You succesfully register!")
    }
    return (
        <form>
            <input style={{border: "2px solid red",borderRadius: "15px"}} type="email" placeholder="Enter email please: " />
            <input type="password" placeholder="Enter password please: "/>
            <button onClick={click} type="button">Submit</button>
        </form>
    )
}

export default Register