import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Hire from './Hire'
import Project from './Project'
import Jobs from './Jobs'
import stylesheet from './our_services.module.css';
import img1 from '../assets/approved.png';
import $ from 'jquery';
import ABC from './ABC'


const Our_Services = () => {

    // const karan = ()=>{
    //           $('.manage-box.active p.manage-desc').slideDown();
    //     removeBorder();
    //     $('.manage-box').click(function(){
    //         $('.manage-box.active p.manage-desc').slideUp();
    //         $('.manage-box').removeClass('active');
    //         $(this).addClass('active');
    //         $('.manage-boxes li.manage-box:not(:last-child) .manage-head').css('border-bottom','1px solid #dbdbdb');
    //         $('.manage-boxes li.manage-box.active .manage-head').css('border-bottom','0px');
    //         removeBorder();
    //         $('.manage-box.active p.manage-desc').slideDown();
    //     });

    //     function removeBorder(){
    //         var listItems = $(".manage-boxes li");
    //         var index = 0;
    //         listItems.each(function(idx, li) {
    //             var product = $(li);
    //             if($(this).hasClass('active')){
    //                 index = idx;
    //             }
    //         });
    //         $(`.manage-boxes li.manage-box:nth-child(${index}) .manage-head`).css('border-bottom','0px');
    //    }
    // }
    const [loading, setLoading] = useState(true);
    // const [index, setIndex] = useState(1);
    useEffect(() => {
        // karan();
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [])
  
    return (
        <>
            {/* {loading &&
                <My_Loader3 />
            }
            {!loading && */}
                <>

                    <div className={stylesheet.main}>
                        <div className={stylesheet.my_main}>
                            <div className={stylesheet.tabb}>
                                <Tabs style={{ width: "36%", marginLeft: "32%", background: "#fff", borderRadius: "10px", padding: "3px 0" }}
                                    defaultActiveKey="hire"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="hire" title="Hire a Talent">
                                        <div className={stylesheet.my_tab}>
                                            <Hire />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="job" title="Apply for a Job">
                                        <div className={stylesheet.my_tab}>
                                            <Jobs />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="project" title="Start A Project">
                                        <div className={stylesheet.my_tab}>
                                            <Project />
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className={stylesheet.second_main}>
                        <div className={stylesheet.second_content}>
                            <h1>How to get started?</h1>
                            <p>A platform that takes care of everything beforehand. Uplers sources, vets, <br /> matches and manages all the talents.</p>
                        </div>
                        <div className={stylesheet.second_details}>
                            {/* <div className={stylesheet.second_myaccordian}>
                                <Accordion defaultActiveKey="0">
                                    <div className={stylesheet.second_item}>
                                    <Accordion.Item eventKey="0" className={stylesheet.item}>
                                        <Accordion.Header> <button style={{ padding: '2px 9px', border: 'none', borderRadius: '80px', backgroundColor: '#ffda33', alignItems: 'center' }}> <b>1</b></button><b> Share the Job Description</b></Accordion.Header>
                                        <Accordion.Body>
                                            Share complete roles and responsibilities, must-have skills, <br /> necessary market experience and budget.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    </div>
                                    <Accordion.Item eventKey="1" className={stylesheet.item}>
                                        <Accordion.Header><button style={{ padding: '2px 9px', border: 'none', borderRadius: '80px', backgroundColor: '#ffda33', alignItems: 'center' }}> <b>2</b></button> <b> Review & Shortlist the Matches</b></Accordion.Header>
                                        <Accordion.Body>
                                            We'll match the best-fitted profile(s) in the next 48 hours for your <br /> review. You shortlist and share the time slots for us to schedule <br /> interviews.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className={stylesheet.item}>
                                        <Accordion.Header><button style={{ padding: '2px 9px', border: 'none', borderRadius: '80px', backgroundColor: '#ffda33', alignItems: 'center' }}> <b>3</b></button><b>Interview & Hire</b></Accordion.Header>
                                        <Accordion.Body>
                                            Assess them until you are confident and provide feedback.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" className={stylesheet.item}>
                                        <Accordion.Header><button style={{ padding: '2px 9px', border: 'none', borderRadius: '80px', backgroundColor: '#ffda33', alignItems: 'center' }}> <b>4</b></button><b>Onboard & Manage</b></Accordion.Header>
                                        <Accordion.Body>
                                            We'll sort all the legalities and contracts with the talent, ensure a <br /> smooth onboarding and help you manage the talent.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>  */}
                            {/* 
                                <div>
                                    <My_Accordian />
                                </div> */}

                            <div className="col-md-6 col-12">
                               <ABC />
                            </div>

                            <div className={stylesheet.second_part}>
                                <div className={stylesheet.second_approved}>
                                    <img src={img1} alt="" />
                                    <p>Top 3.5% Talent Network</p>
                                </div>
                                <div className={stylesheet.second_approved}>
                                    <img src={img1} alt="" />
                                    <p>100+ High-in-demand Tech Skills</p>
                                </div>
                                <div className={stylesheet.second_approved}>
                                    <img src={img1} alt="" />
                                    <p>70% First Interview Selection Ratio</p>
                                </div>
                                <div className={stylesheet.second_approved}>
                                    <img src={img1} alt="" />
                                    <p>98% Job Acceptance Ratio</p>
                                </div>
                                <div className={stylesheet.second_approved}>
                                    <img src={img1} alt="" />
                                    <p>2X Employee Retention Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            {/* } */}
        </>
    )
}

export default Our_Services;