import { Button } from "@mui/material";
import styled from "styled-components";

export const NotfoundWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NotFoundCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const NotFoundImg = styled.img`
  width: 50%;
  margin-bottom: 30px;
  max-width: 500px;
`

export const GoButton = styled(Button)`
  width: 100%;
  border-radius: 4px !important;
  background-color: #6200EE !important;
  color: #fff !important;
  padding: 8px 25px !important;
  font-size: 14px !important;
  font-weight: 500 !important;
`

export const ReloadButton = styled(Button)`
background-color: transparent !important;
  width: 100%;
  border-radius: 4px !important;
  border: 1px solid #6200EE !important;
  color: #6200EE !important;
  padding: 8px 25px !important;
  font-size: 14px !important;
  font-weight: 500 !important;
`