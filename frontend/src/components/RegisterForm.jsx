import React from 'react'
import { useFormik } from 'formik'

// CSS
import '../css/RegisterForm.css'
import { RegisterFormSchema } from '../schemas/RegisterFormSchemas'

function RegisterForm() {
    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        term: '',
        },
        validationSchema: RegisterFormSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })
  return (
    <div className='register-container'>
        <form onSubmit={handleSubmit} className='register-form'>
            <div className='register-section-container'>
                <label className='register-section-label'>Email</label>
                <input className='register-section-input' type="text" id="email" placeholder='Email Giriniz' value={values.email} onChange={handleChange}/>
                {errors.email ? <div className='register-section-error'>{errors.email}</div> : null}
            </div>
            <div className='register-section-container'>
                <labe className='register-section-label'l>Age</labe>
                <input className='register-section-input' type="number" id="age" placeholder='Yaş Giriniz' value={values.age} onChange={handleChange}/>
                {errors.age ? <div className='register-section-error'>{errors.age}</div> : null}
            </div>
            <div className='register-section-container'>
                <label className='register-section-label'>Password</label>
                <input className='register-section-input' type="password" id="password" placeholder='Şifre Giriniz' value={values.password} onChange={handleChange}/>
                {errors.password ? <div className='register-section-error'>{errors.password}</div> : null}
            </div>
            <div className='register-section-container'>
                <label className='register-section-label'>Re-Password</label>
                <input className='register-section-input' type="password" id="confirmPassword" placeholder='Şifre Tekrar Giriniz' value={values.repassword} onChange={handleChange}/>
                {errors.confirmPassword ? <div className='register-section-error'>{errors.confirmPassword}</div> : null}
            </div>
            <div className='register-section-container-checkbox'>
                <label className='register-section-label-checkbox'>Term</label>
                <input className='register-section-checkbox' type="checkbox" id="term" value={values.term} onChange={handleChange}/>
            </div>
            <div className='register-section-container-error'>
                {errors.term ? <div className='register-section-error'>{errors.term}</div> : null}
            </div>
            <div className='register-section-container'>
                <button className='register-section-button' type="submit" onClick={handleSubmit}>Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm