import React, { useEffect } from 'react';
import $ from "jquery";

const ABC = () => {
    const accordHFun = () => {
        $('.manage-box.active p.manage-desc').slideDown();
        removeBorder();
        $('.manage-box').click(function () {
            $('.manage-box.active p.manage-desc').slideUp();
            $('.manage-box').removeClass('active');
            $(this).addClass('active');
            $('.manage-boxes li.manage-box:not(:last-child) .manage-head').css('border-bottom', '1px solid #dbdbdb');
            $('.manage-boxes li.manage-box.active .manage-head').css('border-bottom', '0px');
            removeBorder();
            $('.manage-box.active p.manage-desc').slideDown();
        });

        function removeBorder() {
            var listItems = $(".manage-boxes li");
            var index = 0;
            listItems.each(function (idx, li) {
                // var product = $(li);
                if ($(this).hasClass('active')) {
                    index = idx;
                }
            });
            $(`.manage-boxes li.manage-box:nth-child(${index}) .manage-head`).css('border-bottom', '0px');
        }
    };

    useEffect(() => {
        accordHFun();
    }, [1])
    return (
        <div >
            <div class="manage-acc">
                <ul class="manage-boxes" style={{ listStyle: "none" }}>
                    <li class="manage-box active">
                        <p class="manage-head">Share the Job Description</p>
                        <p class="manage-desc" style={{ display: "none" }}>Share complete roles and responsibilities, must-have skills, necessary market experience and budget.</p>
                    </li>
                    <li class="manage-box">
                        <p class="manage-head" style={{ borderBottom: "1px" }}>Review &amp; Shortlist the Matches</p>
                        <p class="manage-desc" style={{ display: "none" }}>We'll match the best-fitted profile(s) in the next 48 hours for your review. You shortlist and share the time slots for us to schedule interviews.</p>
                    </li>
                    <li class="manage-box">
                        <p class="manage-head" style={{ borderBottom: "1px" }}>Interview &amp; Hire</p>
                        <p class="manage-desc" style={{ display: "none" }}>Assess them until you are confident and provide feedback.</p>
                    </li>
                    <li class="manage-box">
                        <p class="manage-head" style={{ borderBottom: "1px" }}>Onboard &amp; Manage</p>
                        <p class="manage-desc" style={{ display: "none" }}>We'll sort all the legalities and contracts with the talent, ensure a smooth onboarding and help you manage the talent.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ABC