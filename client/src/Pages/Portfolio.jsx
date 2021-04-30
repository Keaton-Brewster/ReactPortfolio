import React from 'react';
import { Grid, Row, Col, PanelGroup, Panel, Container, Sidebar, Content } from 'rsuite';
import WorkTemplate from '../components/WorkTemplate'
import Works from '../utils/works';

function Portfolio() {
    return (

        <Container>
            <Sidebar>

            </Sidebar>
            <Content>
                <PanelGroup accordion defaultActiveKey={0}>
                    {Works.map((work, i) => {
                        return (
                            <Panel header={work.name} eventKey={i} key={i}>
                                <WorkTemplate work={work} />
                            </Panel>
                        )
                    })}
                </PanelGroup>
            </Content>
        </Container>
    )
}

export default Portfolio;