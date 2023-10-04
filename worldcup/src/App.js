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
        let tercero = tercer[0];
        let final64 = final[0];

        //Variables de mapeo
        const teamMappings = {
            'Qatar': { name: 'Catar', grupo: 'A', flag: 'https://play.fifa.com/media/flags/squads/QAT.png' },
            'Ecuador': { name: 'Ecuador', grupo: 'A', flag: 'https://play.fifa.com/media/flags/squads/ECU.png' },
            'Senegal': { name: 'Senegal', grupo: 'A', flag: 'https://play.fifa.com/media/flags/squads/SEN.png' },
            'Netherlands': { name: 'Países Bajos', grupo: 'A', flag: 'https://play.fifa.com/media/flags/squads/NED.png' },
            'England': { name: 'Inglaterra', grupo: 'B', flag: 'https://play.fifa.com/media/flags/squads/ENG.png' },
            'Iran': { name: 'Irán', grupo: 'B', flag: 'https://play.fifa.com/media/flags/squads/IRN.png' },
            'USA': { name: 'Estados Unidos', grupo: 'B', flag: 'https://play.fifa.com/media/flags/squads/USA.png' },
            'Wales': { name: 'Gales', grupo: 'B', flag: 'https://play.fifa.com/media/flags/squads/WAL.png' },
            'Argentina': { name: 'Argentina', grupo: 'C', flag: 'https://play.fifa.com/media/flags/squads/ARG.png' },
            'Mexico': { name: 'México', grupo: 'C', flag: 'https://play.fifa.com/media/flags/squads/MEX.png' },
            'Poland': { name: 'Polonia', grupo: 'C', flag: 'https://play.fifa.com/media/flags/squads/POL.png' },
            'Saudi Arabia': { name: 'Arabia Saudita', grupo: 'C', flag: 'https://play.fifa.com/media/flags/squads/KSA.png' },
            'France': { name: 'Francia', grupo: 'D', flag: 'https://play.fifa.com/media/flags/squads/FRA.png' },
            'Australia': { name: 'Australia', grupo: 'D', flag: 'https://play.fifa.com/media/flags/squads/AUS.png' },
            'Denmark': { name: 'Dinamarca', grupo: 'D', flag: 'https://play.fifa.com/media/flags/squads/DEN.png' },
            'Tunisia': { name: 'Túnez', grupo: 'D', flag: 'https://play.fifa.com/media/flags/squads/TUN.png' },
            'Spain': { name: 'España', grupo: 'E', flag: 'https://play.fifa.com/media/flags/squads/ESP.png' },
            'Costa Rica': { name: 'Costa Rica', grupo: 'E', flag: 'https://play.fifa.com/media/flags/squads/CRC.png' },
            'Germany': { name: 'Alemania', grupo: 'E', flag: 'https://play.fifa.com/media/flags/squads/GER.png' },
            'Japan': { name: 'Japón', grupo: 'E', flag: 'https://play.fifa.com/media/flags/squads/JPN.png' },
            'Belgium': { name: 'Bélgica', grupo: 'F', flag: 'https://play.fifa.com/media/flags/squads/BEL.png' },
            'Canada': { name: 'Canadá', grupo: 'F', flag: 'https://play.fifa.com/media/flags/squads/CAN.png' },
            'Morocco': { name: 'Marruecos', grupo: 'F', flag: 'https://play.fifa.com/media/flags/squads/MAR.png' },
            'Croatia': { name: 'Croacia', grupo: 'F', flag: 'https://play.fifa.com/media/flags/squads/CRO.png' },
            'Brazil': { name: 'Brasil', grupo: 'G', flag: 'https://play.fifa.com/media/flags/squads/BRA.png' },
            'Serbia': { name: 'Serbia', grupo: 'G', flag: 'https://play.fifa.com/media/flags/squads/SRB.png' },
            'Switzerland': { name: 'Suiza', grupo: 'G', flag: 'https://play.fifa.com/media/flags/squads/SUI.png' },
            'Cameroon': { name: 'Camerún', grupo: 'G', flag: 'https://play.fifa.com/media/flags/squads/CMR.png' },
            'Uruguay': { name: 'Uruguay', grupo: 'H', flag: 'https://play.fifa.com/media/flags/squads/URU.png' },
            'Portugal': { name: 'Portugal', grupo: 'H', flag: 'https://play.fifa.com/media/flags/squads/POR.png' },
            'Ghana': { name: 'Ghana', grupo: 'H', flag: 'https://play.fifa.com/media/flags/squads/GHA.png' },
            'Korea Republic': { name: 'Corea del Sur', grupo: 'H', flag: 'https://play.fifa.com/media/flags/squads/KOR.png' },
        }
        const teamMappingsAlternate = {
            'Qatar': { alternateName: 'Catar', flag: 'https://play.fifa.com/media/flags/squads/QAT.png' },
            'Ecuador': { alternateName: 'Ecuador', flag: 'https://play.fifa.com/media/flags/squads/ECU.png' },
            'Senegal': { alternateName: 'Senegal', flag: 'https://play.fifa.com/media/flags/squads/SEN.png' },
            'Netherlands': { alternateName: 'Países Bajos', flag: 'https://play.fifa.com/media/flags/squads/NED.png' },
            'England': { alternateName: 'Inglaterra', flag: 'https://play.fifa.com/media/flags/squads/ENG.png' },
            'Iran': { alternateName: 'Irán', flag: 'https://play.fifa.com/media/flags/squads/IRN.png' },
            'USA': { alternateName: 'Estados Unidos', flag: 'https://play.fifa.com/media/flags/squads/USA.png' },
            'Wales': { alternateName: 'Gales', flag: 'https://play.fifa.com/media/flags/squads/WAL.png' },
            'Argentina': { alternateName: 'Argentina', flag: 'https://play.fifa.com/media/flags/squads/ARG.png' },
            'Mexico': { alternateName: 'México', flag: 'https://play.fifa.com/media/flags/squads/MEX.png' },
            'Poland': { alternateName: 'Polonia', flag: 'https://play.fifa.com/media/flags/squads/POL.png' },
            'Saudi Arabia': { alternateName: 'Arabia Saudita', flag: 'https://play.fifa.com/media/flags/squads/KSA.png' },
            'France': { alternateName: 'Francia', flag: 'https://play.fifa.com/media/flags/squads/FRA.png' },
            'Australia': { alternateName: 'Australia', flag: 'https://play.fifa.com/media/flags/squads/AUS.png' },
            'Denmark': { alternateName: 'Dinamarca', flag: 'https://play.fifa.com/media/flags/squads/DEN.png' },
            'Tunisia': { alternateName: 'Túnez', flag: 'https://play.fifa.com/media/flags/squads/TUN.png' },
            'Spain': { alternateName: 'España', flag: 'https://play.fifa.com/media/flags/squads/ESP.png' },
            'Costa Rica': { alternateName: 'Costa Rica', flag: 'https://play.fifa.com/media/flags/squads/CRC.png' },
            'Germany': { alternateName: 'Alemania', flag: 'https://play.fifa.com/media/flags/squads/GER.png' },
            'Japan': { alternateName: 'Japón', flag: 'https://play.fifa.com/media/flags/squads/JPN.png' },
            'Belgium': { alternateName: 'Bélgica', flag: 'https://play.fifa.com/media/flags/squads/BEL.png' },
            'Canada': { alternateName: 'Canadá', flag: 'https://play.fifa.com/media/flags/squads/CAN.png' },
            'Morocco': { alternateName: 'Marruecos', flag: 'https://play.fifa.com/media/flags/squads/MAR.png' },
            'Croatia': { alternateName: 'Croacia', flag: 'https://play.fifa.com/media/flags/squads/CRO.png' },
            'Brazil': { alternateName: 'Brasil', flag: 'https://play.fifa.com/media/flags/squads/BRA.png' },
            'Serbia': { alternateName: 'Serbia', flag: 'https://play.fifa.com/media/flags/squads/SRB.png' },
            'Switzerland': { alternateName: 'Suiza', flag: 'https://play.fifa.com/media/flags/squads/SUI.png' },
            'Cameroon': { alternateName: 'Camerún', flag: 'https://play.fifa.com/media/flags/squads/CMR.png' },
            'Uruguay': { alternateName: 'Uruguay', flag: 'https://play.fifa.com/media/flags/squads/URU.png' },
            'Portugal': { alternateName: 'Portugal', flag: 'https://play.fifa.com/media/flags/squads/POR.png' },
            'Ghana': { alternateName: 'Ghana', flag: 'https://play.fifa.com/media/flags/squads/GHA.png' },
            'Korea Republic': { alternateName: 'Corea del Sur', flag: 'https://play.fifa.com/media/flags/squads/KOR.png' },
        }
        const venueMappings = {
            'Al Bayt Stadium': 'Al Bayt',
            'Al Janoub Stadium': 'Al Janoub',
            'Stadium 974': 'Estadio 974',
            'Ahmad Bin Ali Stadium': 'Áhmad Bin Ali',
            'Khalifa International Stadium': 'Estadio Internacional Jalifa',
            'Al Thumama Stadium': 'Estadio Al Zumama',
            'Lusail Stadium': 'Estadio Lusail',
            'Education City Stadium': 'Ciudad de la Educación',
        };
        function autoMappingGroup(item) {
            const groupMapping1 = groupMapping[item.code];
            if (groupMapping1) {
                item.code = groupMapping1.code;
                item.number = groupMapping1.number;
            }
        }
        const groupMapping = {
            'A': { code: 'Grupo A', number: '1' },
            'B': { code: 'Grupo B', number: '2' },
            'C': { code: 'Grupo C', number: '3' },
            'D': { code: 'Grupo D', number: '4' },
            'E': { code: 'Grupo E', number: '5' },
            'F': { code: 'Grupo F', number: '6' },
            'G': { code: 'Grupo G', number: '7' },
            'H': { code: 'Grupo H', number: '8' },
        }
        //Funcion de automapeo
        function autoMapping(item) {
            const homeTeamMapping = teamMappings[item.homeTeam.name];
            if (homeTeamMapping) {
                item.homeTeam.name = homeTeamMapping.name;
                item.homeTeam.grupo = homeTeamMapping.grupo;
                item.homeTeam.flag = homeTeamMapping.flag;
            }

            const awayTeamMapping = teamMappings[item.awayTeam.name];
            if (awayTeamMapping) {
                item.awayTeam.name = awayTeamMapping.name;
                item.awayTeam.grupo = awayTeamMapping.grupo;
                item.awayTeam.flag = awayTeamMapping.flag;
            }
            //Estadios
            item.venue = venueMappings[item.venue] || item.venue;
            //Fecha y hora formateada
            item.date = moment(item.date).format('DD-MM-YY HH:mm');
            //Finalizado
            if (item.status === 'completed')
                item.status = 'circulo-finalizado';
        }
        function autoMapping2(array, item) {
            const homeTeamMapping = teamMappings[item.homeTeam.name];
            if (homeTeamMapping) {
                item.homeTeam.name = homeTeamMapping.name;
                item.homeTeam.flag = homeTeamMapping.flag;
            }

            const awayTeamMapping = teamMappings[item.awayTeam.name];
            if (awayTeamMapping) {
                item.awayTeam.name = awayTeamMapping.name;
                item.awayTeam.flag = awayTeamMapping.flag;
            }
            //Estadios
            item.venue = venueMappings[item.venue] || item.venue;
            //Fecha y hora formateada
            item.date = new Date(item.date).toUTCString();

            array.push(item);

            return item;
        }
        //Cambio de info -- TRADUCCIONES Y REASIGNACIONES
        faseGrupos.forEach(item => {
            autoMapping(item);
        });
        octavos.forEach(item => {
            autoMapping(item);
        });
        cuartos.forEach(item => {
            autoMapping(item);
        });
        semifinal.forEach(item => {
            autoMapping(item);
        });
        tercer.forEach(item => {
            autoMapping(item);
        });
        final.forEach(item => {
            autoMapping(item);
        });
        
        //Posiciones
        grupos.forEach((item) => {
            autoMappingGroup(item);
            //Nombres
            item.teams.forEach((team) => {
                console.log(team.alternateName);
                const teamMapping = teamMappingsAlternate[team.alternateName];
                if (teamMapping) {
                    team.alternateName = teamMapping.alternateName;
                    team.flag = teamMapping.flag;
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
            return (
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
                            <Row id="octavos" className='mt-2' style={{ display: 'none' }}>
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
                            <Row id="cuartos" className='mt-2' style={{ display: 'none' }}>
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
                            <Row id="semis" className='mt-2' style={{ display: 'none' }}>
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
                            <Row id="tercer" className='mt-2' style={{ display: 'none' }}>
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
                    </div>
                    <footer id="footer">
                        <p>World Cup 2022</p>
                        <p>Información proporcionada desde <a href="https://github.com/liverday/world-cup-api">Api World Cup 2022 </a></p>
                    </footer>
                </div>
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
                }
            case 2:
                return function () {
                    document.querySelector('.container-matches').style.display = 'none';
                    document.querySelector('.container-positions').style.display = 'block';
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
}

export default App;