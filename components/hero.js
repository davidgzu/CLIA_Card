import {Wrapper, HeroContainer, ImageTerapist, HeroHeader, Logo, HeroTitle, HeroMobileText, HeroTitleMobile} from './hero.styles'
import Image from 'next/image'

export default function Hero(){
    return(
        <Wrapper>
            <HeroContainer>
                <HeroHeader>
                    <Logo> 
                        <Image src="/Clia.png" width={2126} height={945} quality={100}/> 
                    </Logo>
                    <HeroTitle>Clínica especializada en el trabajo terapéutico integral</HeroTitle>
                </HeroHeader>
                <ImageTerapist>
                    <Image src="/terapist.png" width={400} height={400} quality={100} />
                </ImageTerapist>
                <HeroMobileText>
                        <HeroTitleMobile>Clínica especializada en el trabajo terapéutico integral</HeroTitleMobile>
                    </HeroMobileText>
            </HeroContainer>
        </Wrapper>
    )
}