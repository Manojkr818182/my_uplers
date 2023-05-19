import React, { useState } from 'react'
import stylesheet from './header.module.css';
import img1 from '../../assets/black_logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.css';
import slider_1 from '../../assets/disney.png';
import slider_2 from '../../assets/national-geo-black.png';
import slider_3 from '../../assets/ww-black.png';
import slider_4 from '../../assets/dhl-black.png';
import slider_5 from '../../assets/network.png';
import slider_6 from '../../assets/oracle-black.png';
import slider_7 from '../../assets/cost-advantage.png';
import slider_8 from '../../assets/rc-black.png';
import slider_9 from '../../assets/ribs-black.png';
import slider_10 from '../../assets/time-zone.png';
import new_1 from '../../assets/network.png';
import new_2 from '../../assets/process.png';
import new_3 from '../../assets/talents.png';
import new_4 from '../../assets/cost-advantage.png';
import new_5 from '../../assets/time-zone.png';
import Box_Component from '../../components/box_component/Box_Component';
import Dev_Component from '../../components/dev_component/Dev_Component';
import dev1 from '../../assets/talent-front-end.png';
import dev2 from '../../assets/talent-back-end.png';
import dev3 from '../../assets/talent-digital-marketers.png';
import dev4 from '../../assets/talent-designers.png';
import dev5 from '../../assets/talent-salesforce.png';
import dev6 from '../../assets/talent-email-marketers.png';
import dev7 from '../../assets/talent-software-engineer.png';
import dev8 from '../../assets/talent-app-developer.png';
import imp from '../../assets/edited.png';
import Our_Services from '../../our_services/Our_Services';
import img_ajay1 from '../../assets/talent-front-end.png';
import img_ajay2 from '../../assets/talent-back-end.png';
import img_ajay3 from '../../assets/talent-app-developer.png';
import img_ajay4 from '../../assets/talent-designers.png';
import img_ajay5 from '../../assets/talent-digital-marketers.png';
import img_ajay6 from '../../assets/talent-email-marketers.png';
import img_ajay7 from '../../assets/talent-salesforce.png';
import img_ajay8 from '../../assets/talent-software-engineer.png';
import img_ajay9 from '../../assets/talent-quality-analyst.png';
import my_face from '../../assets/nitish-winston-sm.jpg';
import { GrStar } from 'react-icons/gr';
import myyoutube_btnn from '../../assets/play-btn.png';
import my_v1 from '../../assets/V1.png';
import my_v2 from '../../assets/V2.png';
import my_v3 from '../../assets/V3.png';
import my_v4 from '../../assets/V4.png';
import Footer from '../footer/Footer';



