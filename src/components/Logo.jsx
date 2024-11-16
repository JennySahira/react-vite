import './logo.css';
import logo1 from '../assets/Logo/logo1.svg';
import logo2 from '../assets/Logo/logo2.svg';
import logo3 from '../assets/Logo/logo3.svg';
import logo4 from '../assets/Logo/logo4.svg';
import logo5 from '../assets/Logo/logo5.svg';
import logo6 from '../assets/Logo/logo6.svg';

function Logo (){
    return (
<div className="logo">
<div className="logo-wrapper">
            <img src={logo1} className="logoImage" alt="logoipsum"/>
            <img src={logo2} className="logoImage" alt="logoipsum"/>
            <img src={logo3} className="logoImage" alt="logoipsum"/>
            <img src={logo4} className="logoImage" alt="logoipsum"/>
            <img src={logo5} className="logoImage" alt="logoipsum"/>
            <img src={logo6} className="logoImage image-shadow" alt="logoipsum"/>
</div>
</div>
    );
}
export default Logo;
