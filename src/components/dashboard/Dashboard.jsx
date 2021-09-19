import {logout} from "../../auth/index";

function Dashboard() {
    return(
        <div className="container">
            <h2>Dashboard</h2>
            <button onClick={logout()}>Log Out</button>
        </div>
    );
}

export default Dashboard;