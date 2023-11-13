import React from "react";
import {
  AuthCard,
  AuthForm,
  AuthInputLable,
  AuthSubmitBtn,
  AuthTitle,
  FormItem,
  Seporator,
  SignUpWrap,
  SocialButton,
} from "./sing-up.s";
import { FacebookIcon, GoogleIcon } from "../../../assets";
import { Input, Spin, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup"
import { useFormik } from "formik";
import { isErrorStatus } from "../../../utils";
import {useSignUpMutation} from "../../../store/services"
import { useDispatch } from "react-redux";
import { setNotification } from "../../../store/slice/appSlice";
import { setUser } from "../../../store/slice/authSlice";

const validationScheme = Yup.object({
  name: Yup.string().required("Iltimos malumot kiring"),
  email: Yup.string().required("Iltimos malumot kiring"),
  key: Yup.string().required("Iltimos malumot kiring"),
  secret: Yup.string().required("Iltimos malumot kiring"),
})

export function SignUp(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signUp, {isLoading}] = useSignUpMutation()
  const formik = useFormik({
    validationSchema: validationScheme,
    initialValues: {name: "", email: "", key: "", secret: ""},
    onSubmit: (values) => {
      console.log("success", values)
      signUp(values)
      .unwrap()
      .then((res) => {
        dispatch(setUser(res.data))
        navigate("/")
        }).catch(err => {
          console.log(err);
          if(err?.data?.message) 
            dispatch(setNotification({text: err?.data?.message, type: "error"}))
          console.log("error", err)
        })
    }
  })

  return (
    <SignUpWrap>
      <AuthCard>
        <AuthTitle>Sing Up</AuthTitle>
        <div>
          <SocialButton variant="outlined">
            <GoogleIcon /> Continue with Google
          </SocialButton>
          <SocialButton variant="outlined">
            <FacebookIcon /> Continue with Facebook
          </SocialButton>
        </div>
        <Seporator>Or</Seporator>
        <AuthForm onSubmit={formik.handleSubmit}>
          <FormItem>
            <AuthInputLable error={isErrorStatus(formik, "name")}>Your name</AuthInputLable>
            <Input 
              size="large" 
              value={formik.values["name"]} 
              name="name" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              status={isErrorStatus(formik, "name") ? "error":""} 
              placeholder="Your name"
            />
          </FormItem>
          <FormItem>
            <AuthInputLable error={isErrorStatus(formik, "email")}>Your Email</AuthInputLable>
            <Input 
              size="large" 
              value={formik.values["email"]} 
              name="email" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              status={isErrorStatus(formik, "email") ? "error":""} 
              placeholder="Your email"
            />
          </FormItem>
          <FormItem>
          <AuthInputLable error={isErrorStatus(formik, "key")}>Your Key</AuthInputLable>
            <Input 
              size="large" 
              value={formik.values["key"]} 
              name="key" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              status={isErrorStatus(formik, "key") ? "error":""} 
              placeholder="Your key"
            />
          </FormItem>
          <FormItem>
          <AuthInputLable error={isErrorStatus(formik, "secret")}>Your secret</AuthInputLable>
            <Input 
              size="large" 
              value={formik.values["secret"]} 
              name="secret" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              status={isErrorStatus(formik, "secret") ? "error":""} 
              placeholder="Your secret"
            />
          </FormItem>
          <AuthSubmitBtn type="submit" fullWidth size="large" disabled={isLoading}>
            {isLoading ? <Spin />: "Submit"}
          </AuthSubmitBtn>
          <Typography style={{ textAlign: "center" }}>
            Already signed up? <Link to="/sign-in">Go to sign in.</Link>
          </Typography>
        </AuthForm>
      </AuthCard>
    </SignUpWrap>
  );
}
