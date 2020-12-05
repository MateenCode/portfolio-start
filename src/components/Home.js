import React, { useEffect, useState } from "react";
import axios from "axios";

//Components
import Spinner from "./Common/Spinner";

//CSS import
import "../css/components/Home.css";

const Home = () => {
  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/mateencode/repos")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .then(() => setSpinner(false));
  }, []);

  const display = () => {
    if (spinner) {
      return <Spinner />;
    } else {
      return data.map((card) => (
        <div key={card.id} className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{card.name}</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="container">
      <h2>Mateen Portfolios</h2>
      <div className="row">{display()}</div>
    </div>
  );
};

export default Home;