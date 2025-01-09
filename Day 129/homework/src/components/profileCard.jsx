const ProfileCard = ({name, age, occupation}) => {

    return (
    <div style={{
        display: "flex",
        justifyContent: "center"
    }}>
        <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          width: "200px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h2>{occupation}</h2>
      </div>
    </div>
      
    );


};

export default ProfileCard