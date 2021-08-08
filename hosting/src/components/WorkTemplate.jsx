import { FlexboxGrid, Col, ButtonToolbar, Button, Icon } from "rsuite";
const { Item } = FlexboxGrid;

function WorkTemplate({ work }) {
  return (
    <>
      <div
        style={
          {
            // backgroundImage: `url("${process.env.PUBLIC_URL}/imgs/${work.img}"), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 1) 100%)`,
          }
        }
      >
        <FlexboxGrid justify="center" className="flex-grid">
          <Item componentClass={Col} colspan={24}>
            <h1 className="text-center mb-5">{work.name}</h1>
            <hr />
          </Item>
          <Item componentClass={Col} colspan={18} lg={16} md={18} sm={15}>
            <h5>{work.description}</h5>
          </Item>

          {/* <Item componentClass={Col} colspan={6} lg={6} md={6} sm={9}></Item> */}

          <Item componentClass={Col} colspan={24}>
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
          </Item>
        </FlexboxGrid>
      </div>
    </>
  );
}

export default WorkTemplate;
