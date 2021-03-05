// import Loader from "./components/Loading/Loading";
import styled from "styled-components";
import Upload from "./components/Upload/Upload";

const MainContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <div className="App">
      {/* <h1>Converter</h1> */}
      <MainContainer>
        {/* <Loader /> */}
        <Upload />
      </MainContainer>
    </div>
  );
}

export default App;
