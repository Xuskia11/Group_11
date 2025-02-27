import { useState } from "react";
import "../style.css";

const UserSearch = () => {
    const [user, setUser] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userName = e.target.user.value;
        const api = `https://api.github.com/users/${userName}`;
        const data = await (await fetch(api)).json();
        setUser(data);
    };

    return (
        <div className={`container ${darkMode ? "dark" : "light"}`}>
            <header>
                <h1>devfinder</h1>
                <button className="dark" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "LIGHT ☀️" : "DARK 🌙"}
                </button>
            </header>
            <form onSubmit={handleSubmit} className="search-box">
                <input name="user" type="text" placeholder="Search GitHub username..." required />
                <button type="submit">Search</button>
            </form>
            {user && (
                <div className="user-info">
                    <img src={user.avatar_url} alt="User Avatar" />
                    <div className="details">
                        <h2>{user.name || "No Name"}</h2>
                        <p className="username">@{user.login}</p>
                        <p className="bio">{user.bio || "This profile has no bio"}</p>
                        <p className="joined">Joined: {new Date(user.created_at).toDateString()}</p>
                        <div className="stats">
                            <span>Repos: {user.public_repos}</span>
                            <span>Followers: {user.followers}</span>
                            <span>Following: {user.following}</span>
                        </div>
                        <div className="links">
                            <p>📍 {user.location || "Not Available"}</p>
                            <p>🔗 <a href={user.html_url} target="_blank" rel="noopener noreferrer">GitHub</a></p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserSearch;
