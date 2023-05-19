import React, { useEffect, useState } from 'react'
import stylesheet from './project.module.css';
import Form from 'react-bootstrap/Form';
import my_drop from '../assets/drop.png'


const Project = () => {

    const [errors, setErrors] = useState(null);
    const [user, setUser] = useState({
        name: "",
        email: '',
        phone: '',
        w3review: '',
    });
    const formValidation = async (user_data) => {
        let err_obj = {}
        for (const key in user_data) {
            if (user_data[key] === '' && key === 'name') {
                err_obj[key] = "Please fill in the required field. *"
            }
            if (key === 'email') {
                if (user_data[key] === '') {
                    err_obj[key] = "Please fill in the required field.  *"
                }
            }
            if (user_data[key].length <= 9 && key === 'phone') {
                if (user_data[key] === '') {
                    err_obj[key] = "Please fill in the required field.  *"
                } else {
                    err_obj[key] = "Phone Number should be between 10-12 digit *"
                }
            }
            if (user_data[key] === '' && key === 'w3review') {
                err_obj[key] = "Please fill in the required field. *"
            }
        }
        return err_obj;
    };
    const submitFun = async (e) => {
        e.preventDefault();
        setErrors(null);
        let result = await formValidation(user);
        setErrors(result);
        if (Object.keys(result).length === 0) {
            console.log("correct");
            //  can call api's
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }

    return (
        <div className={stylesheet.main}>
            <form onSubmit={submitFun}>
                <div className={stylesheet.my_main}>
                    <h1>Start A Project</h1>
                    <p>Fill the form to join India's largest Talent Network of 50,000+ Top Professionals. Share your resume with us today.<br /><br />
                    </p>
                </div>
                <div className={stylesheet.first_inputs}>
                    <div className='row' >
                        <div className='col-md-4' >
                            <input style={{ borderRadius: '10px', width: '100%', height: '50px', border: 'none' }} type="text" placeholder='Name*'
                                name='name'
                                value={user.name}
                                onChange={handleChange}
                            />
                            {errors?.name &&
                                <p className={stylesheet.my_err}> {errors?.name}</p>
                            }
                        </div>
                        <div className='col-md-4'>
                            <input style={{ borderRadius: '10px', width: '100%', height: '50px', border: 'none' }} type="email" placeholder='Email*'
                                name='email'
                                value={user.email}
                                onChange={handleChange}
                            />
                            {errors?.email &&
                                <p className={stylesheet.my_err}> {errors?.email}</p>
                            }
                        </div>
                        <div className='col-md-4'>
                            <input style={{ borderRadius: '10px', width: '100%', height: '50px', border: 'none' }} type="text" name='phone' placeholder='Phone*' />
                            {errors?.phone &&
                                <p className={stylesheet.my_err}>{errors?.phone}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className={stylesheet.second_inputs}>
                    <div className='row mt-4'>

                        <div className='col-12'>
                            <div className={stylesheet.my_para}>
                                <p> Which services are you looking for ?*</p>
                            </div>
                            <div >
                                <Form.Select style={{ width: '100%', height: '50px', borderRadius: '10px', border: 'none', }} aria-label="Default select example">
                                    <option>SEO</option>
                                    <option value="1">SEM</option>
                                    <option value="2">Wordpress Development</option>
                                    <option value="3">Hubspot Development</option>
                                    <option value="4">Design</option>
                                    <option value="5">Other</option>
                                </Form.Select>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={stylesheet.third_inputs}>

                    <div className={stylesheet.my_para}>
                        <p> Attach the Resume*</p>
                    </div>
                    {/* <div className='row'>
                        <div className='col-md-6'>
                            <div className={stylesheet.file_type}>
                                <input style={{ border:'none'}}  type="file" name='email' placeholder='Entre Talent role*' />
                            </div>
                        </div>
                        <div className='col-md-6'>         
                             
                            <div className={stylesheet.text_area}>
                              
                                <textarea id="w3review" name="w3review"  rows="4" cols="50" placeholder='Add link to job posts or a brief description of the roles and responsiblities*' >
                                    
                                </textarea>
                            </div>
                        </div>
                    </div> */}
                    <div className='row'>
                        <div className="or">
                            <div className='col-md-5 px-2'>
                                {/* <div className={stylesheet.file_type}>
                                <input style={{ border: 'none' }} type="file" name='email' placeholder='Entre Talent role*' />
                            </div> */}
                                <div className={stylesheet.upload}>
                                    <button type="button" className={stylesheet.btn_warning}>
                                        <img src={my_drop} alt="" />
                                        <p style={{ paddingLeft: '20px', fontSize: '16px', fontWeight: '500' }}> Drag and Drop to browse your file</p>
                                        <input type="file" />
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 px-2'>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#a8a8a8' }}>

                                    OR
                                </div>
                            </div>
                            <div className='col-md-5 px-2'>
                                <div className={stylesheet.text_area}>
                                    <textarea id="w3review" name="w3review" value={user.w3review} placeholder='Add link to job posts or a brief description of the roles and responsiblities*' rows="4" cols="50">
                                    </textarea>

                                {errors?.w3review &&
                                    <p className={stylesheet.my_err}> {errors?.w3review}</p>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={stylesheet.my_button}>
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    )


}
export default Project