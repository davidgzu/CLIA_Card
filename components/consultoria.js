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
                        <ListItem>Inclusión educativa: Proyectos para escuelas, ajustes razonables al plan regular.</ListItem>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+525517040299" target="_blank">
                        <ListItem>Asesoría y capacitaciones a escuelas.</ListItem>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+525517040299" target="_blank">
                        <ListItem>Cursos y talleres para docentes preescolar y primaria. </ListItem>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+525517040299" target="_blank">
                        <ListItem>Talleres  para niñ@s, adolescentes y adultos.</ListItem>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+525517040299" target="_blank">
                        <ListItem>Capacitación a maestro integrador o asistentes terapéuticos con supervisión del caso.</ListItem>
                    </a>
                    </List>
                </CardConsultoria>
            </ConsultoriaCont>
            <Space><SpaceLine></SpaceLine></Space>
        </>
    )
}