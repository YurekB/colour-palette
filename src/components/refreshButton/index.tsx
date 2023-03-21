import { RefreshButton } from "./styles";

interface props {
  setDisplayArea: any;
}

const RefreshBtn = ({ setDisplayArea }: props) => {
  return (
    <RefreshButton
      onClick={() => {
        setDisplayArea([]);
      }}
    >
      <p>Refresh</p>
    </RefreshButton>
  );
};

export default RefreshBtn;
