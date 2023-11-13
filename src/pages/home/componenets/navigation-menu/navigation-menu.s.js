import { Button } from "@mui/material";
import { Input } from "antd";
import styled from "styled-components";

export const NavigationMenuWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationTitle = styled.h3`
  color: var(--foundation-white-white-50, #fefefe);
  font-family: Mulish;
  font-size: 36px;
  font-weight: 700;

  span{
    color: #6200EE;
  }
`;

export const SaveButton = styled(Button)`
  width: 100%;
  border-radius: 4px !important;
  color: #fff !important;
  gap: 16px;
  font-family: Mulish;
  font-size: 14px !important;
  font-weight: 500 !important;
  background-color: #6200EE !important;
  text-transform: capitalize !important;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const MenuInput = styled(Input)`
  height: auto;
  min-width: 300px;
`

export const MenuForm = styled.form`
  width: fit-content;
  display: flex;
  align-items: stretch;
  gap: 20px;
`