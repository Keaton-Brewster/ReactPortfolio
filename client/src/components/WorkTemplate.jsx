import { useContext } from 'react';
import { Context } from '../utils/GlobalState';
import { ButtonToolbar, Button, Icon } from 'rsuite'

function WorkTemplate({ work }) {
    const [store, dispatch] = useContext(Context);

    const { redirectToApp, redirectToGithub, description } = work;
    
    return (
        <>
            <h5>{description}</h5>
            <div className="card-body d-flex ">
                <div className="text-center">
                    <ButtonToolbar className="mt-1">
                        <Button className="btn btn-primary" href={redirectToApp} target="blank">
                            View Site <Icon icon="globe" />
                        </Button>
                        <Button className="btn btn-primary" href={redirectToGithub} target="blank">
                            View Code <Icon icon="github" />
                        </Button>
                    </ButtonToolbar>
                </div>
            </div>
        </>
    )
}

export default WorkTemplate;