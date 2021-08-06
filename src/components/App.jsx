import { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [name, setName] = useState("There is no Name");

  const [some, setSome] = useState("Some Thing Unique");

  const sayHello = () => setName("My Name is Deepanshu!");

  const sayHello2 = () => setName("My Name is Mohan!");

  return (
    <Wrapper>
      <h1>Hello I am a web developer</h1>

      <div className="button flex">
        <button onClick={sayHello}>Deepansu Tiwari</button>

        <button onClick={sayHello2}>Mohan Kumar</button>
      </div>

      <h2>{name}</h2>
      <p>{some}</p>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 25px 0;
  text-align: center;

  h1 {
    font-size: 1.3em;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .button {
    flex-direction: column;
    padding: 20px 0;

    button {
      padding: 10px 20px;
      margin-bottom: 15px;
      background: #a52626;
    }
  }

  p {
    margin-top: 20px;
  }
`;

export default App;
