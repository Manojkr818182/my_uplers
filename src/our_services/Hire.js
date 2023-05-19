import React, { useEffect, useState } from 'react'
import stylesheet from './hire.module.css'
import my_drop from '../assets/drop.png'
import Dropdown from './dropdown/Dropdown';

const Hire = () => {

    const [errors, setErrors] = useState(null);

    const abc = () => {
        const selected1 = document.querySelector(".selected1");
        const optionContainer1 = document.querySelector(".option-container1");
        const optionList1 = document.querySelectorAll(".option1");
        selected1.addEventListener('click', () => {
            optionContainer1.classList.toggle("active");
        });
        optionList1.forEach(o => {
            o.addEventListener('click', () => {
                selected1.innerHTML = o.querySelector("label").innerHTML;
                optionContainer1.classList.remove("active");
            })
        })
    };

    const [user, setUser] = useState({
        name: "",
        email: '',
        phone: '',
        job_role: '',
        file: '',
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
            if (user_data[key] === '' && key === 'job_role') {
                err_obj[key] = "Please fill in the required field. *"
            }
            if (user_data[key] === '' && key === 'file') {
                err_obj[key] = "Please fill in the required field. *"
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

    };
    useEffect(() => {
        abc();
    }, [])

    return (


        <div className={stylesheet.main}>
            <form onSubmit={submitFun}>
                <div className={stylesheet.my_main}>
                    <h1>Hire a Talent</h1>
                    <p>One of the Tech Experts from Uplers will reach out to you within the next couple of working hours.<br /><br />
                        <b>In case you're looking for a job, head to <a href="">- www.uplers.com/talent</a> </b></p>
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
                            <input style={{ borderRadius: '10px', width: '100%', height: '50px', border: 'none' }}
                                type="email" placeholder='Email*'
                                name='email'
                                value={user.email}
                                onChange={handleChange}
                            />
                            {errors?.email &&
                                <p className={stylesheet.my_err}> {errors?.email}</p>
                            }
                        </div>
                        <div className='col-md-4'>
                            <input style={{ borderRadius: '10px', width: '100%', height: '50px', border: 'none' }} type="text"
                                placeholder='Phone*'
                                name='phone'
                                value={user.phone}
                                onChange={handleChange}
                            />
                            {errors?.phone &&
                                <p className={stylesheet.my_err}>{errors?.phone}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className={stylesheet.second_inputs}>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className={stylesheet.my_para}>
                                <p>  What role are you looking to hire?*</p>
                            </div>
                            <div>
                                <input style={{ width: '100%', height: '50px', borderRadius: '10px', border: 'none' }} placeholder='Entre Job role*'
                                    type="text"
                                    name='job_role'
                                    value={user.job_role}
                                    onChange={handleChange}
                                />
                                {errors?.job_role &&
                                    <p className={stylesheet.my_err}> {errors?.job_role}</p>
                                }
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className={stylesheet.my_para}>
                                <p>How experienced should the talent be?*</p>
                            </div>
                            <div>
                                <Dropdown

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={stylesheet.third_inputs}>
                    <div className={stylesheet.my_para}>
                        <p> Share the job description*</p>
                    </div>
                    <div className='row'>
                        <div className="or">
                            <div className='col-md-5 px-2'>
                                <div className={stylesheet.upload}>
                                    <button type="button" className={stylesheet.btn_warning}>
                                        <img src={my_drop} alt="" />
                                        <p style={{ paddingLeft: '20px', fontSize: '16px', fontWeight: '500' }}> Drag and Drop to browse your file</p>
                                        <input type="file" value={user.file} name='file' />
                                    </button>
                                    {errors?.file &&
                                        <p className={stylesheet.my_err}>{errors?.file}</p>
                                    }
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
                    <button type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Hire;