import {Link} from "react-router-dom";

function Navbar() {
    
    let patientId = 5;
    return (
    <div>
        <ul>
            <li> <Link to = "/"> Home </Link></li>
            <li> <Link to={{pathname : "/patient/" + patientId}}> Patient </Link></li>
        </ul>
    </div>  );
}

export default Navbar;