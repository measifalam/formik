import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: "Asif",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

// const validate = (values) => {
//   const errors = {};

//   if (!values.name) errors.name = "Required";

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }

//   if (!values.channel) errors.channel = "Required";

//   return errors;
// }

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required')
})




const FormikOne = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    //validate,
    validationSchema
  });

  console.log("visited fields", formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          //formik.getFieldProps will refactor with onChange,value,onBlur etc
          // onChange={formik.handleChange}
          // value={formik.values.name}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps('name')}
        />
        {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
      </div>

      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="email"
          //formik.getFieldProps will refactor with onChange,value,onBlur etc
          // onChange={formik.handleChange}
          // value={formik.values.email}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps('email')}
        />
        {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
      </div>

      <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input
          name="channel"
          id="channel"
          type="text"
          //formik.getFieldProps will refactor with onChange,value,onBlur etc
          // onChange={formik.handleChange}
          // value={formik.values.channel}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps('channel')}
        />
        {formik.errors.channel && formik.touched.channel ? <div className='error'>{formik.errors.channel}</div> : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikOne;