const Header = () => {

  const navigate = useNavigate();



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6
  };

  return (
    <>
      <div className={stylesheet.main_header}>
        <div className={stylesheet.first_header}>
          <p><b>Got a Project(Web/Search/Sem)?<a href="https://www.google.com/">Click here</a></b></p>
        </div>
        <div className={stylesheet.second_header}>
          <div className={stylesheet.logo}>
            <img src={img1} alt="" />
          </div>
          <div className={stylesheet.my_heading}>
          <div className={stylesheet.heading}>
            <ul>
              <li><NavLink to='/Cdu'>WHY CDU</NavLink></li>
              <li><NavLink to='/Hiring'>Hire Top Talent</NavLink></li>
              <li><NavLink to='/Project'>Projects</NavLink></li>
              <li><NavLink to='/Contact'>Resources</NavLink></li>
              <li><NavLink to='/Reosurce'>Contact Us</NavLink></li>
            </ul>
          </div>
              
          </div>
        </div>
        <div className={stylesheet.third_header}>
          <div className={stylesheet.heading_para}>
            <h1>Hire India’s top remote talent</h1><br />
            <p>A hiring platform that helps remote-first companies hire 10X faster & more efficiently.<br />
              A network of 50,000+ talents, pre-vetted against their technical capabilities, language proficiency and <br /> behavioral skills.</p>
          </div>
        </div>
        <div className={stylesheet.my_heading_mybutton}>
          <div className={stylesheet.heading_mybutton}>
              <button className={stylesheet.b1}> Hire a Talent </button>
              </div>
              <div className={stylesheet.heading_mybutton1}>
              <button className={stylesheet.b2}> Apply as a Talent </button>
              </div>
              </div>
        <div className={stylesheet.slider}>
          <div className={stylesheet.small}>
            {/* <h2> Single Item</h2> */}
            <Slider {...settings}>
              <div>
                <img src={slider_1} alt="" />
              </div>
              <div>
                <img src={slider_2} alt="" />
              </div>
              <div>
                <img src={slider_3} alt="" />
              </div>
              <div>
                <img src={slider_4} alt="" />
              </div>
              <div>
                <img src={slider_5} alt="" />
              </div>
              <div>
                <img src={slider_6} alt="" />
              </div>
              <div>
                <img src={slider_7} alt="" />
              </div>
              <div>
                <img src={slider_8} alt="" />
              </div>
              <div>
                <img src={slider_9} alt="" />
              </div>
              <div>
                <img src={slider_10} alt="" />
              </div>
            </Slider>
          </div>
        </div>
        <div className={stylesheet.boxes}>
          <Box_Component
            img={new_1}
            subject='Network'
            value1='50000+'
            value2='Talents'
          />
          <Box_Component
            img={new_2}
            subject='Process'
            value1='5Days'
            value2='Hiring'
          />
          <Box_Component
            img={new_3}
            subject='Talent'
            value1='Top 3.5%'
            value2='Vetted%'
          />
          <Box_Component
            img={new_4}
            subject='Cost Advantage'
            value1='Upto'
            value2='40%'
          />
          <Box_Component
            img={new_5}
            subject='Availability'
            value1='5+'
            value2='Time Zones'
          />
        </div>
    
        <div className={stylesheet.fourth_header}>
          <div className={stylesheet.heading_new}>
            <h1>India's Largest Talent Network</h1><br />
            <p>Explore the 50,000+ strong top, pre-vetted talent. From India, for the world.</p>
          </div>
          {/* <Dev_Component
            image={dev1}
            heading='Front-End Developers'
            value1='HTML'
            value2='ReactJs'
            value3='AngularJs'
            value4='Vue.js & more'
            value5='Mean stack'
            value6='Mern Stack'
          />
          <Dev_Component
            image={dev2}
            heading='Back-End Developers'
            value1='Node.js Laravel '
            value2='WordPress'
            value3='Shopify Magento'
            value4='HubSpot'
            value5='Magento'
            value6='Mean stack'
            value7='Mern Stack'
            value8='Drupal'
          />
          <Dev_Component
            image={dev3}
            heading='Digital Marketers'
            value1='Performance Marketers'
            value2='Programmatic Specialists'
            value3='SEO Experts'
            value4='Social Media Ads Expert'
            value5='Google Analytics Expert'
            value6='Copy Writer'
            value7='Data Analyst'
            value8='Conversion Optimization Specialist'
          />
          <Dev_Component
            image={dev4}
            heading='Designers'
            value1='UI/UX'
            value2='Graphic'
            value3='Product Designers'
          />
          <Dev_Component
            image={dev5}
            heading='Salesforce Experts'
            value1='Administrators'
            value2='Functional Consultants'
            value3='Technical Consultants'
            value4='Developers'
            value5='Marketing Cloud Experts'
          />
          <Dev_Component
            image={dev6}
            heading='Email Marketers'
            value1='Campaign Managers'
            value2='Marketing Specialists'
            value3='Developers'
          />
          <Dev_Component
            image={dev7}
            heading='Software Engineers'
            value1='Python'
            value2='.Net'
            value3='Java'
            value4='& more'
          />
          <Dev_Component
            image={dev8}
            heading='App Developers'
            value1='iOS'
            value2='Android'
            value3='React Native'
            value4='& more'
          /> */}
            <div className={stylesheet.tabs}>
            <div className={stylesheet.tab}>
               <div className={stylesheet.ima}>
                  <img src={img_ajay1} alt="" />
               </div>
               <div className={stylesheet.front}>Front-End Developers</div>
               <div className={stylesheet.tech}>
                  <p>HTML</p>
                  <p>ReactJs</p>
                  <p>AngularJs</p>
                  <p>Vue.js</p>
                  <p>Mean Stack</p>
                  <p>Mern Stack</p>
                  <h6 style={{paddingTop: '8px'}}>& More.</h6>
               </div>
            </div>
            <div className={stylesheet.tab}>
               <div className={stylesheet.ima}>
                  <img src={img_ajay2} alt="" />
               </div>
               <div className={stylesheet.front}>Back-End Developers</div>
               <div className={stylesheet.tech}>
                  <p>NodeJs</p>
                  <p>Laravel</p>
                  <p>Wordpress</p>
                  <p>Shopify</p>
                  <p>Hubspot</p>
                  <p>Magento</p>
                  <p>Mern Stack</p>
                  <p>Mean Stack</p>
                  <p>Drupal</p>
                  <h6 style={{paddingTop: '8px'}}>& More.</h6>
               </div>
            </div>
            <div className={stylesheet.tab}>
               <div className={stylesheet.ima}>
                  <img src={img_ajay3} alt="" />
               </div>
               <div className={stylesheet.front}>Digital Marketers</div>
               <div className={stylesheet.tech}>
                  <p>Performance Marketers</p>
                  <p>Programmatic Specialists</p>
                  <p>SEO Experts</p>
                  <p>Social Media Ads Expert</p>
                  <p>Google Analytics Experts</p>
                  <p>Copy Writer</p>
                  <p>Data Analyst</p>
                  <p>Conversion Optimization Specialist</p>
               </div>
            </div>
            <div className={stylesheet.tab}>
               <div className={stylesheet.ima}>
                  <img src={img_ajay4} alt="" />
               </div>
               <div className={stylesheet.front}>Designers</div>
               <div className={stylesheet.tech}>
                  <p>UI/UX</p>
                  <p>Graphic</p>
                  <p>Product Designers</p>
               </div>
            </div>
            <div className={stylesheet.tab}>
               <div className={stylesheet.ima}>
                  <img src={img_ajay5} alt="" />
               </div>
               <div className={stylesheet.front}>Salesforce Experts</div>
               <div className={stylesheet.tech}>
                  <p>Administrators</p>
                  <p>Functional Consultants</p>
                  <p>Technical Consultants</p>
                  <p>Developers</p>
                  <p>Marketing Cloud Experts</p>
               </div>
            </div>
            <div className={stylesheet.tab}>
               <div className={stylesheet.ima}>
                  <img src={img_ajay6} alt="" />
               </div>
               <div className={stylesheet.front}>Email Marketers</div>
               <div className={stylesheet.tech}>
                  <p>Campaign Managers</p>
                  <p>Marketing Specialists</p>
                  <p>Developers</p>
               </div>
            </div>
            <div className={stylesheet.tab}>
               <div className={stylesheet.ima}>
                  <img src={img_ajay7} alt="" />
               </div>
               <div className={stylesheet.front}>Software Engineers</div>
               <div className={stylesheet.tech}>
                  <p>Python</p>
                  <p>.Net</p>
                  <p>Java</p>
                  <p>DevOps</p>
                  <p>Azure</p>
                  <p>Cloud</p>
                  <p>Data</p>
                  <p>Data Science</p>
                  <h6 style={{paddingTop: '8px'}}>& More.</h6>
               </div>
            </div>
            <div className={stylesheet.tab}>
               <div className={stylesheet.ima}>
                  <img src={img_ajay8} alt="" />
               </div>
               <div className={stylesheet.front}>App Developers</div>
               <div className={stylesheet.tech}>
                  <p>iOS</p>
                  <p>Android</p>
                  <p>React Native</p>
               </div>
            </div>
            <div className={stylesheet.tab}>
               <div className={stylesheet.ima}>
                  <img src={img_ajay9} alt="" />
               </div>
               <div className={stylesheet.front}>Quality Analyst</div>
               <div className={stylesheet.tech}>
                  <p>Quality Analyst</p>
               </div>
            </div>
         </div>
          <div className={stylesheet.logi}>
            <p>Get access to the most in-demand, exclusive network of talents covering 100+ skillsets in the Marketing & <br /> technology industry.</p>
          </div>
        </div>
      
        <div className={stylesheet.fifth_header}>
          <div className={stylesheet.fifth_heading}>
            <h1>Every talent in our network is pre-vetted and<br />
              qualified on below parameters.</h1>
          </div>
          <br />
          <br />
          <br />
          <div className={stylesheet.fifth_writing}>
            <div className={stylesheet.fifth_first}>
              <div className={stylesheet.fifth_writingheading1}>
                <h2>Excellent <br /> Communication</h2>
                <p>Vetted through a world-leading AI- <br />powered English communication test <br />that assesses speaking, listening,<br /> reading, writing, pronunciation, fluency, <br />clarity of expression, and speed<br /> of speech.</p>
              </div>
              <div className={stylesheet.fifth_writingheading1}>
                <h2>Technically Super Sound</h2>
                <p>Each candidate goes through a minimum <br /> 5-hour rigorous skill assessment curated <br />uniquely as per the role.</p>
              </div>
            </div>
            <div className={stylesheet.fifth_second}>
              <div className={stylesheet.my_imgg}>
                <img src={imp} alt="" />
               
                    <div className={stylesheet.pulse}>
                   </div>
                    <div className={stylesheet.pulse1}>
                      </div>
                      <div className={stylesheet.pulse2}>
                      </div>
                      <div className={stylesheet.pulse3}>
                      </div>
                </div>
            </div>
            <div className={stylesheet.fifth_third}>
              <div className={stylesheet.fifth_writingheading1}>
                <h2>Culturally Fit</h2>
                <p>Compatible to adapt, understand, & <br />adjust accordingly with company’s core<br /> values, vision, principle, identity.</p>
              </div>
              <div className={stylesheet.fifth_writingheading1}>
                <h2>Available Across time zones</h2>
                <p>Vetted through a world-leading AI- <br />powered English communication test <br />that assesses speaking, listening,<br /> reading, writing, pronunciation, fluency, <br />clarity of expression, and speed<br /> of speech.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <section className="profile">
         <div className="star_table">/
            <div className="title">
               <h1>Talent Profile</h1>
               <p>Check to see what fits - this is what the top talent from India looks like.</p>
            </div>
            <div className="star">
               <table>
                  <tr>
                     <th>Name</th>
                     <th>Skill</th>
                     <th>Years of Exp.</th>
                     <th>Communication Score</th>
                     <th>Technical Score</th>
                     <th>Profile</th>
                  </tr>
                  <tr>
                     <td className="review_img" style={{textAlign:'left'}}> <img src={my_face} alt=""/> Manoj Patel</td>
                     <td>Full-Stack Web Developer</td>
                     <td>3</td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span><GrStar /></span> <br/>
                        4.9/5
                     </td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span><br />
                        5/5
                     </td>
                     <td><button className="btn3">View</button></td>
                  </tr>
                  <tr>
                     <td className="review_img" style={{textAlign:'left'}}><img src={my_face} alt=""/> Parth Bhatt</td>
                     <td>PHP Developer</td>
                     <td>5</td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span><GrStar /></span> <br/>
                        4.9/5
                     </td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span><br />
                        5/5
                     </td>
                     <td><button className="btn3">View</button></td>
                  </tr>
                  <tr>
                     <td className="review_img" style={{textAlign:'left'}}><img src={my_face} alt=""/> Karan Patel</td>
                     <td>ReactJs Developer</td>
                     <td>1</td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span><GrStar /></span> <br/>
                        4.9/5
                     </td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span><br />
                        5/5
                     </td>
                     <td><button className="btn3">View</button></td>
                  </tr>
                  <tr>
                     <td className="review_img" style={{textAlign:'left'}}><img src={my_face} alt=""/> Abhishek Pal</td>
                     <td>UX/UI Designer</td>
                     <td>4</td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span><GrStar /></span> <br/>
                        4.9/5
                     </td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span><br />
                        5/5
                     </td>
                     <td><button className="btn3">View</button></td>
                  </tr>
                  <tr>
                     <td className="review_img" style={{textAlign:'left'}}><img src={my_face} alt=""/> Drashti Patel</td>
                     <td>Jr PHP developer</td>
                     <td>1</td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span><GrStar /></span> <br/>
                        4.9/5
                     </td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span><br />
                        5/5
                     </td>
                     <td><button className="btn3">View</button></td>
                  </tr>
                  <tr>
                     <td className="review_img" style={{textAlign:'left'}}><img src={my_face} alt=""/> Shahjan Ali</td>
                     <td>Android Developer</td>
                     <td>3</td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span><GrStar /></span> <br/>
                        4.9/5
                     </td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span><br />
                        5/5
                     </td>
                     <td><button className="btn3">View</button></td>
                  </tr>
                  <tr>
                     <td className="review_img" style={{textAlign:'left'}}><img src={my_face} alt=""/> Namrata</td>
                     <td>Android Developer</td>
                     <td>2</td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span><GrStar /></span> <br/>
                        4.9/5
                     </td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span><br />
                        5/5
                     </td>
                     <td><button className="btn3">View</button></td>
                  </tr>
                  <tr>
                     <td className="review_img" style={{textAlign:'left'}}><img src={my_face} alt="" /> Ashwin Dharajiya</td>
                     <td>React native Developer</td>
                     <td>1</td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span><GrStar /></span> <br/>
                        4.9/5
                     </td>
                     <td><span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span>
                        <span style={{color:'orange'}}><GrStar /></span> <br />
                        5/5
                     </td>
                     <td><button className="btn3">View</button></td>
                  </tr>
               </table>
            </div>
         </div>
      </section>
        </div>
        <div>
        <section className={stylesheet.story}>
         <div className={stylesheet.title}>
            <h1>Our Success Stories</h1>
         </div>
         <div className={stylesheet.video_main}>
            <div className={stylesheet.video}>
               <div>
                  <div className={stylesheet.up}>
                     <div className={stylesheet.play}>
                        {/* <img src="/images/video.png" alt=""/>  */}
                        <video width="500" height="320" src="" poster={my_v1} ></video>
                     </div>
                     <h4>Tap into Global Talent Pool</h4>
                     <p>Uplers helped Incubeta tap into the global talent pool, making it easier to find the best talent that fits in with the requirements perfectly.</p>
                    <div className={stylesheet.play_btn}> <img  src={myyoutube_btnn} alt=""/></div>
                  </div>
                  
                  <div className={stylesheet.up}>
                     <div className={stylesheet.play}>
                        <video width="500" height="320" src="" poster={my_v2} ></video>
                        {/* <img src="/images/video.png" alt=""/>  */}
                     </div>
                     <h4>Tap into Global Talent Pool</h4>
                    <div className={stylesheet.play_btn}> <img  src={myyoutube_btnn} alt=""/>
                    </div>
                     <p>Uplers helped Incubeta tap into the global talent pool, making it easier to find the best talent that fits in with the requirements perfectly.</p>
                    <div className={stylesheet.play_btn}> <img  src={myyoutube_btnn} alt=""/></div>

                  </div>
               </div>
               <div>
                  <div className={stylesheet.up}>
                     <div>
                        <video width="500" height="320" src="" poster={my_v3} ></video>
                         {/* <img src="/images/video.png" alt=""/>  */}
                     </div>
                     <h4>Tap into Global Talent Pool</h4>
                     <p>Uplers helped Incubeta tap into the global talent pool, making it easier to find the best talent that fits in with the requirements perfectly.</p>
                    <div className={stylesheet.play_btn}> <img  src={myyoutube_btnn} alt=""/></div>
                  </div>
                  <div className={stylesheet.up}>
                     <div>
                        <video width="500" height="320" src="" poster={my_v4} ></video>
                         {/* <img src="/images/video.png" alt="" /> */}
                     </div>
                     <h4>Tap into Global Talent Pool</h4>
                     <p>Uplers helped Incubeta tap into the global talent pool, making it easier to find the best talent that fits in with the requirements perfectly.</p>
                    <div className={stylesheet.play_btn}> <img  src={myyoutube_btnn} alt=""/></div>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </div>
        <div className={stylesheet.sixth_main}>
          <div className={stylesheet.sixth_heading}>
            <h1>Talent Profiles</h1>
            <br />
            <p>Check to see what fits - this is what the top talent from India looks like.</p>
          </div>
          {/* <div>
            <button onClick={() => navigate('/karan')}></button>
          </div> */}
        </div>
        <div>
          <Our_Services />
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Header;