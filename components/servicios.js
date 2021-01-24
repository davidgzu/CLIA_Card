
import Image from 'next/image'
import { About, AboutContainer, ServiceCard, ServiceContainer, ServiceTitleCont, ServiceTitle, Space, SpaceLine, Subhead, IconCont } from './servicios.styles'

export default function Servicios() {

    const servicios = [
        {
            servicio: 'Terapia de Aprendizaje',
            icono: '/iconos/aprendizaje.svg'
        },
        {
            servicio: 'Terapia de Alimentacion',
            icono: '/iconos/alimentacion.svg'
        },
        {
            servicio: 'Terapia de lenguaje',
            icono: '/iconos/lenguaje.svg'
        },
        {
            servicio: 'Psicoterapia y Tanatología',
            icono: '/iconos/Psicoterapia.svg'
        },
        {
            servicio: 'Integración sensorial',
            icono: '/iconos/terapiasensorial.svg'
        },
        {
            servicio: 'Terapia de Psicomotricidad',
            icono: '/iconos/psicomotricidad.svg'
        },
        {
            servicio: 'Orientación a padres',
            icono: '/iconos/padres.svg'
        },
        {
            servicio: 'Valoración del desarrollo, psicopedagógica.',
            icono: '/iconos/desarrollo.svg'
        },
        {
            servicio:'Atención a alumn@s con NEE (necesidades educativas especiales)',
            icono: '/iconos/nee.svg'
        }
    ]

    return(
    <>
        <AboutContainer>
        <Space><SpaceLine></SpaceLine></Space>
            <About>Somos una clínica especializada en el trabajo terapéutico integral, proporcionamos estrategias y soluciones en áreas como: Educación especial, psicopedagogía, psicología, tanatología y medicina. </About>
        </AboutContainer>
        <Subhead>Atención Profesional</Subhead>

        <ServiceContainer>
            { servicios.map((servicios, index) => {
                return (
                    <a href="https://api.whatsapp.com/send?phone=+525517040299" target="_blank">
                        <ServiceCard key ={ index.toString() }>
                            <IconCont>
                                <Image src={servicios['icono']} height={60} width={60} quality={100} />
                            </IconCont>
                            <ServiceTitleCont>
                                <ServiceTitle>{servicios['servicio']}</ServiceTitle>
                            </ServiceTitleCont>
                        </ServiceCard>
                    </a>
                )
            })
            }

        </ServiceContainer>
        
        <Space><SpaceLine></SpaceLine></Space>
    </>
    )
}