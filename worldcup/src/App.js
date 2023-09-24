/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Table, Nav, Spinner, Card, Row, Col, Badge } from 'react-bootstrap';
import moment from 'moment';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
class App extends React.Component {
    //Constructor
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DatailsLoaded: false
        };
        this.apiGrupos = {
            grupos: [],
            DatailsLoadedGroup: false
        };
    }
    componentDidMount() {
        fetch('https://copa22.medeiro.tech/matches')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    DatailsLoaded: true
                });
            })

        fetch('https://copa22.medeiro.tech/groups')
            .then(res => res.json())
            .then(json => {
                this.apiGrupos = {
                    grupos: json,
                    DatailsLoadedGroup: true
                };
            })

        fetch('https://copa22.medeiro.tech/matches/clakj8jim005rra2tzlhh44nw').then(res => res.json()).then(json => {
            this.tLugar = {
                tlugar: json,
                DatailsLoadedTercer: true
            };
        }
        )
    }
    render() {
        var { items, DatailsLoaded } = this.state;
        var { grupos, DatailsLoadedGroup } = this.apiGrupos;

        //Filtrado de Fases
        var faseGrupos = items.filter(item => item.stageName === 'First stage');
        var octavos = items.filter(item => item.stageName === 'Round of 16');
        var cuartos = items.filter(item => item.stageName === 'Quarter-final');
        var semifinal = items.filter(item => item.stageName === 'Semi-final');
        var tercer = items.filter(item => item.stageName === 'Play-off for third place');
        var final = items.filter(item => item.stageName === 'Final');


        //Cambio de info -- TRADUCCIONES Y REASIGNACIONES
        faseGrupos.forEach(item => {
            //Grupos
            // eslint-disable-next-line default-case
            switch (item.homeTeam.name) {
                case 'Qatar':
                    item.homeTeam.name = 'Catar';
                    item.homeTeam.grupo = 'A'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/QAT.png';
                    break;
                case 'Ecuador':
                    item.homeTeam.name = 'Ecuador';
                    item.homeTeam.grupo = 'A'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/ECU.png';
                    break;
                case 'Senegal':
                    item.homeTeam.name = 'Senegal';
                    item.homeTeam.grupo = 'A'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/SEN.png';
                    break;
                case 'Netherlands':
                    item.homeTeam.name = 'Países Bajos';
                    item.homeTeam.grupo = 'A'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/NED.png';
                    break;
                case 'England':
                    item.homeTeam.name = 'Inglaterra';
                    item.homeTeam.grupo = 'B'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/ENG.png';
                    break;
                case 'Iran':
                    item.homeTeam.name = 'Irán';
                    item.homeTeam.grupo = 'B'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/IRN.png';
                    break;
                case 'USA':
                    item.homeTeam.name = 'Estados Unidos';
                    item.homeTeam.grupo = 'B'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/USA.png';
                    break;
                case 'Wales':
                    item.homeTeam.name = 'Gales';
                    item.homeTeam.grupo = 'B'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/WAL.png';
                    break;
                case 'Argentina':
                    item.homeTeam.name = 'Argentina';
                    item.homeTeam.grupo = 'C'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/ARG.png';
                    break;
                case 'Mexico':
                    item.homeTeam.name = 'México';
                    item.homeTeam.grupo = 'C'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/MEX.png';
                    break;
                case 'Poland':
                    item.homeTeam.name = 'Polonia';
                    item.homeTeam.grupo = 'C'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/POL.png';
                    break;
                case 'Saudi Arabia':
                    item.homeTeam.name = 'Arabia Saudita';
                    item.homeTeam.grupo = 'C'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/KSA.png';
                    break;
                case 'France':
                    item.homeTeam.name = 'Francia';
                    item.homeTeam.grupo = 'D'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/FRA.png';
                    break;
                case 'Australia':
                    item.homeTeam.name = 'Australia';
                    item.homeTeam.grupo = 'D'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/AUS.png';
                    break;
                case 'Denmark':
                    item.homeTeam.name = 'Dinamarca';
                    item.homeTeam.grupo = 'D'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/DEN.png';
                    break;
                case 'Tunisia':
                    item.homeTeam.name = 'Túnez';
                    item.homeTeam.grupo = 'D'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/TUN.png';
                    break;
                case 'Spain':
                    item.homeTeam.name = 'España';
                    item.homeTeam.grupo = 'E'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/ESP.png';
                    break;
                case 'Costa Rica':
                    item.homeTeam.name = 'Costa Rica';
                    item.homeTeam.grupo = 'E'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/CRC.png';
                    break;
                case 'Germany':
                    item.homeTeam.name = 'Alemania';
                    item.homeTeam.grupo = 'E'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/GER.png';
                    break;
                case 'Japan':
                    item.homeTeam.name = 'Japón';
                    item.homeTeam.grupo = 'E'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/JPN.png';
                    break;
                case 'Belgium':
                    item.homeTeam.name = 'Bélgica';
                    item.homeTeam.grupo = 'F'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/BEL.png';
                    break;
                case 'Canada':
                    item.homeTeam.name = 'Canadá';
                    item.homeTeam.grupo = 'F'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/CAN.png';
                    break;
                case 'Morocco':
                    item.homeTeam.name = 'Marruecos';
                    item.homeTeam.grupo = 'F'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/MAR.png';
                    break;
                case 'Croatia':
                    item.homeTeam.name = 'Croacia';
                    item.homeTeam.grupo = 'F'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/CRO.png';
                    break;
                case 'Brazil':
                    item.homeTeam.name = 'Brasil';
                    item.homeTeam.grupo = 'G'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/BRA.png';
                    break;
                case 'Serbia':
                    item.homeTeam.name = 'Serbia';
                    item.homeTeam.grupo = 'G'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/SRB.png';
                    break;
                case 'Switzerland':
                    item.homeTeam.name = 'Suiza';
                    item.homeTeam.grupo = 'G'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/SUI.png';
                    break;
                case 'Cameroon':
                    item.homeTeam.name = 'Camerún';
                    item.homeTeam.grupo = 'G'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/CMR.png';
                    break;
                case 'Uruguay':
                    item.homeTeam.name = 'Uruguay';
                    item.homeTeam.grupo = 'H'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/URU.png';
                    break;
                case 'Portugal':
                    item.homeTeam.name = 'Portugal';
                    item.homeTeam.grupo = 'H'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/POR.png';
                    break;
                case 'Ghana':
                    item.homeTeam.name = 'Ghana';
                    item.homeTeam.grupo = 'H'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/GHA.png';
                    break;
                case 'Korea Republic':
                    item.homeTeam.name = 'Corea del Sur';
                    item.homeTeam.grupo = 'H'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/KOR.png';
                    break;
            }
            // eslint-disable-next-line default-case
            switch (item.awayTeam.name) {
                case 'Qatar':
                    item.awayTeam.name = 'Catar';
                    item.awayTeam.grupo = 'A'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/QAT.png';
                    break;
                case 'Ecuador':
                    item.awayTeam.name = 'Ecuador';
                    item.awayTeam.grupo = 'A'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/ECU.png';
                    break;
                case 'Senegal':
                    item.awayTeam.name = 'Senegal';
                    item.awayTeam.grupo = 'A'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/SEN.png';
                    break;
                case 'Netherlands':
                    item.awayTeam.name = 'Países Bajos';
                    item.awayTeam.grupo = 'A'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/NED.png';
                    break;
                case 'England':
                    item.awayTeam.name = 'Inglaterra';
                    item.awayTeam.grupo = 'B'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/ENG.png';
                    break;
                case 'Iran':
                    item.awayTeam.name = 'Irán';
                    item.awayTeam.grupo = 'B'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/IRN.png';
                    break;
                case 'USA':
                    item.awayTeam.name = 'Estados Unidos';
                    item.awayTeam.grupo = 'B'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/USA.png';
                    break;
                case 'Wales':
                    item.awayTeam.name = 'Gales';
                    item.awayTeam.grupo = 'B'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/WAL.png';
                    break;
                case 'Argentina':
                    item.awayTeam.name = 'Argentina';
                    item.awayTeam.grupo = 'C'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/ARG.png';
                    break;
                case 'Mexico':
                    item.awayTeam.name = 'México';
                    item.awayTeam.grupo = 'C'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/MEX.png';
                    break;
                case 'Poland':
                    item.awayTeam.name = 'Polonia';
                    item.awayTeam.grupo = 'C'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/POL.png';
                    break;
                case 'Saudi Arabia':
                    item.awayTeam.name = 'Arabia Saudita';
                    item.awayTeam.grupo = 'C'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/KSA.png';
                    break;
                case 'France':
                    item.awayTeam.name = 'Francia';
                    item.awayTeam.grupo = 'D'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/FRA.png';
                    break;
                case 'Australia':
                    item.awayTeam.name = 'Australia';
                    item.awayTeam.grupo = 'D'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/AUS.png';
                    break;
                case 'Denmark':
                    item.awayTeam.name = 'Dinamarca';
                    item.awayTeam.grupo = 'D'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/DEN.png';
                    break;
                case 'Tunisia':
                    item.awayTeam.name = 'Túnez';
                    item.awayTeam.grupo = 'D'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/TUN.png';
                    break;
                case 'Spain':
                    item.awayTeam.name = 'España';
                    item.awayTeam.grupo = 'E'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/ESP.png';
                    break;
                case 'Costa Rica':
                    item.awayTeam.name = 'Costa Rica';
                    item.awayTeam.grupo = 'E'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/CRC.png';
                    break;
                case 'Germany':
                    item.awayTeam.name = 'Alemania';
                    item.awayTeam.grupo = 'E'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/GER.png';
                    break;
                case 'Japan':
                    item.awayTeam.name = 'Japón';
                    item.awayTeam.grupo = 'E'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/JPN.png';
                    break;
                case 'Belgium':
                    item.awayTeam.name = 'Bélgica';
                    item.awayTeam.grupo = 'F'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/BEL.png';
                    break;
                case 'Canada':
                    item.awayTeam.name = 'Canadá';
                    item.awayTeam.grupo = 'F'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/CAN.png';
                    break;
                case 'Morocco':
                    item.awayTeam.name = 'Marruecos';
                    item.awayTeam.grupo = 'F'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/MAR.png';
                    break;
                case 'Croatia':
                    item.awayTeam.name = 'Croacia';
                    item.awayTeam.grupo = 'F'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/CRO.png';
                    break;
                case 'Brazil':
                    item.awayTeam.name = 'Brasil';
                    item.awayTeam.grupo = 'G'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/BRA.png';
                    break;
                case 'Serbia':
                    item.awayTeam.name = 'Serbia';
                    item.awayTeam.grupo = 'G'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/SRB.png';
                    break;
                case 'Switzerland':
                    item.awayTeam.name = 'Suiza';
                    item.awayTeam.grupo = 'G'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/SUI.png';
                    break;
                case 'Cameroon':
                    item.awayTeam.name = 'Camerún';
                    item.awayTeam.grupo = 'G'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/CMR.png';
                    break;
                case 'Uruguay':
                    item.awayTeam.name = 'Uruguay';
                    item.awayTeam.grupo = 'H'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/URU.png';
                    break;
                case 'Portugal':
                    item.awayTeam.name = 'Portugal';
                    item.awayTeam.grupo = 'H'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/POR.png';
                    break;
                case 'Ghana':
                    item.awayTeam.name = 'Ghana';
                    item.awayTeam.grupo = 'H'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/GHA.png';
                    break;
                case 'Korea Republic':
                    item.awayTeam.name = 'Corea del Sur';
                    item.awayTeam.grupo = 'H'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/KOR.png';
                    break;
            }
            //Estadios
            // eslint-disable-next-line default-case
            switch (item.venue) {
                case 'Al Bayt Stadium':
                    item.venue = 'Al Bayt';
                    break;
                case 'Al Janoub Stadium':
                    item.venue = 'Al Janoub';
                    break;
                case 'Stadium 974':
                    item.venue = 'Estadio 974';
                    break;
                case 'Ahmad Bin Ali Stadium':
                    item.venue = 'Áhmad Bin Ali';
                    break;
                case 'Khalifa International Stadium':
                    item.venue = 'Estadio Internacional Jalifa';
                    break;
                case 'Al Thumama Stadium':
                    item.venue = 'Estadio Al Zumama';
                    break;
                case 'Lusail Stadium':
                    item.venue = 'Estadio Lusail';
                    break;
                case 'Education City Stadium':
                    item.venue = 'Ciudad de la Educación';
                    break;
            }
            //Fecha y hora formateada
            item.date = moment(item.date).format('DD-MM-YY HH:mm');
            //Pendientes
            if (item.status === 'scheduled') {
                item.homeTeam.goals = '-';
                item.awayTeam.goals = '-';
            }
            //Progreso
            if (item.status === 'in progress')
                item.status = 'circulo-en-progreso';
            //No iniciado
            if (item.status === 'scheduled')
                item.status = 'circulo-no-iniciado';
            //Finalizado
            if (item.status === 'completed')
                item.status = 'circulo-finalizado';
        });
        octavos.forEach(item => {
            //Grupos
            // eslint-disable-next-line default-case
            switch (item.homeTeam.name) {
                case 'Netherlands':
                    item.homeTeam.name = 'Países Bajos';
                    item.homeTeam.grupo = 'A'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/NED.png';
                    break;
                case 'England':
                    item.homeTeam.name = 'Inglaterra';
                    item.homeTeam.grupo = 'B'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/ENG.png';
                    break;
                case 'Argentina':
                    item.homeTeam.name = 'Argentina';
                    item.homeTeam.grupo = 'C'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/ARG.png';
                    break;
                case 'France':
                    item.homeTeam.name = 'Francia';
                    item.homeTeam.grupo = 'D'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/FRA.png';
                    break;
                case 'Japan':
                    item.homeTeam.name = 'Japón';
                    item.homeTeam.grupo = 'E'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/JPN.png';
                    break;
                case 'Morocco':
                    item.homeTeam.name = 'Marruecos';
                    item.homeTeam.grupo = 'F'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/MAR.png';
                    break;
                case 'Brazil':
                    item.homeTeam.name = 'Brasil';
                    item.homeTeam.grupo = 'G'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/BRA.png';
                    break;
                case 'Portugal':
                    item.homeTeam.name = 'Portugal';
                    item.homeTeam.grupo = 'H'
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/POR.png';
            }
            // eslint-disable-next-line default-case
            switch (item.awayTeam.name) {
                case 'Senegal':
                    item.awayTeam.name = 'Senegal';
                    item.awayTeam.grupo = 'A'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/SEN.png';
                    break;
                case 'USA':
                    item.awayTeam.name = 'Estados Unidos';
                    item.awayTeam.grupo = 'B'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/USA.png';
                    break;
                case 'Poland':
                    item.awayTeam.name = 'Polonia';
                    item.awayTeam.grupo = 'C'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/POL.png';
                    break;
                case 'Australia':
                    item.awayTeam.name = 'Australia';
                    item.awayTeam.grupo = 'D'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/AUS.png';
                    break;
                case 'Spain':
                    item.awayTeam.name = 'España';
                    item.awayTeam.grupo = 'E'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/ESP.png';
                    break;
                case 'Croatia':
                    item.awayTeam.name = 'Croacia';
                    item.awayTeam.grupo = 'F'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/CRO.png';
                    break;
                case 'Switzerland':
                    item.awayTeam.name = 'Suiza';
                    item.awayTeam.grupo = 'G'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/SUI.png';
                    break;
                case 'Korea Republic':
                    item.awayTeam.name = 'Corea del Sur';
                    item.awayTeam.grupo = 'H'
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/KOR.png';
                    break;
            }
            //Estadios
            // eslint-disable-next-line default-case
            switch (item.venue) {
                case 'Al Bayt Stadium':
                    item.venue = 'Al Bayt';
                    break;
                case 'Al Janoub Stadium':
                    item.venue = 'Al Janoub';
                    break;
                case 'Stadium 974':
                    item.venue = 'Estadio 974';
                    break;
                case 'Ahmad Bin Ali Stadium':
                    item.venue = 'Áhmad Bin Ali';
                    break;
                case 'Khalifa International Stadium':
                    item.venue = 'Estadio Internacional Jalifa';
                    break;
                case 'Al Thumama Stadium':
                    item.venue = 'Estadio Al Zumama';
                    break;
                case 'Lusail Stadium':
                    item.venue = 'Estadio Lusail';
                    break;
                case 'Education City Stadium':
                    item.venue = 'Ciudad de la Educación';
                    break;
            }
            //Fecha y hora formateada
            item.date = moment(item.date).format('DD-MM-YY HH:mm');
            //Progreso
            if (item.status === 'in progress')
                item.status = 'circulo-en-progreso';
            //No iniciado
            if (item.status === 'scheduled')
                item.status = 'circulo-no-iniciado';
            //Finalizado
            if (item.status === 'completed')
                item.status = 'circulo-finalizado';

            //Goles
            if (item.homeTeam.goals === 0 && item.awayTeam.goals === 0 && item.status === "circulo-no-iniciado") {
                item.homeTeam.goals = '-';
                item.awayTeam.goals = '-';
            }
        });
        cuartos.forEach(item => {
            // eslint-disable-next-line default-case
            switch (item.homeTeam.name) {
                case 'Netherlands':
                    item.homeTeam.name = 'Países Bajos';
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/NED.png';
                    break;
                case 'England':
                    item.homeTeam.name = 'Inglaterra';
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/ENG.png';
                    break;
                case 'Croatia':
                    item.homeTeam.name = 'Croacia';
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/CRO.png';
                    break;
                case 'Morocco':
                    item.homeTeam.name = 'Marruecos';
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/MAR.png';
                    break;
            }
            // eslint-disable-next-line default-case
            switch (item.awayTeam.name) {
                case 'Argentina':
                    item.awayTeam.name = 'Argentina';
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/ARG.png';
                    break;
                case 'France':
                    item.awayTeam.name = 'Francia';
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/FRA.png';
                    break;
                case 'Brazil':
                    item.awayTeam.name = 'Brasil';
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/BRA.png';
                    break;
                case 'Portugal':
                    item.awayTeam.name = 'Portugal';
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/POR.png';
                    break;
            }
            //Estadios
            // eslint-disable-next-line default-case
            switch (item.venue) {
                case 'Al Bayt Stadium':
                    item.venue = 'Al Bayt';
                    break;
                case 'Al Janoub Stadium':
                    item.venue = 'Al Janoub';
                    break;
                case 'Stadium 974':
                    item.venue = 'Estadio 974';
                    break;
                case 'Ahmad Bin Ali Stadium':
                    item.venue = 'Áhmad Bin Ali';
                    break;
                case 'Khalifa International Stadium':
                    item.venue = 'Estadio Internacional Jalifa';
                    break;
                case 'Al Thumama Stadium':
                    item.venue = 'Estadio Al Zumama';
                    break;
                case 'Lusail Stadium':
                    item.venue = 'Estadio Lusail';
                    break;
                case 'Education City Stadium':
                    item.venue = 'Ciudad de la Educación';
                    break;
            }
            //Fecha y hora formateada
            item.date = moment(item.date).format('DD-MM-YY HH:mm');
            //Progreso
            if (item.status === 'in_progress')
                item.status = 'circulo-en-progreso';
            //No iniciado
            if (item.status === 'scheduled')
                item.status = 'circulo-no-iniciado';
            //Finalizado
            if (item.status === 'completed')
                item.status = 'circulo-finalizado';

            //Goles
            if (item.homeTeam.goals === 0 && item.awayTeam.goals === 0 && item.status === "circulo-no-iniciado") {
                item.homeTeam.goals = '-';
                item.awayTeam.goals = '-';
            }
        });
        semifinal.forEach(item => {
            // eslint-disable-next-line default-case
            switch (item.homeTeam.name) {
                case 'Argentina':
                    item.homeTeam.name = 'Argentina';
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/ARG.png';
                    break;
                case 'France':
                    item.homeTeam.name = 'Francia';
                    item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/FRA.png';
                    break;
            }
            // eslint-disable-next-line default-case
            switch (item.awayTeam.name) {
                case 'Croatia':
                    item.awayTeam.name = 'Croacia';
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/CRO.png';
                    break;
                case 'Morocco':
                    item.awayTeam.name = 'Marruecos';
                    item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/MAR.png';
                    break;
            }
            //Estadios
            // eslint-disable-next-line default-case
            switch (item.venue) {
                case 'Al Bayt Stadium':
                    item.venue = 'Al Bayt';
                    break;
                case 'Al Janoub Stadium':
                    item.venue = 'Al Janoub';
                    break;
                case 'Stadium 974':
                    item.venue = 'Estadio 974';
                    break;
                case 'Ahmad Bin Ali Stadium':
                    item.venue = 'Áhmad Bin Ali';
                    break;
                case 'Khalifa International Stadium':
                    item.venue = 'Estadio Internacional Jalifa';
                    break;
                case 'Al Thumama Stadium':
                    item.venue = 'Estadio Al Zumama';
                    break;
                case 'Lusail Stadium':
                    item.venue = 'Estadio Lusail';
                    break;
                case 'Education City Stadium':
                    item.venue = 'Ciudad de la Educación';
                    break;
            }
            //Fecha y hora formateada
            item.date = moment(item.date).format('DD-MM-YY HH:mm');
            //Progreso
            if (item.status === 'in_progress')
                item.status = 'circulo-en-progreso';
            //No iniciado
            if (item.status === 'scheduled')
                item.status = 'circulo-no-iniciado';
            //Finalizado
            if (item.status === 'completed')
                item.status = 'circulo-finalizado';

            //Goles
            if (item.homeTeam.goals === 0 && item.awayTeam.goals === 0 && item.status === "circulo-no-iniciado") {
                item.homeTeam.goals = '-';
                item.awayTeam.goals = '-';
            }
        });
        tercer.forEach(item => {
            if (item.homeTeam.name === 'Croatia') {
                item.homeTeam.name = 'Croacia';
                item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/CRO.png';
            }
            if (item.awayTeam.name === 'Morocco') {
                item.awayTeam.name = 'Marruecos';
                item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/MAR.png';
            }
            //Estadios
            // eslint-disable-next-line default-case
            switch (item.venue) {
                case 'Al Bayt Stadium':
                    item.venue = 'Al Bayt';
                    break;
                case 'Al Janoub Stadium':
                    item.venue = 'Al Janoub';
                    break;
                case 'Stadium 974':
                    item.venue = 'Estadio 974';
                    break;
                case 'Ahmad Bin Ali Stadium':
                    item.venue = 'Áhmad Bin Ali';
                    break;
                case 'Khalifa International Stadium':
                    item.venue = 'Estadio Internacional Jalifa';
                    break;
                case 'Al Thumama Stadium':
                    item.venue = 'Estadio Al Zumama';
                    break;
                case 'Lusail Stadium':
                    item.venue = 'Estadio Lusail';
                    break;
                case 'Education City Stadium':
                    item.venue = 'Ciudad de la Educación';
                    break;
            }
            //Fecha y hora formateada
            item.date = moment(item.date).format('DD-MM-YY HH:mm');
            //Progreso
            if (item.status === 'in progress')
                item.status = 'circulo-en-progreso';
            //No iniciado
            if (item.status === 'scheduled')
                item.status = 'circulo-no-iniciado';
            //Finalizado
            if (item.status === 'completed')
                item.status = 'circulo-finalizado';
        });
        final.forEach(item => {
            if (item.homeTeam.name === 'Argentina') {
                item.homeTeam.name = 'Argentina';
                item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/ARG.png';
            }
            if (item.awayTeam.name === 'France') {
                item.awayTeam.name = 'Francia';
                item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/FRA.png';
            }
            //Estadios
            // eslint-disable-next-line default-case
            switch (item.venue) {
                case 'Al Bayt Stadium':
                    item.venue = 'Al Bayt';
                    break;
                case 'Al Janoub Stadium':
                    item.venue = 'Al Janoub';
                    break;
                case 'Stadium 974':
                    item.venue = 'Estadio 974';
                    break;
                case 'Ahmad Bin Ali Stadium':
                    item.venue = 'Áhmad Bin Ali';
                    break;
                case 'Khalifa International Stadium':
                    item.venue = 'Estadio Internacional Jalifa';
                    break;
                case 'Al Thumama Stadium':
                    item.venue = 'Estadio Al Zumama';
                    break;
                case 'Lusail Stadium':
                    item.venue = 'Estadio Lusail';
                    break;
                case 'Education City Stadium':
                    item.venue = 'Ciudad de la Educación';
                    break;
            }
            //Fecha y hora formateada
            item.date = moment(item.date).format('DD-MM-YY HH:mm');
            //Progreso
            if (item.status === 'in progress')
                item.status = 'circulo-en-progreso';
            //No iniciado
            if (item.status === 'scheduled')
                item.status = 'circulo-no-iniciado';
            //Finalizado
            if (item.status === 'completed')
                item.status = 'circulo-finalizado';
        });
        let tercero = tercer[0];
        let final64 = final[0];
        grupos.forEach((item) => {
            // eslint-disable-next-line default-case
            switch (item.code) {
                case 'A':
                    item.code = 'Grupo A';
                    item.number = "1";
                    break;
                case 'B':
                    item.code = 'Grupo B';
                    item.number = "2";
                    break;
                case 'C':
                    item.code = 'Grupo C';
                    item.number = "3";
                    break;
                case 'D':
                    item.code = 'Grupo D';
                    item.number = "4";
                    break;
                case 'E':
                    item.code = 'Grupo E';
                    item.number = "5";
                    break;
                case 'F':
                    item.code = 'Grupo F';
                    item.number = "6";
                    break;
                case 'G':
                    item.code = 'Grupo G';
                    item.number = "7";
                    break;
                case 'H':
                    item.code = 'Grupo H';
                    item.number = "8";
                    break;
            }
            //Nombres
            item.teams.forEach((team) => {
                // eslint-disable-next-line default-case
                switch (team.alternateName) {
                    case 'Qatar':
                        team.alternateName = 'Catar';
                        team.flag = 'https://play.fifa.com/media/flags/squads/QAT.png';
                        break;
                    case 'Ecuador':
                        team.alternateName = 'Ecuador';
                        team.flag = 'https://play.fifa.com/media/flags/squads/ECU.png';
                        break;
                    case 'Senegal':
                        team.alternateName = 'Senegal';
                        team.flag = 'https://play.fifa.com/media/flags/squads/SEN.png';
                        break;
                    case 'Netherlands':
                        team.alternateName = 'Países Bajos';
                        team.flag = 'https://play.fifa.com/media/flags/squads/NED.png';
                        break;
                    case 'England':
                        team.alternateName = 'Inglaterra';
                        team.flag = 'https://play.fifa.com/media/flags/squads/ENG.png';
                        break;
                    case 'Iran':
                        team.alternateName = 'Irán';
                        team.flag = 'https://play.fifa.com/media/flags/squads/IRN.png';
                        break;
                    case 'USA':
                        team.alternateName = 'Estados Unidos';
                        team.flag = 'https://play.fifa.com/media/flags/squads/USA.png';
                        break;
                    case 'Wales':
                        team.alternateName = 'Gales';
                        team.flag = 'https://play.fifa.com/media/flags/squads/WAL.png';
                        break;
                    case 'Argentina':
                        team.alternateName = 'Argentina';
                        team.flag = 'https://play.fifa.com/media/flags/squads/ARG.png';
                        break;
                    case 'Mexico':
                        team.alternateName = 'México';
                        team.flag = 'https://play.fifa.com/media/flags/squads/MEX.png';
                        break;
                    case 'Poland':
                        team.alternateName = 'Polonia';
                        team.flag = 'https://play.fifa.com/media/flags/squads/POL.png';
                        break;
                    case 'Saudi Arabia':
                        team.alternateName = 'Arabia Saudita';
                        team.flag = 'https://play.fifa.com/media/flags/squads/KSA.png';
                        break;
                    case 'France':
                        team.alternateName = 'Francia';
                        team.flag = 'https://play.fifa.com/media/flags/squads/FRA.png';
                        break;
                    case 'Australia':
                        team.alternateName = 'Australia';
                        team.flag = 'https://play.fifa.com/media/flags/squads/AUS.png';
                        break;
                    case 'Denmark':
                        team.alternateName = 'Dinamarca';
                        team.flag = 'https://play.fifa.com/media/flags/squads/DEN.png';
                        break;
                    case 'Tunisia':
                        team.alternateName = 'Túnez';
                        team.flag = 'https://play.fifa.com/media/flags/squads/TUN.png';
                        break;
                    case 'Spain':
                        team.alternateName = 'España';
                        team.flag = 'https://play.fifa.com/media/flags/squads/ESP.png';
                        break;
                    case 'Costa Rica':
                        team.alternateName = 'Costa Rica';
                        team.flag = 'https://play.fifa.com/media/flags/squads/CRC.png';
                        break;
                    case 'Germany':
                        team.alternateName = 'Alemania';
                        team.flag = 'https://play.fifa.com/media/flags/squads/GER.png';
                        break;
                    case 'Japan':
                        team.alternateName = 'Japón';
                        team.flag = 'https://play.fifa.com/media/flags/squads/JPN.png';
                        break;
                    case 'Belgium':
                        team.alternateName = 'Bélgica';
                        team.flag = 'https://play.fifa.com/media/flags/squads/BEL.png';
                        break;
                    case 'Canada':
                        team.alternateName = 'Canadá';
                        team.flag = 'https://play.fifa.com/media/flags/squads/CAN.png';
                        break;
                    case 'Morocco':
                        team.alternateName = 'Marruecos';
                        team.flag = 'https://play.fifa.com/media/flags/squads/MAR.png';
                        break;
                    case 'Croatia':
                        team.alternateName = 'Croacia';
                        team.flag = 'https://play.fifa.com/media/flags/squads/CRO.png';
                        break;
                    case 'Brazil':
                        team.alternateName = 'Brasil';
                        team.flag = 'https://play.fifa.com/media/flags/squads/BRA.png';
                        break;
                    case 'Serbia':
                        team.alternateName = 'Serbia';
                        team.flag = 'https://play.fifa.com/media/flags/squads/SRB.png';
                        break;
                    case 'Switzerland':
                        team.alternateName = 'Suiza';
                        team.flag = 'https://play.fifa.com/media/flags/squads/SUI.png';
                        break;
                    case 'Cameroon':
                        team.alternateName = 'Camerún';
                        team.flag = 'https://play.fifa.com/media/flags/squads/CMR.png';
                        break;
                    case 'Uruguay':
                        team.alternateName = 'Uruguay';
                        team.flag = 'https://play.fifa.com/media/flags/squads/URU.png';
                        break;
                    case 'Portugal':
                        team.alternateName = 'Portugal';
                        team.flag = 'https://play.fifa.com/media/flags/squads/POR.png';
                        break;
                    case 'Ghana':
                        team.alternateName = 'Ghana';
                        team.flag = 'https://play.fifa.com/media/flags/squads/GHA.png';
                        break;
                    case 'Korea Republic':
                        team.alternateName = 'Corea del Sur';
                        team.flag = 'https://play.fifa.com/media/flags/squads/KOR.png';
                        break;
                }
            });
        });
        ///Group A
        let grupoA = grupos.filter(grupo => grupo.code === 'Grupo A');
        let partidosA = [];
        grupoA.forEach(grupo => {
            grupo.teams.forEach(team => {
                team.matches.forEach(match => {
                    // eslint-disable-next-line default-case
                    switch (match.homeTeam.name) {
                        case 'Qatar':
                            match.homeTeam.name = 'Catar';
                            match.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/QAT.png';
                            break;
                        case 'Ecuador':
                            match.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/ECU.png';
                            break;
                        case 'Netherlands':
                            match.homeTeam.name = 'Países Bajos';
                            match.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/NED.png';
                            break;
                        case 'Senegal':
                            match.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/SEN.png';
                            break;
                    }
                    // eslint-disable-next-line default-case
                    switch (match.awayTeam.name) {
                        case 'Qatar':
                            match.awayTeam.name = 'Catar';
                            match.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/QAT.png';
                            break;
                        case 'Ecuador':
                            match.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/ECU.png';
                            break;
                        case 'Netherlands':
                            match.awayTeam.name = 'Países Bajos';
                            match.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/NED.png';
                            break;
                        case 'Senegal':
                            match.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/SEN.png';
                            break;
                    }
                    //Fecha y hora formateada
                    match.date = new Date(match.date).toUTCString();
                    partidosA.push(match);
                })
            });
        });
        var hash = {};
        partidosA = partidosA.filter(function (current) {
            var exists = !hash[current.id];
            hash[current.id] = true;
            return exists;
        });
        partidosA.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });

        ///Group B
        let grupoB = grupos.filter(grupo => grupo.code === 'Grupo B');
        let partidosB = [];
        grupoB.forEach(grupo => {
            grupo.teams.forEach(team => {
                team.matches.forEach(match => {
                    // eslint-disable-next-line default-case
                    switch (match.homeTeam.name) {
                        case 'England':
                            match.homeTeam.name = 'Inglaterra';
                            match.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/ENG.png';
                            break;
                        case 'Iran':
                            match.homeTeam.name = 'Irán';
                            match.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/IRN.png';
                            break;
                        case 'USA':
                            match.homeTeam.name = 'Estados Unidos';
                            match.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/USA.png';
                            break;
                        case 'Wales':
                            match.homeTeam.name = 'Gales';
                            match.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/WAL.png';
                            break;
                    }
                    // eslint-disable-next-line default-case
                    switch (match.awayTeam.name) {
                        case 'England':
                            match.awayTeam.name = 'Inglaterra';
                            match.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/ENG.png';
                            break;
                        case 'Iran':
                            match.awayTeam.name = 'Irán';
                            match.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/IRN.png';
                            break;
                        case 'USA':
                            match.awayTeam.name = 'Estados Unidos';
                            match.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/USA.png';
                            break;
                        case 'Wales':
                            match.awayTeam.name = 'Gales';
                            match.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/WAL.png';
                            break;
                    }
                    //Fecha y hora formateada
                    match.date = new Date(match.date).toUTCString();
                    partidosB.push(match);
                })
            });
        });
        var hashB = {};
        partidosB = partidosB.filter(function (current) {
            var exists = !hashB[current.id];
            hashB[current.id] = true;
            return exists;
        });
        partidosB.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });

        ////
        if (!DatailsLoaded) {
            return (
                <div className="App1">
                    <div className="App1-child">
                        <Spinner animation="border" variant="danger" />
                        Cargando...
                    </div>
                </div>
            );

        }
        else {
            return (
                console.clear(),
                <div className="App">
                    <header className="App-header w-100">
                        <Row>
                            <Col className='col-3 col-md-3'>
                                <img className="logo img-fluid" src="https://digitalhub.fifa.com/transform/3a170b69-b0b5-4d0c-bca0-85880a60ea1a/World-Cup-logo-landscape-on-dark?io=transform:fill&quality=75" />
                            </Col>
                            <Col className='col-9 col-md-9 my-auto'>
                                <Nav id="nav-menu" variant="pills" className="bg-body-primary" defaultActiveKey="1">
                                    <Nav.Item key="1" eventKey="1" onClick={this.handleClick(1)}>
                                        <Nav.Link eventKey="1">Partidos</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="2" eventKey="2" onClick={this.handleClick(2)}>
                                        <Nav.Link eventKey="2">Tablas</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="3" eventKey="3" onClick={this.handleClick(3)}>
                                        <Nav.Link eventKey="3">Grupos</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </header>

                    <div className="container">
                        <div className="container-matches">
                            <Row>
                                <Nav variant="pills" defaultActiveKey="1" id='nav-home'>
                                    <Nav.Item key="1" eventKey="1" onClick={this.handleClick2(1)}>
                                        <Nav.Link id="menu" eventKey="1">Fase de Grupos</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="2" eventKey="2" onClick={this.handleClick2(2)}>
                                        <Nav.Link id="menu" eventKey="2">Octavos</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="3" eventKey="3" onClick={this.handleClick2(3)}>
                                        <Nav.Link id="menu" eventKey="3">Cuartos</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="4" eventKey="4" onClick={this.handleClick2(4)}>
                                        <Nav.Link id="menu" eventKey="4">Semifinales</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="5" eventKey="5" onClick={this.handleClick2(5)}>
                                        <Nav.Link id="menu" eventKey="5">Tercer Puesto</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="6" eventKey="6" onClick={this.handleClick2(6)}>
                                        <Nav.Link id="menu" eventKey="6">Final</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Row>
                            {/*Grupos*/}
                            <Row id="grupos" className='mt-2'>
                                <Card>
                                    <Card.Body>
                                        <Row className='bg-dark text-white mb-2'>
                                            <Col className='col-1 col-md-1'>
                                                Grupo
                                            </Col>
                                            <Col className='col-2 col-md-2'>
                                                Local
                                            </Col>
                                            <Col className='col-1 col-md-1'>
                                                VS
                                            </Col>
                                            <Col className='col-2 col-md-2'>
                                                Visitante
                                            </Col>
                                            <Col className='col-3 col-md-3'>
                                                Estadio
                                            </Col>
                                            <Col className='col-3 col-md-3'>
                                                <Row>
                                                    <Col className='col-9 col-md-9'>
                                                        Fecha
                                                    </Col>
                                                    <Col className='col-3 col-md-3'>
                                                        Estado
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <div>
                                            {faseGrupos.map(item => (
                                                <Row className='mb-2' id={item.id}>
                                                    <Col className='col-1 col-md-1'>
                                                        <Badge bg="dark">
                                                            {item.homeTeam.grupo}
                                                        </Badge>
                                                    </Col>
                                                    <Col className='col-2 col-md-2'>
                                                        <Row>
                                                            <Col className='col-4 col-md-4'>
                                                                {item.homeTeam.name === "Suiza" ? <Card.Img variant="img-fluid" className='img-fluid' src={item.homeTeam.flag} /> : <Card.Img variant="img-fluid" src={item.homeTeam.flag} />}
                                                            </Col>
                                                            <Col className='col-8 col-md-8 text-start'>
                                                                {item.homeTeam.goals > item.awayTeam.goals ? <span className="winner">{item.homeTeam.name}</span> : item.homeTeam.name}
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col className='col-1 col-md-1'>
                                                        <Row>
                                                            <div className='trapecioInv'>
                                                                {item.homeTeam.goals} - {item.awayTeam.goals}
                                                            </div>
                                                        </Row>
                                                    </Col>
                                                    <Col className='col-2 col-md-2'>
                                                        <Row>
                                                            <Col className='col-8 col-md-8 text-end'>
                                                                {item.homeTeam.goals < item.awayTeam.goals ? <span className="winner">{item.awayTeam.name}</span> : item.awayTeam.name}
                                                            </Col>
                                                            <Col className='col-4 col-md-4'>
                                                                {item.awayTeam.name === "Suiza" ? <Card.Img variant="img-fluid" className='img-fluid' src={item.awayTeam.flag} /> : <Card.Img variant="img-fluid" src={item.awayTeam.flag} />}
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col className='col-3 col-md-3'>
                                                        {item.venue}
                                                    </Col>
                                                    <Col className='col-3 col-md-3'>
                                                        <Row>
                                                            <Col className='col-9 col-md-9'>
                                                                {item.date}
                                                            </Col>
                                                            <Col className='col-3 col-md-3'>
                                                                <div className={item.status + ' text-center'}></div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Row>
                            {/*Octavos*/}
                            <Row id="octavos" className='mt-4' style={{ display: 'none' }}>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Row className='bg-dark text-white mb-2'>
                                                <Col className='col-2 col-md-2'>
                                                    Local
                                                </Col>
                                                <Col className='col-1 col-md-1'>
                                                    VS
                                                </Col>
                                                <Col className='col-2 col-md-2'>
                                                    Visitante
                                                </Col>
                                                <Col className='col-3 col-md-3'>
                                                    Estadio
                                                </Col>
                                                <Col className='col-4 col-md-4'>
                                                    <Row>
                                                        <Col className='col-9 col-md-9'>
                                                            Fecha
                                                        </Col>
                                                        <Col className='col-3 col-md-3'>
                                                            Estado
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <div>
                                                {octavos.map(item => (
                                                    <Row className='mb-2' id={item.id}>
                                                        <Col className='col-2 col-md-2'>
                                                            <Row>
                                                                <Col className='col-4 col-md-4'>
                                                                    {item.homeTeam.name === "Suiza" ? <Card.Img variant="img-fluid" className='img-fluid' src={item.homeTeam.flag} /> : <Card.Img variant="img-fluid" src={item.homeTeam.flag} />}
                                                                </Col>
                                                                <Col className='col-8 col-md-8 text-start'>
                                                                    {item.homeTeam.goals > item.awayTeam.goals || item.homeTeam.penalties > item.awayTeam.penalties ? <span className="winner">{item.homeTeam.name}</span> : item.homeTeam.name}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col className='col-1 col-md-1'>
                                                            <Row>
                                                                <div className='trapecioInv'>
                                                                    {item.homeTeam.goals} - {item.awayTeam.goals}
                                                                </div>
                                                            </Row>
                                                            {item.homeTeam.goals === item.awayTeam.goals && item.homeTeam.goals !== '-' ? (
                                                                <Row>
                                                                    <div className='trapecio'>
                                                                        {item.homeTeam.penalties} - {item.awayTeam.penalties}
                                                                    </div>
                                                                </Row>
                                                            ) : null}
                                                        </Col>
                                                        <Col className='col-2 col-md-2'>
                                                            <Row>
                                                                <Col className='col-8 col-md-8 text-end'>
                                                                    {item.homeTeam.goals < item.awayTeam.goals || item.homeTeam.penalties < item.awayTeam.penalties ? <span className="winner">{item.awayTeam.name}</span> : item.awayTeam.name}
                                                                </Col>
                                                                <Col className='col-4 col-md-4'>
                                                                    {item.awayTeam.name === "Suiza" ? <Card.Img variant="img-fluid" className='img-fluid' src={item.awayTeam.flag} /> : <Card.Img variant="img-fluid" src={item.awayTeam.flag} />}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col className='col-3 col-md-3'>
                                                            {item.venue}
                                                        </Col>
                                                        <Col className='col-4 col-md-4'>
                                                            <Row>
                                                                <Col className='col-9 col-md-9'>
                                                                    {item.date}
                                                                </Col>
                                                                <Col className='col-3 col-md-3'>
                                                                    <div className={item.status}></div>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            {/*Cuartos*/}
                            <Row id="cuartos" style={{ display: 'none' }}>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Row className='bg-dark text-white mb-2'>
                                                <Col className='col-2 col-md-2'>
                                                    Local
                                                </Col>
                                                <Col className='col-1 col-md-1'>
                                                    VS
                                                </Col>
                                                <Col className='col-2 col-md-2'>
                                                    Visitante
                                                </Col>
                                                <Col className='col-3 col-md-3'>
                                                    Estadio
                                                </Col>
                                                <Col className='col-4 col-md-4'>
                                                    <Row>
                                                        <Col className='col-9 col-md-9'>
                                                            Fecha
                                                        </Col>
                                                        <Col className='col-3 col-md-3'>
                                                            Estado
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <div>
                                                {cuartos.map(item => (
                                                    <Row className='mb-2' id={item.id}>
                                                        <Col className='col-2 col-md-2'>
                                                            <Row>
                                                                <Col className='col-4 col-md-4'>
                                                                    {item.homeTeam.name === "Suiza" ? <Card.Img variant="img-fluid" className='img-fluid' src={item.homeTeam.flag} /> : <Card.Img variant="img-fluid" src={item.homeTeam.flag} />}
                                                                </Col>
                                                                <Col className='col-8 col-md-8 text-start'>
                                                                    {item.homeTeam.goals > item.awayTeam.goals || item.homeTeam.penalties > item.awayTeam.penalties ? <span className="winner">{item.homeTeam.name}</span> : item.homeTeam.name}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col className='col-1 col-md-1'>
                                                            <Row>
                                                                <div className='trapecioInv'>
                                                                    {item.homeTeam.goals} - {item.awayTeam.goals}
                                                                </div>
                                                            </Row>
                                                            {item.homeTeam.goals === item.awayTeam.goals && item.homeTeam.goals !== '-' ? (
                                                                <Row>
                                                                    <div className='trapecio'>
                                                                        {item.homeTeam.penalties} - {item.awayTeam.penalties}
                                                                    </div>
                                                                </Row>
                                                            ) : null}
                                                        </Col>
                                                        <Col className='col-2 col-md-2'>
                                                            <Row>
                                                                <Col className='col-8 col-md-8 text-end'>
                                                                    {item.homeTeam.goals < item.awayTeam.goals || item.homeTeam.penalties < item.awayTeam.penalties ? <span className="winner">{item.awayTeam.name}</span> : item.awayTeam.name}
                                                                </Col>
                                                                <Col className='col-4 col-md-4'>
                                                                    {item.awayTeam.name === "Suiza" ? <Card.Img variant="img-fluid" className='img-fluid' src={item.awayTeam.flag} /> : <Card.Img variant="img-fluid" src={item.awayTeam.flag} />}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col className='col-3 col-md-3'>
                                                            {item.venue}
                                                        </Col>
                                                        <Col className='col-4 col-md-4'>
                                                            <Row>
                                                                <Col className='col-9 col-md-9'>
                                                                    {item.date}
                                                                </Col>
                                                                <Col className='col-3 col-md-3'>
                                                                    <div className={item.status}></div>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            {/*Semi*/}
                            <Row id="semis" style={{ display: 'none' }}>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Row className='bg-dark text-white mb-2'>
                                                <Col className='col-2 col-md-2'>
                                                    Local
                                                </Col>
                                                <Col className='col-1 col-md-1'>
                                                    VS
                                                </Col>
                                                <Col className='col-2 col-md-2'>
                                                    Visitante
                                                </Col>
                                                <Col className='col-3 col-md-3'>
                                                    Estadio
                                                </Col>
                                                <Col className='col-4 col-md-4'>
                                                    <Row>
                                                        <Col className='col-9 col-md-9'>
                                                            Fecha
                                                        </Col>
                                                        <Col className='col-3 col-md-3'>
                                                            Estado
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <div>
                                                {semifinal.map(item => (
                                                    <Row className='mb-2' id={item.id}>
                                                        <Col className='col-2 col-md-2'>
                                                            <Row>
                                                                <Col className='col-4 col-md-4'>
                                                                    {item.homeTeam.name === "Suiza" ? <Card.Img variant="img-fluid" className='img-fluid' src={item.homeTeam.flag} /> : <Card.Img variant="img-fluid" src={item.homeTeam.flag} />}
                                                                </Col>
                                                                <Col className='col-8 col-md-8 text-start'>
                                                                    {item.homeTeam.goals > item.awayTeam.goals || item.homeTeam.penalties > item.awayTeam.penalties ? <span className="winner">{item.homeTeam.name}</span> : item.homeTeam.name}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col className='col-1 col-md-1'>
                                                            <Row>
                                                                <div className='trapecioInv'>
                                                                    {item.homeTeam.goals} - {item.awayTeam.goals}
                                                                </div>
                                                            </Row>
                                                        </Col>
                                                        <Col className='col-2 col-md-2'>
                                                            <Row>
                                                                <Col className='col-8 col-md-8 text-end'>
                                                                    {item.homeTeam.goals < item.awayTeam.goals || item.homeTeam.penalties < item.awayTeam.penalties ? <span className="winner">{item.awayTeam.name}</span> : item.awayTeam.name}
                                                                </Col>
                                                                <Col className='col-4 col-md-4'>
                                                                    {item.awayTeam.name === "Suiza" ? <Card.Img variant="img-fluid" className='img-fluid' src={item.awayTeam.flag} /> : <Card.Img variant="img-fluid" src={item.awayTeam.flag} />}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col className='col-3 col-md-3'>
                                                            {item.venue}
                                                        </Col>
                                                        <Col className='col-4 col-md-4'>
                                                            <Row>
                                                                <Col className='col-9 col-md-9'>
                                                                    {item.date}
                                                                </Col>
                                                                <Col className='col-3 col-md-3'>
                                                                    <div className={item.status}></div>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            {/*Tercer*/}
                            <Row id="tercer" style={{ display: 'none' }}>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col style={{ textAlign: 'left' }} md={4}>FINALIZADO</Col>
                                                <Col style={{ textAlign: 'right' }} md={{ span: 4, offset: 4 }}>{tercero.date}</Col>
                                            </Row>

                                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                                <Col className='col-3 col-md-3'>
                                                    <Card.Img variant="img-fluid" src={tercero.homeTeam.flag} />
                                                </Col>
                                                <Col className='col-2 col-md-2 h2'>{tercero.homeTeam.name}</Col>
                                                <Col className='col-2 col-md-2 trapecioInv h1'>
                                                    {tercero.homeTeam.goals} - {tercero.awayTeam.goals}
                                                </Col>
                                                <Col className='col-2 col-md-2 h2'>{tercero.awayTeam.name}</Col>
                                                <Col className='col-3 col-md-3'>
                                                    <Card.Img variant="img-fluid" src={tercero.awayTeam.flag} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>Estadio: {tercero.venue}</Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            {/*Final*/}
                            <Row id="final" style={{ display: 'none' }}>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                                <Row>
                                                    <Col style={{ textAlign: 'left' }} md={4}>FINALIZADO</Col>
                                                    <Col style={{ textAlign: 'right' }} md={{ span: 4, offset: 4 }}>{final64.date}</Col>
                                                </Row>

                                                <Row style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Col className='col-3 col-md-3'>
                                                        <Card.Img variant="img-fluid" src={final64.homeTeam.flag} />
                                                    </Col>
                                                    <Col className='col-2 col-md-2 h2'>{final64.homeTeam.name}</Col>
                                                    <Col className='col-2 col-md-2 trapecioInv h1'>
                                                        {final64.homeTeam.goals} - {final64.awayTeam.goals}
                                                        <Row>
                                                            <Col className='col-12 col-md-12 trapecio'>
                                                                {final64.homeTeam.penalties} - {final64.awayTeam.penalties}
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col className='col-2 col-md-2 h2'>{final64.awayTeam.name}</Col>
                                                    <Col className='col-3 col-md-3'>
                                                        <Card.Img variant="img-fluid" src={final64.awayTeam.flag} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>Estadio: {final64.venue}</Col>
                                                </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        {/*Posiciones*/}
                        <div className="container-positions" style={{ display: 'none' }}>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <Card.Title id="titulo"><h1>Posiciones</h1></Card.Title>
                                                    <Row>
                                                        {grupos.map(item => (
                                                            <Col>
                                                                <Table hover variant="dark">
                                                                    <thead>
                                                                        <tr>
                                                                            <th colSpan="11" className="grupo">{item.code}</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th width="10px">Pos</th>
                                                                            <th width="100px" colSpan="2">Equipo</th>
                                                                            <th>PJ</th>
                                                                            <th>PG</th>
                                                                            <th>PE</th>
                                                                            <th>PP</th>
                                                                            <th>GF</th>
                                                                            <th>GC</th>
                                                                            <th>DG</th>
                                                                            <th>Pts</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {item.teams.map(team => (
                                                                            <tr className={`pos${team.position}`}>
                                                                                <td id="pos">{team.position}</td>
                                                                                <td width="50px" valign="middle">
                                                                                    {team.alternateName === "Suiza" ? <Card.Img variant="suiza" src={team.flag} height="20%" width="20%" /> : <Card.Img variant="top" src={team.flag} />}</td>

                                                                                <td>{team.alternateName}</td>
                                                                                <td>{team.matches.length}</td>
                                                                                <td>{team.wins}</td>
                                                                                <td>{team.draws}</td>
                                                                                <td>{team.losses}</td>
                                                                                <td>{team.goalsScored}</td>
                                                                                <td>{team.goalsConceded}</td>
                                                                                <td>{team.goalsDifference}</td>
                                                                                <td>{team.points}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </Table>
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        {/*Grupos*/}
                        <div className="container-grupos" style={{ display: 'none' }}>
                            <Row>
                                <Nav variant="pills" defaultActiveKey="1">
                                    <Nav.Item key="1" eventKey="1" onClick={this.handleSelect(1)}>
                                        <Nav.Link eventKey="1">Grupo A</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="2" eventKey="2" onClick={this.handleSelect(2)}>
                                        <Nav.Link eventKey="2">Grupo B</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="3" eventKey="3" onClick={this.handleSelect(3)}>
                                        <Nav.Link eventKey="3">Grupo C</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="4" eventKey="4" onClick={this.handleSelect(4)}>
                                        <Nav.Link eventKey="4">Grupo D</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="5" eventKey="5" onClick={this.handleSelect(5)}>
                                        <Nav.Link eventKey="5">Grupo E</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="6" eventKey="6" onClick={this.handleSelect(6)}>
                                        <Nav.Link eventKey="6">Grupo F</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="7" eventKey="7" onClick={this.handleSelect(7)}>
                                        <Nav.Link eventKey="7">Grupo G</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="8" eventKey="8" onClick={this.handleSelect(8)}>
                                        <Nav.Link eventKey="8">Grupo H</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Row>
                            {/*Grupo A */}
                            <Row id="grupoA">
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    {/*Tabla General*/}
                                                    <Row>
                                                        <Col>
                                                            {grupoA.map(item => (
                                                                <Table hover variant="dark">
                                                                    <thead>
                                                                        <tr>
                                                                            <th colSpan="11" className="grupo">Tabla General</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th width="10px">Pos</th>
                                                                            <th width="100px" colSpan="2">Equipo</th>
                                                                            <th>PJ</th>
                                                                            <th>PG</th>
                                                                            <th>PE</th>
                                                                            <th>PP</th>
                                                                            <th>GF</th>
                                                                            <th>GC</th>
                                                                            <th>DG</th>
                                                                            <th>Pts</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {item.teams.map(team => (
                                                                            <tr className={`pos${team.position}`}>
                                                                                <td id="pos">{team.position}</td>
                                                                                <td width="50px" valign="middle">
                                                                                    {team.alternateName === "Suiza" ? <Card.Img variant="suiza" src={team.flag} height="20%" width="20%" /> : <Card.Img variant="top" src={team.flag
                                                                                    } />}</td>
                                                                                <td>{team.alternateName}</td>
                                                                                <td>{team.matches.length}</td>
                                                                                <td>{team.wins}</td>
                                                                                <td>{team.draws}</td>
                                                                                <td>{team.losses}</td>
                                                                                <td>{team.goalsScored}</td>
                                                                                <td>{team.goalsConceded}</td>
                                                                                <td>{team.goalsDifference}</td>
                                                                                <td>{team.points}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </Table>
                                                            ))}
                                                        </Col>
                                                    </Row>

                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                    <h2>Partidos</h2>
                                    <Card>
                                        <Card.Body>
                                            {/*Partidos Grupo A*/}
                                            <Row>
                                                <Col>
                                                    <Table className="table indicacion">
                                                        <thead>
                                                            <tr>
                                                                <th width="20%">Local</th>

                                                                <th width="10%">VS</th>

                                                                <th width="20%">Visitante</th>

                                                                <th width="30%" className="estadio">Estadio</th>
                                                                <th width="15%">Fecha</th>
                                                            </tr>
                                                        </thead>
                                                    </Table>
                                                    {partidosA.map(item => (
                                                        <Table className="table">
                                                            <thead>
                                                                <tr key={item.id} valign="middle">
                                                                    <td width="5%" valign="middle"><Card.Img variant="top" src={item.homeTeam.flag} /></td>
                                                                    <td width="15%" valign="middle">{item.homeTeam.goals > item.awayTeam.goals ? <span className="winner">{item.homeTeam.name}</span> : item.homeTeam.name}</td>

                                                                    <td width="4%" className="gol gol-gh"><div className="circle">{item.homeTeam.goals}</div></td>
                                                                    <td width="2%" valign="middle"><div className="romboide"></div></td>
                                                                    <td width="4%" className="gol gol-ga"><div className="circle">{item.awayTeam.goals}</div></td>

                                                                    <td width="15%" valign="middle">{item.homeTeam.goals < item.awayTeam.goals ? <span className="winner">{item.awayTeam.name}</span> : item.awayTeam.name}</td>
                                                                    <td width="5%" valign="middle">
                                                                        <Card.Img variant="top" src={item.awayTeam.flag} /></td>

                                                                    <td width="30%">{item.venue}</td>
                                                                    <td width="15%">{moment(item.date).format('DD-MM-YY HH:mm')}</td>
                                                                </tr>
                                                            </thead>
                                                        </Table>
                                                    ))}
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            {/*Grupo B */}
                            <Row id="grupoB" style={{ display: 'none' }}>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    {/*Tabla General*/}
                                                    <Row>
                                                        <Col>
                                                            {grupoB.map(item => (
                                                                <Table hover variant="dark">
                                                                    <thead>
                                                                        <tr>
                                                                            <th colSpan="11" className="grupo">Tabla General</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th width="10px">Pos</th>
                                                                            <th width="100px" colSpan="2">Equipo</th>
                                                                            <th>PJ</th>
                                                                            <th>PG</th>
                                                                            <th>PE</th>
                                                                            <th>PP</th>
                                                                            <th>GF</th>
                                                                            <th>GC</th>
                                                                            <th>DG</th>
                                                                            <th>Pts</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {item.teams.map(team => (
                                                                            <tr className={`pos${team.position}`}>
                                                                                <td id="pos">{team.position}</td>
                                                                                <td width="50px" valign="middle">
                                                                                    {team.alternateName === "Suiza" ? <Card.Img variant="suiza" src={team.flag} height="20%" width="20%" /> : <Card.Img variant="top" src={team.flag} />}</td>
                                                                                <td>{team.alternateName}</td>
                                                                                <td>{team.matches.length}</td>
                                                                                <td>{team.wins}</td>
                                                                                <td>{team.draws}</td>
                                                                                <td>{team.losses}</td>
                                                                                <td>{team.goalsScored}</td>
                                                                                <td>{team.goalsConceded}</td>
                                                                                <td>{team.goalsDifference}</td>
                                                                                <td>{team.points}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </Table>
                                                            ))}
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                    <h2>Partidos</h2>
                                    <Card>
                                        <Card.Body>
                                            {/*Partidos Grupo B*/}
                                            <Row>
                                                <Col>
                                                    <Table className="table indicacion">
                                                        <thead>
                                                            <tr>
                                                                <th width="20%">Local</th>

                                                                <th width="10%">VS</th>

                                                                <th width="20%">Visitante</th>

                                                                <th width="30%" className="estadio">Estadio</th>
                                                                <th width="15%">Fecha</th>
                                                            </tr>
                                                        </thead>
                                                    </Table>
                                                    {partidosB.map(item => (
                                                        <Table className="table">
                                                            <thead>
                                                                <tr key={item.id} valign="middle">
                                                                    <td width="5%" valign="middle"><Card.Img variant="top" src={item.homeTeam.flag} /></td>
                                                                    <td width="15%" valign="middle">{item.homeTeam.goals > item.awayTeam.goals ? <span className="winner">{item.homeTeam.name}</span> : item.homeTeam.name}</td>

                                                                    <td width="4%" className="gol gol-gh"><div className="circle">{item.homeTeam.goals}</div></td>
                                                                    <td width="2%" valign="middle"><div className="romboide"></div></td>
                                                                    <td width="4%" className="gol gol-ga"><div className="circle">{item.awayTeam.goals}</div></td>

                                                                    <td width="15%" valign="middle">{item.homeTeam.goals < item.awayTeam.goals ? <span className="winner">{item.awayTeam.name}</span> : item.awayTeam.name}</td>
                                                                    <td width="5%" valign="middle">
                                                                        <Card.Img variant="top" src={item.awayTeam.flag} /></td>

                                                                    <td width="30%">{item.venue}</td>
                                                                    <td width="15%">{moment(item.date).format('DD-MM-YY HH:mm')}</td>
                                                                </tr>
                                                            </thead>
                                                        </Table>
                                                    ))}
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <footer id="footer">
                        <p>World Cup 2022</p>
                        <p>Información proporcionada desde <a href="https://github.com/liverday/world-cup-api">Api World Cup 2022 </a></p>
                    </footer>
                </div >
            );
        }
    }
    handleClick(i) {
        // eslint-disable-next-line default-case
        switch (i) {
            case 1:
                return function () {
                    document.querySelector('.container-matches').style.display = 'block';
                    document.querySelector('.container-positions').style.display = 'none';
                    document.querySelector('.container-grupos').style.display = 'none';
                }
            case 2:
                return function () {
                    document.querySelector('.container-matches').style.display = 'none';
                    document.querySelector('.container-positions').style.display = 'block';
                    document.querySelector('.container-grupos').style.display = 'none';
                }
            case 3:
                return function () {
                    document.querySelector('.container-matches').style.display = 'none';
                    document.querySelector('.container-positions').style.display = 'none';
                    document.querySelector('.container-grupos').style.display = 'block';
                }
        }
    }
    handleClick2(i) {
        // eslint-disable-next-line default-case
        switch (i) {
            case 1:
                return function () {
                    document.querySelector('#grupos').style.display = 'block';
                    document.querySelector('#octavos').style.display = 'none';
                    document.querySelector('#cuartos').style.display = 'none';
                    document.querySelector('#semis').style.display = 'none';
                    document.querySelector('#tercer').style.display = 'none';
                    document.querySelector('#final').style.display = 'none';
                }
            case 2:
                return function () {
                    document.querySelector('#grupos').style.display = 'none';
                    document.querySelector('#octavos').style.display = 'block';
                    document.querySelector('#cuartos').style.display = 'none';
                    document.querySelector('#semis').style.display = 'none';
                    document.querySelector('#tercer').style.display = 'none';
                    document.querySelector('#final').style.display = 'none';
                }
            case 3:
                return function () {
                    document.querySelector('#grupos').style.display = 'none';
                    document.querySelector('#octavos').style.display = 'none';
                    document.querySelector('#cuartos').style.display = 'block';
                    document.querySelector('#semis').style.display = 'none';
                    document.querySelector('#tercer').style.display = 'none';
                    document.querySelector('#final').style.display = 'none';
                }
            case 4:
                return function () {
                    document.querySelector('#grupos').style.display = 'none';
                    document.querySelector('#octavos').style.display = 'none';
                    document.querySelector('#cuartos').style.display = 'none';
                    document.querySelector('#semis').style.display = 'block';
                    document.querySelector('#tercer').style.display = 'none';
                    document.querySelector('#final').style.display = 'none';
                }
            case 5:
                return function () {
                    document.querySelector('#grupos').style.display = 'none';
                    document.querySelector('#octavos').style.display = 'none';
                    document.querySelector('#cuartos').style.display = 'none';
                    document.querySelector('#semis').style.display = 'none';
                    document.querySelector('#tercer').style.display = 'block';
                    document.querySelector('#final').style.display = 'none';
                }
            case 6:
                return function () {
                    document.querySelector('#grupos').style.display = 'none';
                    document.querySelector('#octavos').style.display = 'none';
                    document.querySelector('#cuartos').style.display = 'none';
                    document.querySelector('#semis').style.display = 'none';
                    document.querySelector('#tercer').style.display = 'none';
                    document.querySelector('#final').style.display = 'block';
                }

        }
    }
    handleSelect(i) {
        // eslint-disable-next-line default-case
        switch (i) {
            case 1:
                return function () {
                    document.querySelector('#grupoA').style.display = 'block';
                    document.querySelector('#grupoB').style.display = 'none';
                    document.querySelector('#C').style.display = 'none';
                    document.querySelector('#D').style.display = 'none';
                    document.querySelector('#E').style.display = 'none';
                    document.querySelector('#F').style.display = 'none';
                    document.querySelector('#G').style.display = 'none';
                    document.querySelector('#H').style.display = 'none';
                }
            case 2:
                return function () {
                    document.querySelector('#grupoA').style.display = 'none';
                    document.querySelector('#grupoB').style.display = 'block';
                    document.querySelector('#C').style.display = 'none';
                    document.querySelector('#D').style.display = 'none';
                    document.querySelector('#E').style.display = 'none';
                    document.querySelector('#F').style.display = 'none';
                    document.querySelector('#G').style.display = 'none';
                    document.querySelector('#H').style.display = 'none';
                }
            case 3:
                return function () {
                    document.querySelector('#grupoA').style.display = 'none';
                    document.querySelector('#grupoB').style.display = 'none';
                    document.querySelector('#C').style.display = 'block';
                    document.querySelector('#D').style.display = 'none';
                    document.querySelector('#E').style.display = 'none';
                    document.querySelector('#F').style.display = 'none';
                    document.querySelector('#G').style.display = 'none';
                    document.querySelector('#H').style.display = 'none';
                }
            case 4:
                return function () {
                    document.querySelector('#grupoA').style.display = 'none';
                    document.querySelector('#grupoB').style.display = 'none';
                    document.querySelector('#C').style.display = 'none';
                    document.querySelector('#D').style.display = 'block';
                    document.querySelector('#E').style.display = 'none';
                    document.querySelector('#F').style.display = 'none';
                    document.querySelector('#G').style.display = 'none';
                    document.querySelector('#H').style.display = 'none';
                }
            case 5:
                return function () {
                    document.querySelector('#grupoA').style.display = 'none';
                    document.querySelector('#grupoB').style.display = 'none';
                    document.querySelector('#C').style.display = 'none';
                    document.querySelector('#D').style.display = 'none';
                    document.querySelector('#E').style.display = 'block';
                    document.querySelector('#F').style.display = 'none';
                    document.querySelector('#G').style.display = 'none';
                    document.querySelector('#H').style.display = 'none';
                }
            case 6:
                return function () {
                    document.querySelector('#grupoA').style.display = 'none';
                    document.querySelector('#grupoB').style.display = 'none';
                    document.querySelector('#C').style.display = 'none';
                    document.querySelector('#D').style.display = 'none';
                    document.querySelector('#E').style.display = 'none';
                    document.querySelector('#F').style.display = 'block';
                    document.querySelector('#G').style.display = 'none';
                    document.querySelector('#H').style.display = 'none';
                }
            case 7:
                return function () {
                    document.querySelector('#grupoA').style.display = 'none';
                    document.querySelector('#grupoB').style.display = 'none';
                    document.querySelector('#C').style.display = 'none';
                    document.querySelector('#D').style.display = 'none';
                    document.querySelector('#E').style.display = 'none';
                    document.querySelector('#F').style.display = 'none';
                    document.querySelector('#G').style.display = 'block';
                    document.querySelector('#H').style.display = 'none';
                }
            case 8:
                return function () {
                    document.querySelector('#grupoA').style.display = 'none';
                    document.querySelector('#grupoB').style.display = 'none';
                    document.querySelector('#C').style.display = 'none';
                    document.querySelector('#D').style.display = 'none';
                    document.querySelector('#E').style.display = 'none';
                    document.querySelector('#F').style.display = 'none';
                    document.querySelector('#G').style.display = 'none';
                    document.querySelector('#H').style.display = 'block';
                }
        }
    }
}

export default App;