import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProps {
  createForm: () => void;
}


export const NavBar : React.FC<IProps> = ({createForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button onClick={ () => createForm()} positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
