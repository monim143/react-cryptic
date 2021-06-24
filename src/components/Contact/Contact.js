import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import  './Contact.scss';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    subject: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    msg: Yup.string()
        .min(10, 'Too Short!')
        .max(270, 'Too Long!')
        .required('Required'),
    phone: Yup.number().required().positive().integer(),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

export default class Contact extends Component {
    render() {
        return (
            <>
                <div className="contact-form section-padding bg-light">
                    <div className="container">
                        <div className="section-header text-center mb-5">
                            <h2 className={'display-6 fw-bold'}>Contact</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        phone: '',
                                        subject: '',
                                        msg: '',
                                    }}
                                    validationSchema={SignupSchema}
                                    onSubmit={values => { console.log(values); }}
                                >
                                    {({ errors, touched }) => (
                                        <Form>
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="form-group mb-3">
                                                        <Field name="name" className={'form-control form-control-lg rounded-pill px-4 fs-6'} placeholder={'Name'} />
                                                        {errors.name && touched.name ? (<p className={'text-danger'} >{errors.name}</p>) : null}
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="form-group mb-3">
                                                        <Field name="email" type="email" className={'form-control form-control-lg rounded-pill px-4 fs-6'} placeholder={'Email'} />
                                                        {errors.email && touched.email ? (<p className={'text-danger'}>{errors.email}</p>) : null}
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="form-group mb-3">
                                                        <Field name="phone" type="text" className={'form-control form-control-lg rounded-pill px-4 fs-6'} placeholder={'Phone'} />
                                                        {errors.phone && touched.phone ? (<p className={'text-danger'}>{errors.phone}</p>) : null}
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="form-group mb-3">
                                                        <Field name="subject" type="text" className={'form-control form-control-lg rounded-pill px-4 fs-6'} placeholder={'Subject'} />
                                                        {errors.subject && touched.subject ? (<p className={'text-danger'}>{errors.subject}</p>) : null}
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="form-group mb-3">
                                                        <Field name="msg" as="textarea" rows={'8'} className={'form-control form-control-textarea form-control-lg px-4 fs-6'} placeholder={'Message'} />
                                                        {errors.msg && touched.msg ? (<p className={'text-danger'}>{errors.msg}</p>) : null}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mt-4 text-center">
                                                <button type="submit" className={'btn px-4 py-2 rounded-pill btn-cryptic bg-clr-green text-light'}>Send Messages</button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
