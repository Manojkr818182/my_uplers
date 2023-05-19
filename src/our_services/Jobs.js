import React, { useEffect, useState } from 'react'
import stylesheet from './jobs.module.css'
import my_drop from '../assets/drop.png'


const Jobs = () => {

    const [errors, setErrors] = useState(null);

    
    const abc = () =>{
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
        file:'',
        w3review:'',
  });
  const formValidation = async (user_data) => {
    let err_obj = {}
    for (const key in user_data) {
        if (user_data[key] === '' && key==='name') {
            err_obj[key] ="Please fill in the required field. *"
        }
        if (key==='email') {
            if(user_data[key] ===''){
                err_obj[key] ="Please fill in the required field.  *"
            }
        }
        if (user_data[key].length <=9 && key==='phone') {
            if(user_data[key] ===''){
                err_obj[key] ="Please fill in the required field.  *"
            } else{
                err_obj[key] ="Phone Number should be between 10-12 digit *"
            }
        }
        if (user_data[key] === '' && key==='job_role') {
            err_obj[key] ="Please fill in the required field. *"
        }
          if (user_data[key] === '' && key==='file') {
            err_obj[key] ="Please fill in the required field. *"
        }
        if (user_data[key] === '' && key==='w3review') {
            err_obj[key] ="Please fill in the required field. *"
        }
    }
    return err_obj;
};
const submitFun = async(e) => {
    e.preventDefault();
    setErrors(null);
    let result = await formValidation(user);
    setErrors(result);
    if(Object.keys(result).length === 0){
        console.log("correct");
        //  can call api's
    }
};


  const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })

  }
  useEffect(() =>{
    abc();
},[])

  return (
      <div className={stylesheet.main}>
          <form onSubmit={submitFun}>
              <div className={stylesheet.my_main}>
                  <h1>Send your Resume</h1>
                  <p>Fill the form to join India's largest Talent Network of 50,000+ Top Professionals. Share your resume with us today.<br /><br />
                  </p>
              </div>
              <div className={stylesheet.first_inputs}>
                  <div className='row' >
                      <div className='col-md-4' >
                          <input style={{borderRadius:'10px', width:'100%',height:'50px',border:'none'}} type="text"  placeholder='Name*'
                              name='name'
                              value={user.name}
                              onChange={handleChange}
                          />
                           {errors?.name &&
                                <p className={stylesheet.my_err}> {errors?.name}</p>
                            }
                      </div>
                      <div className='col-md-4'>
                          <input style={{borderRadius:'10px', width:'100%',height:'50px',border:'none'}} type="email"  placeholder='Email*'
                              name='email'
                              value={user.email}
                              onChange={handleChange}
                          />
                          {errors?.email &&
                                <p className={stylesheet.my_err}> {errors?.email}</p>
                            }
                      </div>
                      <div className='col-md-4'>
                          <input style={{borderRadius:'10px', width:'100%',height:'50px', border:'none'}} type="text" name='phone'  placeholder='Phone*' />
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
                              <p> What role are you interested in applying for?*</p>
                          </div>
                          <div>
                              <input style={{width:'100%',height:'50px',borderRadius:'10px', border:'none'}}  type="email" name='email' placeholder='Entre Job role*' />
                              {errors?.job_role &&
                                <p className={stylesheet.my_err}> {errors?.job_role}</p>
                            }
                          </div>
                      </div>
                      <div className='col-6'>
                          <div className={stylesheet.my_para}>
                              <p> How many years of experience do you have?*</p>
                          </div>
                          <div >
                            
                              {/* <Form.Select style={{width:'100%',height:'50px',borderRadius:'10px',border:'none',}} aria-label="Default select example">
                                  <option>Junior level (1-3 Years of experience)</option>
                                  <option value="1">Junior level (1-3 Years of experience)</option>
                                  <option value="2">Mid level (3-5 Years of experience)</option>
                                  <option value="3">Senior level (5-8 Exp. Years)</option>
                              </Form.Select> */}
                               <div className="container">
                                    <div className="select-box1">
                                        <div class="option-container1">
                                            <div className="option1 active">
                                                <input type="radio" className="radio" />
                                                <label>Junior level (1-3 Years of experience)</label>
                                            </div>
                                            <div class="option1">
                                                <input type="radio" className="radio" />
                                                <label>Mid-level level (1-3 Years of experience)</label>
                                            </div>
                                            <div class="option1">
                                                <input type="radio" className="radio" />
                                                <label>Senior lev             el (1-3 Years of experience)</label>
                                            </div>
                                        </div>
                                        <div className="selected1">
                                            Junior level (1-3 Years of experience)
                                        </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={stylesheet.third_inputs}>
                 
                  <div className='row'>
                      <div className='col-md-6'>
                      <div className={stylesheet.my_para}>
                      <p> Attach the Resume*</p>
                  </div>
                          {/* <div className={stylesheet.file_type}>
                              <input style={{ border:'none'}}  type="file" name='email' placeholder='Entre Talent role*' />
                          </div> */}
                           <div className={stylesheet.upload}>
                                <button type="button" className={stylesheet.btn_warning}>
                                    <img src={my_drop} alt="" />
                                    <p style={{ paddingLeft: '20px',fontSize: '16px', fontWeight: '500' }}> Drag and Drop to browse your file</p>
                                    <input type="file" value={user.file} name='file' />
                                </button>
                                {errors?.file &&
                                <p className={stylesheet.my_err}>{errors?.file}</p>
                            }
                            </div>
                      </div>
                      <div className='col-md-6'>         
                      <div className={stylesheet.my_para}>
                      <p> Tell us about yourself*</p>
                  </div>             
                          <div className={stylesheet.text_area}>
                            
                              <textarea id="w3review" name="w3review" value={user.w3review}  rows="4" cols="50" placeholder='Add link to job posts or a brief description of the roles and responsiblities*' >
                         
                              </textarea>
                          {errors?.w3review &&
                                <p className={stylesheet.my_err}> {errors?.w3review}</p>
                            }
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

  

export default Jobs