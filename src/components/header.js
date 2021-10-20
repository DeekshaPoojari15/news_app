import './header.css';
import logo from '../assets/icon.jpg';

function Header(){
    return (
        <div className="header">
            <img className="image" src={logo} alt=" " style={{width:'5vw'}} />
            <h1 className="name" > FIRST NEWS</h1>
        </div>
        
    );
};

export default Header

