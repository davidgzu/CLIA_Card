
import Image from 'next/image'
import { About, AboutContainer, ServiceCard, ServiceContainer, ServiceTitleCont, ServiceTitle, Space, SpaceLine, Subhead, IconCont } from './servicios.styles'

export default function Servicios() {

    const servicios = [
        {
            servicio: 'Terapia de aprendizaje',
            icono: '/iconos/aprendizaje.svg',
            url:'Terapia%20de%20aprendizaje'
        },
        {
            servicio: 'Terapia de lenguaje',
            icono: '/iconos/lenguaje.svg',
            url: 'Terapia%20de%20lenguaje'
        },
        {
            servicio: 'Terapia de alimentación',
            icono: '/iconos/alimentacion.svg',
            url: 'Terapia%20de%20alimentaci%C3%B3n'
        },
        {
            servicio: 'Psicoterapia y Tanatología',
            icono: '/iconos/Psicoterapia.svg',
            url: 'Psicoterapia%20y%20Tanatolog%C3%ADa'
        },
        {
            servicio: 'Integración sensorial',
            icono: '/iconos/terapiasensorial.svg',
            url: 'Integraci%C3%B3n%20sensorial'
        },
        {
            servicio:'Educación especial (discapacidad)',
            icono: '/iconos/nee.svg',
            url: 'Educaci%C3%B3n%20especial'
        },
        {
            servicio: 'Psicomotricidad',
            icono: '/iconos/psicomotricidad.svg',
            url: 'Psicomotricidad'
        },
        {
            servicio: 'Orientación familiar',
            icono: '/iconos/padres.svg',
            url: 'Orientaci%C3%B3n%20familiar'
        },
        {
            servicio: 'Estimulación temprana',
            icono: '/iconos/estimulacion.svg',
            url: 'Estimulaci%C3%B3n%20temprana'
        },
        {
            servicio: 'Medicina y enfermería',
            icono: '/iconos/medicina.svg',
            url: 'Medicina%20y%20enfermer%C3%ADa'
        },
        {
            servicio: 'Valoración psicopedagógica y del desarrollo',
            icono: '/iconos/desarrollo.svg',
            url: 'Valoraci%C3%B3n%20psicopedag%C3%B3gica%20y%20del%20desarrollo'
        }
    ]

    return(
    <>
        <AboutContainer>
        <Space><SpaceLine></SpaceLine></Space>
            <About>Ofrecemos atención profesional y estrategias en: </About>
        </AboutContainer>
        <ServiceContainer>
            { servicios.map((servicios, index) => {
                let whatsapp = 'https://api.whatsapp.com/send?phone=525517040299&text=Requiero%20informaci%C3%B3n%20de%20' + servicios['url'];
                return (
                    <a href={whatsapp} target="_blank">
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