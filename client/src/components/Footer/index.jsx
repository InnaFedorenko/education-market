import { useLocation, useNavigate } from 'react-router-dom';
import "./style.css";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    // <footer className="w-100 mt-auto text-dark p-4">
    <footer className="footers-footer">
            <div className="icons">
              <div className="icons-social-media" />
              <div className="icons-social-media-2" />
              <div className="icons-social-media-3" />
              <div className="icons-social-media-4" />
            </div>  
            <div className="text-wrapper-3">©2023 Inna Fedorenko</div>
    </footer>
  );
};

export default Footer;
