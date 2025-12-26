import {Link} from "react-router-dom";

export default function Header(){
    return(
        <nav>
            <ul>
                <li><Link to="/c">C</Link></li>
               <li><Link to="/android">Android</Link></li>
               <li><Link to="/csharp">C#</Link></li>
               <li><Link to="/css">Css</Link></li>
               <li><Link to="/html">Html</Link></li>
               <li><Link to="/java">Java</Link></li>
               <li><Link to="/php">Php</Link></li>
               <li><Link to="/python">Python</Link></li>
               
            </ul>
        </nav>
    );
}