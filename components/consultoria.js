import { Space, SpaceLine, Subhead } from './servicios.styles'
import { ConsultoriaCont, CardConsultoria, List, ListItem } from './consultoria.styles'

export default function Consultoria () {

    return(
        <>
            <Subhead>Consultoría</Subhead>
            <ConsultoriaCont>
                <CardConsultoria>
                    <List>
                    <a href="https://api.whatsapp.com/send?phone=+525517040299" target="_blank">
                        <ListItem>Inclusión educativa: Proyectos para escuelas y ajustes razonables.</ListItem>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+525517040299" target="_blank">
                        <ListItem>Asesoría y capacitación a escuelas.</ListItem>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+525517040299" target="_blank">
                        <ListItem>Cursos y talleres para docentes.</ListItem>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+525517040299" target="_blank">
                        <ListItem>Talleres para niñ@s, adolescentes y adultos.</ListItem>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+525517040299" target="_blank">
                        <ListItem>Capacitación y supervisión a maestr@s integradores (sombras) y asistentes terapéuticos.</ListItem>
                    </a>
                    </List>
                </CardConsultoria>
            </ConsultoriaCont>
            <Space><SpaceLine></SpaceLine></Space>
        </>
    )
}