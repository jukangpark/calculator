import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  margin: 100px auto;
`;

const Number = styled.div`
  text-align: center;
  line-height: 50px;
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

const Button = styled(Number)``;

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
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Wrapper>
      <Input value={0} onChange={handleChange} />
      <Section>
        <Number>7</Number>
        <Number>8</Number>
        <Number>9</Number>
        <Button>X</Button>
      </Section>
      <Section>
        <Number>4</Number>
        <Number>5</Number>
        <Number>6</Number>
        <Button>-</Button>
      </Section>
      <Section>
        <Number>1</Number>
        <Number>2</Number>
        <Number>3</Number>
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
