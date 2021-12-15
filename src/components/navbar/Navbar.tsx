import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section id='home-comp'>
      <nav className='navbar'>
        <div className='navbar-end'>
          <div className='buttons'>
            <Link to='/' className='button'>
              Home
            </Link>
            <Link to='/reads' className='button'>
              Reading Log
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
