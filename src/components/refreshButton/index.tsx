import { RefreshButton } from "./styles";

const RefreshBtn = () => {
  return (
    <RefreshButton onClick={() => window.location.reload()}>
      <p>Refresh</p>
    </RefreshButton>
  );
};

export default RefreshBtn;
