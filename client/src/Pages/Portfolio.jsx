import { useContext } from "react";
import { Context } from "../utils/GlobalState";
import { PanelGroup, Panel, Container, Content } from "rsuite";
import WorkTemplate from "../components/WorkTemplate";
import Works from "../utils/works";

function Portfolio() {
  const [store, dispatch] = useContext(Context);

  return (
    <Container>
      <Content>
        <PanelGroup accordion defaultActiveKey={0}>
          {Works.map((work, i) => {
            return (
              <Panel
                onClick={() =>
                  dispatch({ type: "change work image", payload: work.img })
                }
                header={<h3>{work.name}</h3>}
                eventKey={i}
                key={i}
              >
                <img
                  id="workImg"
                  src={store.workImg}
                  alt="Screeenshot of displayed portfolio work"
                  className="float-right"
                />
                <WorkTemplate work={work} />
              </Panel>
            );
          })}
        </PanelGroup>
      </Content>
    </Container>
  );
}

export default Portfolio;
