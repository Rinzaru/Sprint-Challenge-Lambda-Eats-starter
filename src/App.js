import React from "react";
import { Route, Link } from "react-router-dom";
import Form from "./Form";
import styled from "styled-components";

const Card = styled.div`
  margin-left: 43%;
  .home {
    margin-left: 10%;
  }
  .pizza {
    margin-top: 5px;
    margin-left: 8%;
  }
`;

const App = () => {
  return (
    <div>
      <Route path="/">
        <Card>
          <h1>Lambda Eats</h1>

          <Link to="/">
            <button className="home">Home</button>
          </Link>
        </Card>
      </Route>
      <Route exact path="/">
        <Link to="/pizza">
          <Card>
            <button className="pizza">Order Pizza</button>
          </Card>
        </Link>
      </Route>
      <Route exact path="/pizza">
        <Form />
      </Route>
    </div>
  );
};
export default App;
