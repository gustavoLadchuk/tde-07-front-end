import "./Home.css"
import users from "./simulateUserDatabase";
import User from "../components/User";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            {users.map((user) => {
                return <User id={user.id} name={user.name} />
            })}
        </div>
    );
}

export default Home;