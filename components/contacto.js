import { ButtonCompartir, ButtonsContainer } from "./contacto.style";

export default function Contacto() {

    const shareData = {
        title: 'CLIA',
        text: 'Clínica especializada en el trabajo terapéutico integral',
        url: 'https://tarjetavirtual.clinicaclia.com/',
      }

    const share = async() => {
        try {
            await navigator.share(shareData)
            resultPara.textContent = 'Clia Compatido con exito'
          } catch(err) {
            resultPara.textContent = 'Error: ' + err
          }
    } 


    return(
        <>
            <ButtonsContainer>
                <ButtonCompartir onClick= {share} >Compartir</ButtonCompartir>
            </ButtonsContainer>
        </>
    )
}