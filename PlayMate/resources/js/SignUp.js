import React from 'react'
import './SignUp.css';
import { useFormik } from 'formik'
import { Link, Route } from 'react-router-dom';


function Signup () {
   

    const validate = values => {
        const errors = {}
    
        if (!values.email) {
          errors.email = 'Required'
        } else if (values.email.length < 5) {
          errors.email = 'Must be more than 5 characters long'
        }
    
        if (!values.password) {
          errors.password = 'Required'
        } else if (values.password.length < 8) {
          errors.password = 'Must be 8 characters or more'
        } else if (values.password === '12345678') {
          errors.password = 'Must not be 12345678 !!!'
        }
    
        if (!values.repassword) {
          errors.repassword = 'Required'
        } else if (values.repassword !== values.password) {
          errors.repassword = 'Second password doesn\'t match'
        }
    
        return errors
      }
    
      const formik = useFormik({
    
        initialValues: {
          email: '',
          password: '',
          repassword: ''
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2))
        }
    
      })
      
    return(
        <div>
            <h1>Create Account:</h1>
            <form>
            <input className= "username_" id="email" placeholder='Enter email' name="email"  type="email" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.email}/>
        {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
            <input className= "password_"id ='password' placeholder='password' name='password' type="password"/>
            <input className= "repassword_" id ='repassword' placeholder='Enter your password again' name='repassword' type="password"onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.repassword}/>
      {formik.touched.repassword && formik.errors.repassword ? <div className='error'>{formik.errors.repassword}</div> : null}/
            <button  className= "button_" type="submit">Sign Up</button>
            <Link to="/">
            <button  className= "button_" type="submit">Home</button>
            </Link>
            </form>
        </div>
    )
}

export default Signup;