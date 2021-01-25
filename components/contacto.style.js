import styled from 'styled-components'

export const ButtonsContainer = styled.div`
    align-items: center;
    justify-content: center;
    padding: 0 20%;
    display: none;

    @media (max-width: 600px){
        display: flex;
    }
`;

export const ButtonCompartir = styled.button`
    border-radius: 20px;
    padding: 15px;
    background: linear-gradient(to right, #83358F, #DA0968);
    color: #fff;
    width: 250px;
    border: none;
    font-size: 18px;
`;