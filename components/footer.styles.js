import styled from 'styled-components'

export const FooterContainer = styled.div `
    display: flex;
    margin-top: 30px;
    background: #772B88;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const FooterTitle = styled.h3`
    text-align: center;
    margin: 8px;
    color: #ffffff;
    font-size: 20px;
`;

export const FooterText = styled.p `
    text-align: center;
    margin: 4px;
    color: #ffffff;
    font-size: 16px;

    @media (max-width: 600px){
        font-size: 12px;
    }
`
