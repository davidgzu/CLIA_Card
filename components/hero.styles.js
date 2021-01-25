import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: auto; 
    max-width: 1440px;
    padding-top: 70px;

    @media (max-width: 800px){
        padding-top: 20px;
    }
`;

export const HeroContainer = styled.div`
    display: flex;
    align-self: center; 

    @media (max-width: 600px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const HeroHeader = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 55%;
   justify-content: center;
   padding: 0 0 0  250px;

   @media (max-width: 1024px){
       width:50%;
       padding: 0 0 0  150px;
   }

   @media(max-width: 800px){
       padding: 0 0 0 80px;
   }

   @media (max-width: 600px){
       width: 100%;
       padding: 0;
       margin: auto;
   }
`;

export const HeroTitle = styled.h1`
    margin: 0;
    font-size: 36px;
    margin-left: 20px;
    
    @media(max-width: 800px){
       font-size: 26px;
   }

   @media (max-width: 600px){
       display: none;
   }
`;

export const Logo = styled.div`
    max-width: 300px;

    @media (max-width: 1024px){
       max-width: 200px;
   }

   @media (max-width: 600px){
       align-items: center;
       justify-content: center;
       display: flex;
       margin: auto;
       max-width: 250px;
   }
`;

export const ImageTerapist = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    width: 45%;

    @media (max-width: 1024px){
       width:50%;
   }
   
   @media (max-width: 600px){
       width: 100%;

   }
`;

export const HeroMobileText = styled.div`
    display: none;
    @media (max-width: 600px){
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
    }
`;

export const HeroTitleMobile = styled.h1` 
    display: none;
    
    @media(max-width: 600px){
        display: unset;
        font-size: 26px;
        line-height: 34px; 
        font-weight: bold;
        text-align: center;
    }
`