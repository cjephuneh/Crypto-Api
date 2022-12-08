import React, {useState} from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <h1>De<span className='primary'>Fi</span></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>Featured</a>
            </li>
            <li>
                <a href='/'>Earn</a>
            </li>
            <li>
                <a href='/'>Contact</a>
            </li>
        </ul>
        <div className='btn-group'>
            <button className='btn'>Connect Wallet</button>
        </div>
        <div className='hamburger' onClick={handleClick}>
        {click ? (<CloseIcon size={20} style={{color: '#333'}}/>) : (<MenuIcon size={20} style={{color: '#333'}} />)}
        </div>
      
    </div>
  )
}

export default Navbar
