// import { useQuery } from '@apollo/client';

// import ProfileList from '../components/ProfileList';

// import { QUERY_PROFILES } from '../utils/queries';
import "./Home.css";
import imagePath from "/public/university.png" 

const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
        <div className="overlap">
          <img
            className="hero-img-desktop"
            alt="Image of the university building that fles in the sky"
            src={imagePath}
          />

          <div className="div">
            <p className="empower-educators">
              <span className="text-wrapper">Empower </span>
              <span className="span">Educators</span>
              <span className="text-wrapper">, Enable </span>
              <span className="text-wrapper-2">Learners</span>
            </p>
            <div className="text">
              <p className="our-university">
                <span className="text-wrapper">Our </span>
                <span className="span">Uni</span>
                <span className="text-wrapper-2">Vers</span>
                <span className="text-wrapper">Ity</span>
                <span className="text-wrapper">
                  {" "}
                  platform connects passionate educators directly with curious learners.
                </span>
              </p>
              <p className="no-intermediaries-no">
                No intermediaries, no barriers. <br />
                Collaborate, share, and learn freely.
                <br />
                Join us in shaping the future of education.
              </p>
              <button className=".btn.btn-primary">Join</button>
            </div>
          </div>


        </div>    
  );
};

export default Home;
