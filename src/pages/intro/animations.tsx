import { keyframes } from "styled-components";

export const leftAni = keyframes`
0%{
opacity: 0%;
transform: translateX(-300%);
}

100%{
transform: translateX(0%);
opacity: 100%;
}
`;
export const rightAni = keyframes`
0%{
opacity: 0%;
transform: translateX(300%);

}

100%{
transform: translateX(0%);
opacity: 100%;
}`;

export const slideUp = keyframes`
0%{
transform: translateY(300%);
opacity: 0%;
}
100%{
transform: translateY(0%);
opacity: 100%;
}
`;

export const buttonAni = keyframes`
0%{
opacity: 0%;
}

100%{
opacity: 100%;
pointer-events: all;

}
`;
