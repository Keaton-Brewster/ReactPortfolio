import { Nav } from 'rsuite';

function Links() {
    return (
        <>
            <Nav.Item href="https://www.linkedin.com/in/keatonbrewster/" className="hvr-pulse fa" target="blank">
                <i className="fab fa-linkedin-in"></i>
            </Nav.Item>
            <Nav.Item href="https://github.com/Keaton-Brewster" className="hvr-pulse fa" target="blank">
                <i className="fab fa-github"></i>
            </Nav.Item>
            <Nav.Item href="https://twitter.com/KeatonBrewster" className="hvr-pulse fa" target="blank">
                <i className="fab fa-twitter"></i>
            </Nav.Item>
        </>
    )
}

export default Links;