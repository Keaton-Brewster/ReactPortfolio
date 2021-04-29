import { Panel } from 'rsuite';

function WorkTemplate({ work, eventKey }) {
    const { name, redirectToApp, redirectToGithub, description } = work;
    return (
        <>
            <h5>{description}</h5>
            <div className="card-body d-flex ">
                <div className="text-center">
                    <a className="btn btn-primary" href={redirectToApp} target="blank">
                        View Site
                        </a>
                    <br />
                    <a className="btn btn-primary" href={redirectToGithub} target="blank">
                        View Code <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default WorkTemplate;