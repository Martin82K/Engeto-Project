import { Link } from 'react-router-dom';
import QRGenerator from '../components/QRgenerator.js';
import '../components/QRgenerator.css';
import "./ApiForm.css";
import RedArrow from "../img/red-arrow.png";

const ApiForm = () => {
  return (
    <div>
      <Link to="/">
        <img className="back-arrow" src={RedArrow} alt="back" Link="home" />
      </Link>
    
    <div className="main-content">
    
    
    <h1>Generátor QR kódu</h1>
    <div className="api-form-container">
      <QRGenerator />
    </div>
    </div>
    </div>
  );
};

export default ApiForm;
