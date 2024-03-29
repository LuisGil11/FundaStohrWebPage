import { keyframes } from "@emotion/react";

export const fadeInFwd = keyframes`
0% {
  -webkit-transform: translateZ(-80px);
          transform: translateZ(-80px);
  opacity: 0;
}
100% {
  -webkit-transform: translateZ(0);
          transform: translateZ(0);
  opacity: 1;
}
`;
export const fadeOutBck = keyframes`
0% {
  -webkit-transform: translateZ(0);
          transform: translateZ(0);
  opacity: 1;
}
100% {
  -webkit-transform: translateZ(-80px);
          transform: translateZ(-80px);
  opacity: 0;
}
`;
