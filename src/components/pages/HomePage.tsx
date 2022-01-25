import { FC, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";
import FramerWrapper from "../wrapper/FramerWrapper";
const HomePage: FC = () => {
  const {
    state: { isContactModalOpen },
    dispatch,
  } = useContext(AppContext);
  useEffect(() => {
    console.log(isContactModalOpen);
  }, [isContactModalOpen]);
  return (
    // <div style={{ height: "80vh", backgroundColor: "black", color: "white" }}>
    <FramerWrapper>
      <div className="home-wrapper">
        <div className="content">
          <h2>Hello, I'm React developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga magni
            debitis, autem ab quos iste minima tenetur labore. Consequuntur vero
            modi in placeat optio non deserunt nisi error sunt necessitatibus
            eveniet ad reiciendis maxime, mollitia officia assumenda, odio
            delectus possimus accusamus voluptatibus? Libero sequi quis
            architecto, reiciendis nemo voluptates officiis cum voluptate quam
            tempore nisi!
          </p>
        </div>
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#00cba9"
            fillOpacity="0.9"
            d="M0,288L34.3,240C68.6,192,137,96,206,74.7C274.3,53,343,107,411,149.3C480,192,549,224,617,213.3C685.7,203,754,149,823,112C891.4,75,960,53,1029,64C1097.1,75,1166,117,1234,117.3C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#5000ca"
            fillOpacity="1"
            d="M0,64L34.3,58.7C68.6,53,137,43,206,48C274.3,53,343,75,411,112C480,149,549,203,617,208C685.7,213,754,171,823,170.7C891.4,171,960,213,1029,229.3C1097.1,245,1166,235,1234,234.7C1302.9,235,1371,245,1406,250.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        {/* <div className="wrapper-grid">
        <div className="box a-grid">A</div>
        <div className="box b-grid">B</div>
        <div className="box c-grid">C</div>
        <div className="box d-grid">D</div>
      </div> */}
      </div>
    </FramerWrapper>
  );
};
export default HomePage;
