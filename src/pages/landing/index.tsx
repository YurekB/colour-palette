import { useEffect, useState } from "react";
import Tile from "../../components/tile";
import {
  InfoButton,
  InfoSection,
  LandingPageContainer,
  RefreshButton,
  TileContainer,
} from "./styles";
import info from "../../assets/info.svg";

const LandingPage = () => {
  const [displayArea, setDisplayArea] = useState<any>([]);
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [infoOpen, setInfoOpen] = useState(false);

  let i = 0;

  const loopFunc = () => {
    // setTimeout(() => {
    let red = Math.floor(Math.random() * (255 - 0) + 0);
    let green = Math.floor(Math.random() * (255 - 0) + 0);
    let blue = Math.floor(Math.random() * (255 - 0) + 0);
    console.log(displayArea);

    displayArea.push(
      <Tile
        red={red}
        green={green}
        blue={blue}
        timing={i - i * 0.5}
        key={Math.random()}
      />
    );
    setIndex(index + 1);
    i++;
    console.log(index, "index");
    console.log(i - i * 0.5, "THE MATH");
    if (i < 20) {
      loopFunc();
    }
    // }, 1000);
  };

  console.log(window.innerHeight, "HEIGHT");

  // const initFunc = () => {
  //   for (let i = 0; i < 21; i++) {
  //     let colorOne = Math.random() * (255 - 0) + 0;
  //     let colorTwo = Math.random() * (255 - 0) + 0;
  //     let colorThree = Math.random() * (255 - 0) + 0;
  //     console.log(displayArea);

  //     displayArea.push(
  //       <Tile
  //         colorOne={colorOne}
  //         colorTwo={colorTwo}
  //         colorThree={colorThree}
  //         key={Math.random()}
  //       />
  //     );
  //   }
  // };

  useEffect(() => {
    if (mounted) {
      loopFunc();
    }

    setMounted(true);
  }, [mounted]);

  return (
    <LandingPageContainer>
      <TileContainer>
        {displayArea.map((tile: any) => {
          return tile;
        })}
      </TileContainer>
      <InfoButton
        src={info}
        onMouseEnter={() => setInfoOpen(true)}
        onMouseLeave={() => setInfoOpen(false)}
      />
      <InfoSection info={infoOpen.toString()}>
        <p>Press on a colour to make the rgb values toggle on and off</p>
      </InfoSection>
      <RefreshButton onClick={() => window.location.reload()}>
        Refresh
      </RefreshButton>
    </LandingPageContainer>
  );
};

export default LandingPage;
