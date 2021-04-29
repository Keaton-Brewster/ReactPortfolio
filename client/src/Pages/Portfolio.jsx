import { Grid, Row, Col, PanelGroup, Panel } from 'rsuite';
import WorkTemplate from '../components/WorkTemplate'
import Works from '../utils/works';


function Portfolio() {
    return (
        <Grid>
            <Row>
                <Col className="justify-center" xs={24} sm={20} lg={16}>
                    <PanelGroup accordion defaultActiveKey={0}>
                        {Works.map((work, i) => {
                            return (
                                <Panel header={work.name} eventKey={i} key={i}>
                                    <WorkTemplate work={work} />
                                </Panel>
                            )
                        })}
                    </PanelGroup>
                </Col>
            </Row>
        </Grid>
    )
}

export default Portfolio;