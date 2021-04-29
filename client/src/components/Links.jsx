import { Nav, Icon } from 'rsuite';

function Links() {
    return (
        <>
            <Nav.Item href="https://www.linkedin.com/in/keatonbrewster/" className="hvr-pulse fa" target="blank">
                <Icon icon='linkedin' size="2x" />
            </Nav.Item>
            <Nav.Item href="https://github.com/Keaton-Brewster" className="hvr-pulse fa" target="blank">
                <Icon icon='github' size="2x" />
            </Nav.Item>
            <Nav.Item href="https://twitter.com/KeatonBrewster" className="hvr-pulse fa" target="blank">
                <Icon icon="twitter" size="2x" />
            </Nav.Item>
        </>
    )
}

export default Links;