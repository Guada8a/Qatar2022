/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Table, Nav, Spinner, Card, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import img from './img/Score.jpg';
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
  }
  render() {
    var { items, DatailsLoaded } = this.state;
    var { grupos, DatailsLoadedGroup } = this.apiGrupos;

    var faseGrupos = items.filter(item => item.stageName === 'First stage');
    var octavos = items.filter(item => item.stageName === 'Round of 16');
    var cuartos = items.filter(item => item.stageName === 'Quarter-final');
    var semifinal = items.filter(item => item.stageName === 'Semi-final');
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
    });
    cuartos.forEach(item => {
      // eslint-disable-next-line default-case
      switch (item.homeTeam.name) {
        case 'Netherlands':
          item.homeTeam = 'Países Bajos';
          item.homeTeam.flag = 'https://play.fifa.com/media/flags/squads/NED.png';
          break;
      }
      switch (item.awayTeam.name) {
        case 'Argentina':
          item.awayTeam = 'Argentina';
          item.awayTeam.flag = 'https://play.fifa.com/media/flags/squads/ARG.png';
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
      
      
    });
    grupos.forEach((item) => {
      // eslint-disable-next-line default-case
      switch (item.code) {
        case 'A':
          item.code = 'Grupo A';
          break;
        case 'B':
          item.code = 'Grupo B';
          break;
        case 'C':
          item.code = 'Grupo C';
          break;
        case 'D':
          item.code = 'Grupo D';
          break;
        case 'E':
          item.code = 'Grupo E';
          break;
        case 'F':
          item.code = 'Grupo F';
          break;
        case 'G':
          item.code = 'Grupo G';
          break;
        case 'H':
          item.code = 'Grupo H';
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
      console.clear();
      console.log(cuartos);
      return (
        <div className="App">
          <header className="App-header">
            <h2>
              <img className="logo" src="https://digitalhub.fifa.com/transform/3a170b69-b0b5-4d0c-bca0-85880a60ea1a/World-Cup-logo-landscape-on-dark?io=transform:fill&quality=75" height="10%" width="10%" />
            </h2>
            <Nav variant="pills" defaultActiveKey="1">
              <Nav.Item key="1" eventKey="1" onClick={this.handleClick(1)}>
                <Nav.Link eventKey="1">Partidos</Nav.Link>
              </Nav.Item>
              <Nav.Item key="2" eventKey="2" onClick={this.handleClick(2)}>
                <Nav.Link eventKey="2">Tablas</Nav.Link>
              </Nav.Item>
            </Nav>
          </header>

          <div className="container">
            <div className="container-matches">
              <Row>
                <Nav variant="pills" defaultActiveKey="1">
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
                    <Nav.Link id="menu" eventKey="5">Final</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>
              {/*Grupos*/}
              <Row id="grupos">
                <Col>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col>
                          <Table className="table indicacion" variant="dark">
                            <thead>
                              <tr>
                                <th width="5%">Grupo</th>

                                <th width="20%">Local</th>

                                <th width="10%">VS</th>

                                <th width="20%">Visitante</th>

                                <th width="25%" className="estadio">Estadio</th>
                                <th width="15%">Fecha</th>
                                <th width="5%">Estado</th>
                              </tr>
                            </thead>
                          </Table>
                          {faseGrupos.map(item => (

                            <Table className="table">
                              <thead>
                                <tr key={item.id}>
                                  <th width="5%" id="grupo" align="center" valign="middle">{item.homeTeam.grupo}</th>

                                  <td width="5%" valign="middle">
                                    {item.homeTeam.name === "Suiza" ? <Card.Img variant="suiza" src={item.homeTeam.flag} height="20%" width="20%" /> : <Card.Img variant="top" src={item.homeTeam.flag} />}</td>

                                  <td width="15%" valign="middle">{item.homeTeam.goals > item.awayTeam.goals ? <span className="winner">{item.homeTeam.name}</span> : item.homeTeam.name}</td>

                                  <td width="4%" className="gol gol-gh">{item.homeTeam.goals}</td>
                                  <td width="2%" valign="middle"><div className="rombo"></div></td>
                                  <td witdh="4%" className="gol gol-ga">{item.awayTeam.goals}</td>

                                  <td width="15%" valign="middle">{item.homeTeam.goals < item.awayTeam.goals ? <span className="winner">{item.awayTeam.name}</span> : item.awayTeam.name}</td>

                                  <td width="5%" valign="middle">
                                    {item.awayTeam.name === "Suiza" ? <Card.Img variant="suiza" src={item.awayTeam.flag} height="20%" width="20%" /> : <Card.Img variant="top" src={item.awayTeam.flag} />}</td>

                                  <td width="25%">{item.venue}</td>
                                  <td width="15%">{item.date}</td>
                                  <td width="5%" align="center" valign="middle"><div className={item.status}></div></td>
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
              {/*Octavos*/}
              <Row id="octavos" style={{ display: 'none' }}>
                <Col>
                  <Card>
                    <Card.Body>
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
                                <th width="5%">Estado</th>
                              </tr>
                            </thead>
                          </Table>
                          {octavos.map(item => (
                            <Table className="table">
                              <thead>
                                <tr key={item.id}>
                                  <td width="5%"><Card.Img variant="top" src={item.homeTeam.flag} /></td>
                                  <td width="15%" valign="middle">{item.homeTeam.goals > item.awayTeam.goals ? <span className="winner">{item.homeTeam.name}</span> : item.homeTeam.name}</td>

                                  <td width="4%" className="gol gol-gh">{item.homeTeam.goals}</td>
                                  <td width="2%" valign="middle"><div className="rombo"></div></td>
                                  <td width="4%" className="gol gol-ga">{item.awayTeam.goals}</td>

                                  <td width="15%" valign="middle">{item.homeTeam.goals < item.awayTeam.goals ? <span className="winner">{item.awayTeam.name}</span> : item.awayTeam.name}</td>
                                  <td width="5%" valign="middle">
                                    {item.awayTeam.name === "Suiza" ? <Card.Img variant="suiza" src={item.awayTeam.flag} height="20%" width="20%" /> : <Card.Img variant="top" src={item.awayTeam.flag} />}</td>

                                  <td width="30%">{item.venue}</td>
                                  <td width="15%">{item.date}</td>
                                  <td width="5%" align="center" valign="middle"><div className={item.status}></div></td>
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
              {/*Cuartos*/}
              <Row id="cuartos" style={{ display: 'none' }}>
                <Col>
                  <Card>
                    <Card.Body>
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
                                <th width="5%">Estado</th>
                              </tr>
                            </thead>
                          </Table>
                          {cuartos.map(item => (
                            <Table className="table">
                              <thead>
                                <tr key={item.id}>
                                  <td width="5%"><Card.Img variant="top" src={item.homeTeam.flag} /></td>
                                  <td width="15%" valign="middle">{item.homeTeam.goals > item.awayTeam.goals ? <span className="winner">{item.homeTeam.name}</span> : item.homeTeam.name}</td>

                                  <td width="4%" className="gol gol-gh">{item.homeTeam.goals}</td>
                                  <td width="2%" valign="middle"><div className="rombo"></div></td>
                                  <td width="4%" className="gol gol-ga">{item.awayTeam.goals}</td>

                                  <td width="15%" valign="middle">{item.homeTeam.goals < item.awayTeam.goals ? <span className="winner">{item.awayTeam.name}</span> : item.awayTeam.name}</td>
                                  <td width="5%" valign="middle">
                                    {item.awayTeam.name === "Suiza" ? <Card.Img variant="suiza" src={item.awayTeam.flag} height="20%" width="20%" /> : <Card.Img variant="top" src={item.awayTeam.flag} />}</td>

                                  <td width="30%">{item.venue}</td>
                                  <td width="15%">{item.date}</td>
                                  <td width="5%" align="center" valign="middle"><div className={item.status}></div></td>
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
              {/*Semi*/}
              <Row id="semis" style={{ display: 'none' }}>
                <Col>
                  <Card>
                    <Card.Body>
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
                                <th width="5%">Estado</th>
                              </tr>
                            </thead>
                          </Table>
                          {semifinal.map(item => (
                            <Table className="table">
                              <thead>
                                <tr key={item.id}>
                                  <td width="5%"><Card.Img variant="top" src={item.homeTeam.flag} /></td>
                                  <td width="15%" valign="middle">{item.homeTeam.goals > item.awayTeam.goals ? <span className="winner">{item.homeTeam.name}</span> : item.homeTeam.name}</td>

                                  <td width="4%" className="gol gol-gh">{item.homeTeam.goals}</td>
                                  <td width="2%" valign="middle"><div className="rombo"></div></td>
                                  <td width="4%" className="gol gol-ga">{item.awayTeam.goals}</td>

                                  <td width="15%" valign="middle">{item.homeTeam.goals < item.awayTeam.goals ? <span className="winner">{item.awayTeam.name}</span> : item.awayTeam.name}</td>
                                  <td width="5%" valign="middle">
                                    {item.awayTeam.name === "Suiza" ? <Card.Img variant="suiza" src={item.awayTeam.flag} height="20%" width="20%" /> : <Card.Img variant="top" src={item.awayTeam.flag} />}</td>

                                  <td width="30%">{item.venue}</td>
                                  <td width="15%">{item.date}</td>
                                  <td width="5%" align="center" valign="middle"><div className={item.status}></div></td>
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
          </div>
        </div>
      );
    }
  }
  handleClick(i) {
    if (i == 1) {
      return function () {
        document.querySelector('.container-matches').style.display = 'block';
        document.querySelector('.container-positions').style.display = 'none';
      }
    }
    else {
      return function () {
        document.querySelector('.container-matches').style.display = 'none';
        document.querySelector('.container-positions').style.display = 'block';
      }
    }
  }
  handleClick2(i) {
    switch (i) {
      case 1:
        return function () {
          document.querySelector('#grupos').style.display = 'block';
          document.querySelector('#octavos').style.display = 'none';
          document.querySelector('#cuartos').style.display = 'none';
          document.querySelector('#semis').style.display = 'none';
          document.querySelector('#final').style.display = 'none';
        }
      case 2:
        return function () {
          document.querySelector('#grupos').style.display = 'none';
          document.querySelector('#octavos').style.display = 'block';
          document.querySelector('#cuartos').style.display = 'none';
          document.querySelector('#semis').style.display = 'none';
          document.querySelector('#final').style.display = 'none';
        }
      case 3:
        return function () {
          document.querySelector('#grupos').style.display = 'none';
          document.querySelector('#octavos').style.display = 'none';
          document.querySelector('#cuartos').style.display = 'block';
          document.querySelector('#semis').style.display = 'none';
          document.querySelector('#final').style.display = 'none';
        }
      case 4:
        return function () {
          document.querySelector('#grupos').style.display = 'none';
          document.querySelector('#octavos').style.display = 'none';
          document.querySelector('#cuartos').style.display = 'none';
          document.querySelector('#semis').style.display = 'block';
          document.querySelector('#final').style.display = 'none';
        }
      case 5:
        return function () {
          document.querySelector('#grupos').style.display = 'none';
          document.querySelector('#octavos').style.display = 'none';
          document.querySelector('#cuartos').style.display = 'none';
          document.querySelector('#semis').style.display = 'none';
          document.querySelector('#final').style.display = 'block';
        }

    }
  }
}

export default App;