import { useState } from "react";
import { Info, InfoButton } from "./styles";
import info from "../../assets/info.svg";

const InfoSection = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <InfoButton
        src={info}
        onMouseEnter={() => setInfoOpen(true)}
        onMouseLeave={() => setInfoOpen(false)}
      />
      <Info info={infoOpen.toString()}>
        <p>Press on a tile to make the rgb values toggle on and off</p>
      </Info>
    </>
  );
};

export default InfoSection;
