import styled from 'styled-components'

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Space = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SpaceLine = styled.div`
    background: linear-gradient(to right, #83358F, #DA0968);
    width: 300px;
    height: 4px;
    margin: 25px 0;
`;

export const About = styled.h2`
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin: auto;
    max-width: 70%;

    @media (max-width: 425px){
        font-size: 18px;
        line-height: 24px;
    }
`;

export const Subhead = styled.h3`
    font-size: 30px;
    margin-top: 70px;
    margin-left: 70px;
    text-align: left;  

    @media (max-width: 425px){
        font-size: 24px;
        margin-bottom: 25px;
    }
    
`; 

export const ServiceContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 10%;
    grid-gap: 2rem 4rem;
    margin-bottom: 30px; 

    @media (max-width: 425px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem 1rem;
    }
`;

export const ServiceCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 25px;
    background: #FBFBFB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition:  transform 0.3s ease 0.5s,
                 background-color 0.5s ease-out;

    &:hover{
        transform: scale(1.2);
        background: linear-gradient(to right, #83358F, #DA0968);
        color: #fff;
    }
`;

export const ServiceTitleCont = styled.div`
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
   
`;

export const ServiceTitle = styled.p`
    text-align: center;
    font-size: 16px;
`;

export const IconCont = styled.div`
    margin: 35px 0 0 0;
`