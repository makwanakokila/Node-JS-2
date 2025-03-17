import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        axios.get("http://localhost:5000/auth/verify", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => setUser(res.data.user))
            .catch(() => {
                localStorage.removeItem("token");
                navigate("/login");
            });
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="dashboard-container">
            <h2>Welcome, {user?.username} 🎉</h2>
            <p>You are successfully logged in. Enjoy your session!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
