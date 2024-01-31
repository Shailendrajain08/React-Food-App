import { useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";

function App() {
  const [foodData, setFootData] = useState([]);
  const [foodId, setFoodId] = useState("654534");

  return (
    <>
      <div className="App">
        <Nav />
        <Search foodData={foodData} setFootData={setFootData} />
        <Container>
          <InnerContainer>
            <FoodList setFoodId={setFoodId} foodData={foodData} />
          </InnerContainer>
          <InnerContainer>
            <FoodDetails foodId={foodId}/>
          </InnerContainer>
        </Container>
      </div>
    </>
  );
}

export default App;
