import React from "react";
import { ErrorMessage,Form, Field, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    name:'Asif',
    email:'',
    channel:''
}

const onSubmit =values=> {
    console.log('Form Data',values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    channel: Yup.string().required('Required'),
    comments: Yup.string().required('Required')
  })

const MyFormikComp = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
        <Form>
            <div>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name"/>
                <ErrorMessage name="name"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email"/>
                <ErrorMessage name="email"/>
            </div>
            <div>
                <label htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel" placeholder='my channel'/>
                <ErrorMessage name="channel"/>
            </div>
            <button type="submit"> Submit</button>
        </Form>
    </Formik>
  );
};

export default MyFormikComp;
