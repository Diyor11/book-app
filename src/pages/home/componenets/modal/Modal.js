import React, { useEffect, useMemo } from 'react';
import {Modal as AntdModal, Input, Spin} from "antd"
import { ButtonsWrap, CencelButton, FormItem, ModalForm, ModalInputLable, ModalWrap, SubmitButton } from './modal.s';
import { useDispatch, useSelector } from 'react-redux';
import { editableSelect, isModalOpen } from '../../../../store/selectors';
import { setEdiatble, setNotification, toggleMenu } from '../../../../store/slice/appSlice';
import { useFormik } from "formik";
import { isErrorStatus } from "../../../../utils";
import * as Yup from "yup"
import { useCreateBookMutation, useEditBookMutation } from '../../../../store/services/bookApi';
import { useAuth } from '../../../../hooks';

const validationScheme = Yup.object({
  isbn: Yup.string().required("Iltimos malumot kiring"),
  title: Yup.string().required("Iltimos malumot kiring"),
  author: Yup.string().required("Iltimos malumot kiring"),
  cover: Yup.string().required("Iltimos malumot kiring"),
  published: Yup.string().required("Iltimos malumot kiring"),
  pages: Yup.string().required("Iltimos malumot kiring"),
})

export const Modal = (props) => {
  const [createBook, {isLoading: createLoad}] = useCreateBookMutation()
  const [editBook, {isLoading: editLoad}] = useEditBookMutation()
  const {user} = useAuth()
  const dispatch = useDispatch()
  const editableData = useSelector(editableSelect)
  console.log(editableData);
  
  const formik = useFormik({
    validationSchema: validationScheme,
    initialValues: {title: "", author: "", cover: "", published: "", pages: "", isbn: ""},
    onSubmit: (values) => {
      if(editableData) {
        editBook({values: {...values, id: editableData.id}, user})
        .unwrap()
          .then(() => {
            dispatch(setNotification({text: "Muvochiqiyatli yangilandi"}))  
            dispatch(toggleMenu(false))       
          }).catch(e =>{
            console.log(e);
            
            dispatch(setNotification({text: e?.data?.message || "Somethinh wrong", type: "error"}))
          })
    } else {
        createBook({values, user})
          .unwrap()
          .then(() => {
            console.log('success');   
            dispatch(setNotification({text: "Muvochiqiyatli yaratildi"}))  
            dispatch(toggleMenu(false))       
          }).catch(e => dispatch(setNotification({text: e?.data?.message || "Somethinh wrong", type: "error"})))
      }
    }
  })  
  const modalOpen = useSelector(isModalOpen)

  const isLoading = useMemo(() => createLoad || editLoad, [createLoad, editLoad])

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
            <ModalInputLable error={isErrorStatus(formik, "isbn")}>Your isbn</ModalInputLable>
            <Input 
              size="large" 
              value={formik.values["isbn"]} 
              name="isbn" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              status={isErrorStatus(formik, "isbn") ? "error":""} 
              placeholder="Your title"
            />
          </FormItem>
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
            <SubmitButton type="submit">{isLoading ? <Spin /> : "Submit"}</SubmitButton>
          </ButtonsWrap> 
        </ModalForm>
      </AntdModal>
    </ModalWrap>
  );
};