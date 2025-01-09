import ProfileList from "./components/profileList";

function App() {
  const userProfiles = [
    { id: 1, name: "John Doe", age: 30, occupation: "Software Engineer" },
    { id: 2, name: "Jane Smith", age: 25, occupation: "Graphic Designer" },
    { id: 3, name: "Mike Johnson", age: 35, occupation: "Project Manager" },
  ];

  return (
    <div style={{textAlign: "center"}}>
      <h1>Profile Cards</h1>
      <ProfileList profiles={userProfiles} />
    </div>
  )
}

export default App
