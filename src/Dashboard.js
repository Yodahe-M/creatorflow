import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const auth = getAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        await signOut(auth);
        navigate('/');
    };
    return (
        <div>
        <h2>Welcome to your Dashboard!</h2>
        <p>This will be your main app screen after login.</p>
        <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
