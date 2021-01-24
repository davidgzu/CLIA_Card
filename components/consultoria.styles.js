import styled, { keyframes } from 'styled-components'

export const shake = keyframes`
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

export const ConsultoriaCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15%;
    margin-bottom: 30px;

    @media(max-width: 425px){
        padding: 0 5%;
    }
`;

export const CardConsultoria = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    flex-direction: column;
    border-radius: 25px;
    background: #FBFBFB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 30px 0;
`;

export const List = styled.ul`
    list-style: none;
    margin:0;

    @media (max-width: 425px){
        padding: 0;
    }
`;

export const ListItem = styled.li`
    padding-left: 1em;
    display: flex;
    align-items: center;
    margin: 20px;

    @media (max-width: 425px){
        font-size: 14px;
    }


  &:before{
    content: url("/iconos/comunidad.svg");
    padding-right: 1em;
    
  }

  &:hover{
    animation: ${shake} 0.5s;
    color: #DA0968;
    animation-iteration-count: 0.9s;
  }
`;




