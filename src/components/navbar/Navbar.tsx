import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
const Navbar = () => {
  return (
    <nav
      id='home-comp'
      className='navbar is-flex is-justify-content-space-between'
    >
      <div className='navbar-brand'>
        <a className='navbar-item'>
          <img src={logo} width='80' height='28' />
        </a>
      </div>
      <div className='navbar-end'>
        <div className='buttons'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>
          <Link to='/reads' className='navbar-item'>
            Reading Log
          </Link>
          <Link to='/reads' className='navbar-item'>
            My Medium
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
