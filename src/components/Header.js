import { login, logout } from "../services/firebase";

const Header = (props) =>(
    <header>
        <h1>SEI Resources</h1>
        <ul>
            <li>
                Welcome,
            </li>
            <li>
                Logout                
            </li>
            <li> onClick={login}Login</li>
        </ul>
    </header>
);

export default Header;