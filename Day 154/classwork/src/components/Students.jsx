import { useState } from "react"

const Students = () => {

    const [students, setStudents] = useState([]);
    const [input,setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim()) {
            setStudents([...students, input]);
            setInput("");
            console.log(students);
        }       
    }

    const handleDelete = (index) => {
        const updateList = [...students];
        updateList.splice(index, 1);
        setStudents(updateList);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setInput(e.target.value)} name="userStudent" type="text" placeholder="Type Student name: "/>
                <button>Submit</button>
            </form>

            <ul>
                {students.map((item,index) => (
                    <div>
                        <li key={index}>{item}</li>
                        <button onClick={() => handleDelete(index)}>Click</button>
                    </div>
                    
                ))} 
            </ul>
        </div>
        
    )
}

export default Students