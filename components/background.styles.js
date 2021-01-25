import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax';

export const BackgroundCont = styled.div `
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const BackgroundImage = styled.img`
    width: 100%;
    @media (max-width: 800px) {
      width: 138px;
    }
`;

export const LeftHeader = styled(Parallax) `
  position: absolute;
  top: -30vh;
  left: -20vh;
  
  @media (max-width: 800px){
    top: 40vh;
    width: 138px;
  }
`;

export const CenterCircle = styled(Parallax) `
    position: absolute;
    top: 60vh;
    left:  100vh;
  
  @media (max-width: 800px){
    top: 40vh;
    width: 138px;
  }
`;

export const RightHeader = styled(Parallax) `
    position: absolute;
    top: 15vh;
    right:  20vh;
  
  @media (max-width: 800px){
    top: 40vh;
    width: 138px;
  }
`;

export const MediumLeft = styled(Parallax) `
    position: absolute;
    top: 110vh;
    left:  10vh;
  
  @media (max-width: 800px){
    top: 40vh;
    width: 138px;
  }
`;
