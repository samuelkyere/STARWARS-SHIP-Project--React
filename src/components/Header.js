import {Link} from 'react-router-dom';

function Header() {
    return(
       <header>
           <nav>
               <ul className='styl'>
                   <Link to='/'><li>Home</li></Link>
                   <Link to='/'><li>STAR WARS STARSHIPS</li></Link>
                   <Link to='/about'><li>About</li></Link>
    
                   
                   </ul>
                   </nav>
                   </header>
                  


    )
}

export default Header;