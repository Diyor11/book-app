import React from "react";
import {
  AuthCard,
  AuthForm,
  AuthInputLable,
  AuthSubmitBtn,
  AuthTitle,
  FormItem,
  Seporator,
  SignInWrap,
  SocialButton,
} from "./sing-in.s";
import { FacebookIcon, GoogleIcon } from "../../../assets";
import { Input, Spin, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { isErrorStatus } from "../../../utils";
import * as Yup from "yup";
import { useSignInMutation } from "../../../store/services";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slice/authSlice";
import { setNotification } from "../../../store/slice/appSlice";

const validationScheme = Yup.object({
  key: Yup.string().required("Iltimos malumot kiring"),
  email: Yup.string().required("Iltimos malumot kiring"),
  secret: Yup.string().required("Iltimos malumot kiring"),
});
export const SignIn = (props) => {
  const [signIn, {isLoading}] = useSignInMutation();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    validationSchema: validationScheme,
    initialValues: { secret: "", email: "", key: "" },
    onSubmit: (values) => {
      signIn(values)
        .unwrap()
        .then((res) => {
          dispatch(setUser(res.data));
          navigate("/")
        })
        .catch((err) => {
          console.log(err);
          if (err?.data?.message)
            dispatch(
              setNotification({ text: err?.data?.message || "unexpected error", type: "error" })
            );
          console.log("error", err);
        });
    },
  });

  return (
    <SignInWrap>
      <AuthCard>
        <AuthTitle>Sing In</AuthTitle>
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
            <AuthInputLable error={isErrorStatus(formik, "key")}>
              Your key
            </AuthInputLable>
            <Input
              size="large"
              value={formik.values["key"]}
              name="key"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              status={isErrorStatus(formik, "key") ? "error" : ""}
              placeholder="Your key"
            />
          </FormItem>
          <FormItem>
            <AuthInputLable error={isErrorStatus(formik, "email")}>
              Your Email
            </AuthInputLable>
            <Input
              size="large"
              value={formik.values["email"]}
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              status={isErrorStatus(formik, "email") ? "error" : ""}
              placeholder="Your email"
            />
          </FormItem>
          <FormItem>
            <AuthInputLable error={isErrorStatus(formik, "secret")}>
              Your secret
            </AuthInputLable>
            <Input
              size="large"
              value={formik.values["secret"]}
              name="secret"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              status={isErrorStatus(formik, "secret") ? "error" : ""}
              placeholder="Your secret"
            />
          </FormItem>
          <AuthSubmitBtn fullWidth type="submit" size="large" disabled={isLoading}>
            {isLoading ? <Spin />: "Submit"}
          </AuthSubmitBtn>
          <Typography style={{ textAlign: "center" }}>
            Already signed up? <Link to="/sign-up">Go to sign in.</Link>
          </Typography>
        </AuthForm>
      </AuthCard>
    </SignInWrap>
  );
};
