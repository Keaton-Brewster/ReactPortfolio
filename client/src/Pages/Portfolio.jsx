import { useContext } from 'react';
import { Context } from '../utils/GlobalState';
import { PanelGroup, Panel, Container, Sidebar, Content, Icon } from 'rsuite';
import WorkTemplate from '../components/WorkTemplate'
import Works from '../utils/works';

function Portfolio() {
    const [store, dispatch] = useContext(Context);


    // src for image has to be %PUBLIC_URL%/ plus whatever variable folder/filename the images are saved into


    return (

        <Container>
            <Sidebar>
                <Panel>
                    <img src={store.workImg} alt="Screeenshot of displayed portfolio work"/>
                    <Icon icon="copyright" />KB
                </Panel>
            </Sidebar>
            <Content>
                <PanelGroup accordion defaultActiveKey={0}>
                    {Works.map((work, i) => {
                        return (
                            <Panel onclick={() => dispatch({type: "change work image", payload: work.img})} header={<h3>{work.name}</h3>} eventKey={i} key={i}>
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