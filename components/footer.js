import { FooterContainer, FooterText, FooterTitle } from "./footer.styles"

export default function Footer() {
    return(
        <>
            <FooterContainer>
                <FooterTitle>Clínica Integral Armony CLIA</FooterTitle>
                <a href="mailto:hola@clinicaclia.com" ><FooterText>hola@clinicaclia.com</FooterText></a>
                <FooterText>Tenochtitlan MZ46 LT13 CP 09840 Iztapalapa, México (Cerca de metro atlalilco línea 8 y 12)</FooterText>
                <FooterText>  Contacto: 55 17 04 02 99 y 55 13 90 60 17 </FooterText>
            </FooterContainer>
        </>
    )
}