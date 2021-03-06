import styled from "styled-components";
import GlobalStyle from "./global/style/GlobalStyle.js";
import Converter from "./components/Converter/Converter";
import Presentation from "./components/Presentation/Presentation.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound.js";

const MainContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <MainContainer className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={Presentation} exact />
          <Route path="/home" component={Presentation} exact />
          <Route path="/converter" component={Converter} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </MainContainer>
  );
}

export default App;
