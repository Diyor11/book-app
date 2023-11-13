import { Button } from "@mui/material";
import styled from "styled-components";

export const ModalWrap = styled.div`
  width: 100%;
`

export const ModalTitle = styled.h4``


export const ModalForm = styled.form`
  width: 100%;
  margin-top: 30px;
`

export const ModalInputLable = styled.h3`
  color: ${({error}) => error ? "red" : "#151515"};
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
  margin-bottom: 8px;
`

export const FormItem = styled.div`
  margin-bottom: 24px;
`

export const SubmitButton = styled(Button)`
  width: 100%;
  background-color: #6200EE !important;
  color: #fff !important;
  padding: 8px 25px !important;
  font-size: 14px !important;
  font-weight: 500 !important;
`

export const CencelButton = styled(Button)`
  background-color: transparent !important;
  width: 100%;
  border: 1px solid #6200EE !important;
  color: #6200EE !important;
  padding: 8px 25px !important;
  font-size: 14px !important;
  font-weight: 500 !important;
`

export const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`