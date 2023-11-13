import React, { useEffect } from 'react';
import {Modal as AntdModal, Input} from "antd"
import { ButtonsWrap, CencelButton, FormItem, ModalForm, ModalInputLable, ModalWrap, SubmitButton } from './modal.s';
import { useDispatch, useSelector } from 'react-redux';
import { editableSelect, isModalOpen } from '../../../../store/selectors';
import { setEdiatble, toggleMenu } from '../../../../store/slice/appSlice';
import { useFormik } from "formik";
import { isErrorStatus } from "../../../../utils";
import * as Yup from "yup"
import { useCreateBookMutation, useEditBookMutation } from '../../../../store/services/bookApi';
import { useAuth } from '../../../../hooks';

const validationScheme = Yup.object({
  title: Yup.string().required("Iltimos malumot kiring"),
  author: Yup.string().required("Iltimos malumot kiring"),
  cover: Yup.string().required("Iltimos malumot kiring"),
  published: Yup.string().required("Iltimos malumot kiring"),
  pages: Yup.string().required("Iltimos malumot kiring"),
})

export const Modal = (props) => {
  const [createBook] = useCreateBookMutation()
  const [editBook] = useEditBookMutation()
  const {user} = useAuth()
  const editableData = useSelector(editableSelect)
  const formik = useFormik({
    validationSchema: validationScheme,
    initialValues: {title: "", author: "", cover: "", published: "", pages: ""},
    onSubmit: (values) => {
      console.log("success", values)
      if(editableData) {
        editBook(values)
        .unwrap()
        .then(() => {

        }).catch(e => console.log(e))
      } else {
        createBook(values)
          .unwrap()
          .then(() => {
            createBook(values, user)
          }).catch(e => console.log(e))
      }
    }
  })  
  const modalOpen = useSelector(isModalOpen)
  const dispatch = useDispatch()

  useEffect(() => {
    if(editableData?.id) {
      formik.setValues(editableData)
    }
  }, [editableData])

  const handleCancel = () => {
    dispatch(toggleMenu(false));
    formik.resetForm()

    if(editableData?.id) {
      dispatch(setEdiatble(null))
    }
  };

  return (
    <ModalWrap>
      <AntdModal title="Create Book" open={modalOpen} footer={false} onCancel={handleCancel}>
        <ModalForm onSubmit={formik.handleSubmit}>
          <FormItem>
            <ModalInputLable error={isErrorStatus(formik, "title")}>Your title</ModalInputLable>
            <Input 
              size="large" 
              value={formik.values["title"]} 
              name="title" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              status={isErrorStatus(formik, "title") ? "error":""} 
              placeholder="Your title"
            />
          </FormItem>
          <FormItem>
            <ModalInputLable error={isErrorStatus(formik, "author")}>Your author</ModalInputLable>
            <Input 
              size="large" 
              value={formik.values["author"]} 
              name="author" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              status={isErrorStatus(formik, "author") ? "error":""} 
              placeholder="Your author"
            />
          </FormItem>
          <FormItem>
            <ModalInputLable error={isErrorStatus(formik, "cover")}>Your cover</ModalInputLable>
            <Input 
              size="large" 
              value={formik.values["cover"]} 
              name="cover" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              status={isErrorStatus(formik, "cover") ? "error":""} 
              placeholder="Your cover"
            />
          </FormItem>
          <FormItem>
            <ModalInputLable error={isErrorStatus(formik, "published")}>Your published</ModalInputLable>
            <Input 
              size="large" 
              value={formik.values["published"]} 
              name="published" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              status={isErrorStatus(formik, "published") ? "error":""} 
              placeholder="Your published"
            />
          </FormItem>
          <FormItem>
            <ModalInputLable error={isErrorStatus(formik, "pages")}>Your pages</ModalInputLable>
            <Input 
              size="large" 
              value={formik.values["pages"]} 
              name="pages" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              status={isErrorStatus(formik, "pages") ? "error":""} 
              placeholder="Your pages"
            />
          </FormItem>
          <ButtonsWrap >
            <CencelButton onClick={handleCancel}>Cencel</CencelButton>
            <SubmitButton type="submit">Submit</SubmitButton>
          </ButtonsWrap> 
        </ModalForm>
      </AntdModal>
    </ModalWrap>
  );
};