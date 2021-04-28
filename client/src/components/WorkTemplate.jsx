function WorkTemplate({ work }) {
    const { name, redirectToApp, redirectToGithub, descrtiption } = work;
    return (
        <>
            <div class="card workCard text-center">
                <h5>{name}</h5>
                <div class="card-body d-flex flex-column">
                    <div class="flex-row">
                        <a class="workTitle" href="#"></a>
            |
            <a class="btn btn-primary" href={redirectToApp} target="blank">
                            View Site
            </a>
            |
            <a class="btn btn-primary" href={redirectToGithub} target="blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    <br />
                    <p>{descrtiption}</p>
                </div>
            </div>
        </>
    )
}

export default WorkTemplate;