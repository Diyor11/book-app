import { Button, Divider } from "@mui/material";
import styled from "styled-components";

export const SignUpWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

export const AuthCard = styled.div`
  display: flex;
  min-width: 430px;
  padding: 48px 28px;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--foundation-white-white-50, #fefefe);
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 6px;
`

export const AuthTitle = styled.h3`
  color: var(--foundation-grey-grey-900, #151515);
  font-family: Mulish;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  flex-direction: column;

`;

export const SocialButton = styled(Button)`
  width: 100%;
  border-radius: 4px !important;
  border: 1px solid #151515 !important;
  color: #151515 !important;
  gap: 16px;
  padding: 10px 24px !important;
  font-family: Mulish;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 500 !important;
  line-height: normal;
  margin-bottom: 24px !important;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Seporator = styled(Divider)`
  &::after, &::before{
    border-color: #24272C !important;
  }
  width: 100%;
`

export const AuthForm = styled.form`
  width: 100%;
`

export const AuthInputLable = styled.h3`
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

export const AuthSubmitBtn = styled(Button)`
  background-color: #6200EE !important;
  color: #fff !important;
  margin-bottom: 16px !important;

  opacity: ${({disabled}) => disabled ? 0.7:1};
  cursor: ${({disabled}) => disabled ? "not-allowed":"pointer"};
`
