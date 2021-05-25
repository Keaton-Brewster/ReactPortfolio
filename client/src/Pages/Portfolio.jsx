import { useContext } from "react";
import { Context } from "../utils/GlobalState";
import {
  FlexboxGrid,
  PanelGroup,
  Panel,
  Container,
  Content,
  ButtonToolbar,
  Button,
  Icon,
  Col,
} from "rsuite";
import WorkTemplate from "../components/WorkTemplate";
import Works from "../utils/works";
const { Item } = FlexboxGrid;

function Portfolio() {
  const [store, dispatch] = useContext(Context);

  console.log(Works);

  return (
    <>
      {Works.map((work, i) => {
        return (
          <>
            <h1 className="text-center">{work.title}</h1>
            <FlexboxGrid justify="center" className="flex-grid">
              <Item componentClass={Col} colspan={18} lg={16} md={18} sm={15}>
                <>
                  <h5>{work.description}</h5>
                  <div className="text-center">
                    <ButtonToolbar className="mt-1">
                      <Button
                        className="btn btn-primary"
                        href={work.redirectToApp}
                        target="blank"
                      >
                        View Site <Icon icon="globe" />
                      </Button>
                      <Button
                        className="btn btn-primary"
                        href={work.redirectToGithub}
                        target="blank"
                      >
                        View Code <Icon icon="github" />
                      </Button>
                    </ButtonToolbar>
                  </div>
                </>
              </Item>
              <Item componentClass={Col} colspan={6} lg={6} md={6} sm={9}>
                <img
                  id="workImg"
                  src={`${process.env.PUBLIC_URL}/imgs/${work.img}`}
                  alt="Screeenshot of displayed portfolio work"
                  className=""
                />
              </Item>
            </FlexboxGrid>
          </>
        );
      })}
    </>
  );
}

export default Portfolio;
