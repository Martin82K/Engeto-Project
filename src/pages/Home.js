import '../pages/Home.css';
import logo from '../img/MK_logo.png';
import ButtonMenu from '../components/ButtonMenu';
import StaticMenu from '../components/StaticMenu';

const Home = () => {
  return (
    
    <div className='main-content-home'>
            <header className='header-logo'> 
            <img src={logo} alt="logo"/>
          </header>
            <div className='main-title'>
              <h1>Certifikační web ENGETO</h1>
              <p>Nauka Reactu bez znalosti Javascriptu aneb jak jsem přeskočil Javasricpt.</p>
            </div>
            <div className='static-components'>       
              <h3>Demonstrace vědomostí aneb chytré komponenty</h3>
              <StaticMenu />
            </div>        
            <ButtonMenu />
            </div>
  )
}

export default Home