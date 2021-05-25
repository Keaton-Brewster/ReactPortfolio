import { Navbar, Nav, Dropdown } from "rsuite";
import useViewport from "../utils/useViewport";
import Links from "./Links";

function NavBar({ setThisPage }) {
  const { width } = useViewport();
  const mobileBP = 480;
  const tabletBP = 992;
  const desktopBP = 1200;

  return (
    <>
      {width > desktopBP ? (
        <Navbar>
          <Navbar.Body>
            <Nav>
              <Nav.Item
                className="font-bolder"
                onSelect={() => setThisPage("home")}
              >
                Keaton Brewster
              </Nav.Item>
              <Nav.Item onSelect={() => setThisPage("about")}>About</Nav.Item>
              <Nav.Item onSelect={() => setThisPage("portfolio")}>
                Portfolio
              </Nav.Item>
              <Nav.Item onSelect={() => setThisPage("contact")}>
                Contact
              </Nav.Item>
            </Nav>
            <Nav pullRight>
              <Links />
            </Nav>
          </Navbar.Body>
        </Navbar>
      ) : width >= tabletBP ? (
        <Navbar>
          <Navbar.Body>
            <Nav>
              <Nav.Item
                className="font-bolder"
                onSelect={() => setThisPage("home")}
              >
                Keaton Brewster
              </Nav.Item>
              <Dropdown title="More">
                <Dropdown.Item onSelect={() => setThisPage("about")}>
                  About
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => setThisPage("portfolio")}>
                  Portfolio
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => setThisPage("contact")}>
                  Contact
                </Dropdown.Item>
              </Dropdown>
            </Nav>
            <Nav pullRight>
              <Links />
            </Nav>
          </Navbar.Body>
        </Navbar>
      ) : (
        <Navbar>
          <Navbar.Body>
            <Nav>
              <Nav.Item
                className="font-bolder"
                onSelect={() => setThisPage("home")}
              >
                Keaton Brewster
              </Nav.Item>
              <Dropdown placement="bottomEnd" title="More">
                <Dropdown.Item onSelect={() => setThisPage("about")}>
                  About
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => setThisPage("portfolio")}>
                  Portfolio
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => setThisPage("contact")}>
                  Contact
                </Dropdown.Item>
                <Nav pullRight>
                  <Links />
                </Nav>
              </Dropdown>
            </Nav>
          </Navbar.Body>
        </Navbar>
      )}
    </>
  );
}

export default NavBar;
