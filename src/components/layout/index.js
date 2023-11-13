import { Container } from "@mui/material";
import {
  LayoutWrap,
  LeftSide,
  NavSerach,
  Navbar,
  NavbarWrap,
  NofidyIcon,
  SerachForm,
} from "./layout.s";
import Logo from "../../assets/logo.png";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import AvataraImg from "../../assets/avatar.jpg";
import Search from "antd/es/input/Search";

export const Layout = ({ children }) => {
  return (
    <LayoutWrap>
      <Navbar>
        <Container>
          <NavbarWrap>
            <LeftSide>
              <img src={Logo} alt="logo" width={150} />
              <form>
                <Search allowClear placeholder="Search data..." />
              </form>
            </LeftSide>
            <Space align="center" size={"middle"}>
              <NofidyIcon />
              <Avatar src={AvataraImg} />
            </Space>
          </NavbarWrap>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </LayoutWrap>
  );
};
