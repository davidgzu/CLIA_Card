import styled from 'styled-components'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export const BackgroundCont = styled.div `
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const BackgroundImage = styled.img`
    width: 100%;
`;

export const LeftHeader = styled(Parallax) `
  position: absolute;
  top: -30vh;
  left: -20vh;
  
  @media (max-width: 800px){
    top: -20vh;
    left: -20vw;
    width: 338px;
  }
`;

export const CenterCircle = styled(Parallax) `
    position: absolute;
    top: 60vh;
    left:  100vh;
  
  @media (max-width: 800px){
    top: 60vh;
    width: 238px;
    left: -30vw;
  }
`;

export const RightHeader = styled(Parallax) `
    position: absolute;
    top: 15vh;
    right:  20vh;
  
  @media (max-width: 800px){
    top: 40vh;
    width: 180px;
    right: 0;
  }
`;

export const MediumLeft = styled(Parallax) `
    position: absolute;
    top: 110vh;
    left:  10vh;
  
  @media (max-width: 800px){
    top: 90vh;
    left: 45vw;
    width: 138px;

  }
`;

export const MediumRight = styled(Parallax)`
  position: absolute;
  top: 90vh;
  right: 10vw;

  @media (max-width: 800px){
    top: 100vh;
    left: -20vw;
  }
`;
