export const isErrorStatus = (formik, input) => {
  return formik.touched[input] && !!formik.errors[input]
}