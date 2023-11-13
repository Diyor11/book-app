// @flow
import * as React from "react";
import {
  GoButton,
  NotFoundCard,
  NotFoundImg,
  NotfoundWrap,
  ReloadButton,
} from "./notfound.s";
import PageImg from "../../assets/page404.png";
import { Space } from "antd";
import { useNavigate } from "react-router-dom";

export const Notfound = (props) => {
  const navigate = useNavigate()
  return (
    <NotfoundWrap>
      <NotFoundCard>
        <NotFoundImg src={PageImg} alt="404" width="1000" />
        <Space size={"large"} align="center">
          <GoButton onClick={() => navigate("/")}>Go Home Page</GoButton>
          <ReloadButton
            onClick={() => (window.location.pathname = "/")}
            variant="outlined"
          >
            Reload Page
          </ReloadButton>
        </Space>
      </NotFoundCard>
    </NotfoundWrap>
  );
};
