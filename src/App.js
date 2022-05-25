import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  margin: 100px auto;
`;

const Number = styled.div`
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const Input = styled.input`
  display: block;
  width: 200px;
  height: 50px;
  border: 1px solid gray;
`;

const Button = styled(Number)`
  cursor: pointer;
`;

const Result = styled(Number)``;

const ResultSection = styled.div`
  display: flex;
  > div {
    width: 25%;
  }
  > div:nth-child(1) {
    width: 50%;
  }
`;

const App = () => {
  const [inputNumber, setInputNumber] = useState(0);

  const handleChange = (e) => {
    setInputNumber(e.target.value);
    console.log(inputNumber);
  };

  const handleClick = (e) => {
    const { number } = e.target.dataset;
    setInputNumber(number);
    console.log(inputNumber);
  };

  return (
    <Wrapper>
      <Input
        value={inputNumber}
        onChange={handleChange}
        style={{ fontSize: "18px" }}
      />
      <Section>
        <Number onClick={handleClick} data-number={7}>
          7
        </Number>
        <Number onClick={handleClick} data-number={8}>
          8
        </Number>
        <Number onClick={handleClick} data-number={9}>
          9
        </Number>
        <Button>X</Button>
      </Section>
      <Section>
        <Number onClick={handleClick} data-number={4}>
          4
        </Number>
        <Number onClick={handleClick} data-number={5}>
          5
        </Number>
        <Number onClick={handleClick} data-number={6}>
          6
        </Number>
        <Button>-</Button>
      </Section>
      <Section>
        <Number onClick={handleClick} data-number={1}>
          1
        </Number>
        <Number onClick={handleClick} data-number={2}>
          2
        </Number>
        <Number onClick={handleClick} data-number={3}>
          3
        </Number>
        <Button>+</Button>
      </Section>
      <ResultSection>
        <Result>0</Result>
        <Button>.</Button>
        <Button>=</Button>
      </ResultSection>
    </Wrapper>
  );
};

export default App;
