import styled from "styled-components";
import {  BellOutlined } from "@ant-design/icons";

export const LayoutWrap = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const Navbar = styled.header`
  width: 100%;
  padding: 20px;
  margin-bottom: 40px;
`

export const NavbarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const NavSerach = styled.input`
  width: 264px;
  color: var(--foundation-white-white-50, #FEFEFE);
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
  background-color: transparent;
  padding: 8px;
  outline: none;
  border: none;
`

export const SerachForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #fff;
  padding: 0 5px;
  border-radius: 4px;
`

export const NofidyIcon = styled(BellOutlined)`
  svg{
    width: 25px;
    height: 25px;
    color: #333;
  }
`
