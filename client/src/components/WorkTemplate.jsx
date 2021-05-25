import { FlexboxGrid, Col, ButtonToolbar, Button, Icon } from "rsuite";
const { Item } = FlexboxGrid;

function WorkTemplate({ work }) {
  return (
    <>
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
}

export default WorkTemplate;
