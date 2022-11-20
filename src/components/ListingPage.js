import React, {useState} from "react";
import { Collapse, Row, Col, Button, Card, Table, Tab, Tabs } from 'react-bootstrap';

const normal = {
    // background: 'purple',
    fontWeight : 'bold'
}

const hoover = {color: 'blue'}

function ListingPageComponent({ dataList, noData }) {
    const [hover, setHover] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [getId, setGetId] = useState("");

  return (
    
    <div>
        {noData ? <div className="text-center"> No Data Anymore... Wait will back to first page </div> : 
            <div style={{ overflowY: "auto" }}> 
                <Row xs={1} md={2} className="g-4">
                    {dataList.map((row, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src={row.image !== undefined ? row.image.url : ""} style={{width : "100%", maxHeight: 300}}/>
                                <Card.Body>
                                <Card.Title 
                                    style={{...normal,...(hover ? hoover : null), cursor : "default", }}
                                    onMouseEnter={()=>{setHover(true)}}
                                    onMouseLeave={()=>{setHover(false)}}
                                >{row.name}</Card.Title>
                                <Card.Text>
                                    {row.description}
                                </Card.Text>
                                <div style={{display : "flex", justifyContent: "right"}}>
                                    <Button
                                        aria-controls="example-collapse-text"
                                        onClick={() => {
                                            setActiveIndex(activeIndex === idx ? null : idx);
                                            setGetId(row.id)
                                        }}
                                        data-target="#collapseExample"
                                        aria-expanded="false"
                                    >
                                        Detail Cat Click Here
                                    </Button>
                                </div>
                                    {row.id === getId ? 
                                        <div>
                                            <Collapse in={activeIndex === idx} dimension="width">
                                            <div id="example-collapse-text">
                                                <Card body style={{ marginTop : 10 }}>
                                                    <Tabs
                                                        defaultActiveKey="profile"
                                                        id="justify-tab-example"
                                                        className="mb-3"
                                                        justify
                                                    >
                                                        <Tab eventKey="profile" title="Profile">
                                                        <Table striped bordered hover size="sm" responsive>
                                                            <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Profile</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>Weight</td>
                                                                <td>imperial : {row.weight.imperial} kg, metric : {row.weight.metric} kg</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Temprament</td>
                                                                <td>{row.temperament}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Origin</td>
                                                                <td>{row.origin}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Country Code</td>
                                                                <td>{row.country_code}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Life Span</td>
                                                                <td>{row.life_span} Years</td>
                                                            </tr>
                                                            </tbody>
                                                        </Table>
                                                        </Tab>
                                                        <Tab eventKey="status" title="Status">
                                                        <Table striped bordered hover size="sm" responsive>
                                                            <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Lavel</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>Adaptabillity</td>
                                                                <td>{row.adaptability}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Affection Level</td>
                                                                <td>{row.affection_level}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Child Friendly</td>
                                                                <td>{row.child_friendly}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dog Friendly</td>
                                                                <td>{row.dog_friendly}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Energy Level</td>
                                                                <td>{row.energy_level}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Grooming</td>
                                                                <td>{row.grooming}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Health Issues</td>
                                                                <td>{row.health_issues}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hairless</td>
                                                                <td>{row.hairless}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Indoor</td>
                                                                <td>{row.indoor}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Intelligence</td>
                                                                <td>{row.intelligence}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Lap</td>
                                                                <td>{row.lap}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Natural</td>
                                                                <td>{row.natural}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Social Needs</td>
                                                                <td>{row.social_needs}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Strangers Friendly</td>
                                                                <td>{row.stranger_friendly}</td>
                                                            </tr>
                                                            </tbody>
                                                        </Table>
                                                        </Tab>
                                                        <Tab eventKey="link" title="Link">
                                                        <Table striped bordered hover size="sm" responsive>
                                                            <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Url</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>CFA</td>
                                                                <td>{row.cfa_url}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Vet Street</td>
                                                                <td>{row.vetstreet_url}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Vca Hospitals</td>
                                                                <td>{row.vcahospitals_url}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Wikipedia</td>
                                                                <td>{row.wikipedia_url}</td>
                                                            </tr>
                                                            </tbody>
                                                        </Table>
                                                        </Tab>
                                                    </Tabs>
                                                </Card>
                                            </div>
                                            </Collapse>
                                        </div>
                                    : null }
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        }
    </div>
  );
}

export default ListingPageComponent;
