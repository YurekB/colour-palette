import { Button, IntroPageContainer, Logo, SubHeader } from "./styles";

interface props {
  setIntroComplete: any;
}

const IntroPage = ({ setIntroComplete }: props) => {
  return (
    <IntroPageContainer>
      <div>
        <Logo direction="left">Colour</Logo>
        <Logo direction="right">Palette</Logo>
      </div>
      <SubHeader>The random colour grid generator</SubHeader>
      <Button onClick={() => setIntroComplete(true)}>Generate</Button>
    </IntroPageContainer>
  );
};

export default IntroPage;
