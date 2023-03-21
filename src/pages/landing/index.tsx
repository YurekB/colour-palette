import { useEffect, useState } from "react";
import Tile from "../../components/tile";
import { LandingPageContainer, TileContainer } from "./styles";
import RefreshBtn from "../../components/refreshButton";
import InfoSection from "../../components/info";
import BackgroundGrid from "../../components/backgroundGrid";

const LandingPage = () => {
  const [displayArea, setDisplayArea] = useState<any>([]);
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  let i = 0;

  const loopFunc = () => {
    let red = Math.floor(Math.random() * (255 - 0) + 0);
    let green = Math.floor(Math.random() * (255 - 0) + 0);
    let blue = Math.floor(Math.random() * (255 - 0) + 0);

    displayArea.push(
      <Tile
        timing={i - i * 0.5}
        key={Math.random()}
        rgbObj={{ red, green, blue }}
      />
    );

    setIndex(index + 1);

    i++;

    if (i < 20) {
      loopFunc();
    }
  };

  useEffect(() => {
    if (mounted) {
      loopFunc();
    }

    setMounted(true);
  }, [mounted, displayArea]);

  //Background grid commented out. Not sure if I like it or not

  return (
    <LandingPageContainer>
      <TileContainer>
        {displayArea.map((tile: any) => {
          return tile;
        })}
        {/* <BackgroundGrid /> */}
      </TileContainer>
      <InfoSection />
      <RefreshBtn setDisplayArea={setDisplayArea} />
    </LandingPageContainer>
  );
};

export default LandingPage;
