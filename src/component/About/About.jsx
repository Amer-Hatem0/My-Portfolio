import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css'
import './About.js'




const CircularProgressBar = ({ progressEndValue }) => {
    const [progressValue, setProgressValue] = useState(0);
    const speed = 100;

    useEffect(() => {
        let progress;

        if (progressValue < progressEndValue) {
            progress = setTimeout(() => {
                setProgressValue(progressValue + 1);
            }, speed);
        }

        return () => {
            clearTimeout(progress);
        };
    }, [progressValue, progressEndValue]);

    const circularProgressStyle = {
        background: `conic-gradient(#0d00ff ${progressValue * 3.6}deg, #252525 0deg)`,
    };

    return (
        <div className="container">
            <div className="circular-progress" style={circularProgressStyle}>
                <span className="progress-value">{`${progressValue}%`}</span>
            </div>

        </div>
    );
};

const About = () => {


//   useEffect(() => {
//     const reveal = () => {
//       const reveals = document.querySelectorAll('.rev');

//       for (let i = 0; i < reveals.length; i++) {
//         const windowHeight = window.innerHeight;
//         const revealTop = reveals[i].getBoundingClientRect().top;
//         const revealPoint = 150;

//         if (revealTop < windowHeight - revealPoint) {
//           reveals[i].classList.add('active');
//         } else {
//           reveals[i].classList.remove('active');
//         }
//       }
//     };

//     window.addEventListener('scroll', reveal);

//     return () => {
//       window.removeEventListener('scroll', reveal);
//     };
//   }, []);



    return (
        <div>
            <div>
                <div className="a aabout overflow-hidden">
                    <div className="row d-flex ">

                        <div className="col-lg-10 contentttt aboutme ">
                            <div className="row ">
                                <div className="title-section text-start text-sm-center">
                                    <div className="h1 ab">
                                        <h1>ABOUT <span>ME</span></h1></div>
                                    <span className="title-bg d-none d-lg-block  ">Resume</span></div>


                            </div>



                        </div>
                        <div className="row maincon mt-5 pt-5">
                            <div className="col-lg-10 m-auto">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-5 col-12">
                                        <div className="row"><div className="col-12">
                                            <h3 className="text-uppercase per custom-title mb-0 ft-wt-600 text-white pb-4">personal infos</h3>
                                        </div><div className="col-12 d-block d-sm-none">
                                            </div>
                                            <div class="col-md-12 ">
                                                <ul class="about-list list-unstyled ">
                                                    <li><p><span class="title ">First Name: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">AMER</span></p></li>
                                                    <li><p><span class="title">last Name: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">HATEM</span></p></li>
                                                    <li><p><span class="title">Age: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">21 Years</span></p></li>
                                                    <li><p><span class="title">Nationality: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Palestinian</span></p></li>
                                                    <li><p><span class="title">Freelance: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block green">Available</span></p></li>
                                                    <li><p><span class="title">Address: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Palestine</span></p></li>
                                                    <li><p><span class="title">phone: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">+970569691385</span></p></li>
                                                    <li><p><span class="title">LinkedIn: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Amer Hatem</span></p></li>
                                                    <li><p><span class="title ">Email: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">amerhatem01@mail.com</span></p></li>
                                                    <li><p><span class="title">Langages: </span>
                                                        <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Arabic, English</span></p></li>
                                                </ul>
                                            </div>
                                            <div className="rev2 col-12 mt-1">
                                                <a className="button mt-5" target='-blank' href="https://drive.google.com/file/d/1XlPZ0NgLKI8glz1t3ko8QgZljbnWEeHK/view?usp=sharing" download >
                                                    <span className="button-text">Download CV</span><span className="button-icon fa fa-download" /></a>


                                            </div>
                                        </div>
                                    </div>




                                    <div className=" col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="box-stats ">
                                                    <h3 className="poppins-font position-relative">2</h3>
                                                    <p className="open-sans-font m-0 position-relative text-uppercase">years of
                                                        <span className="d-block">experience</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="box-stats ">
                                                    <h3 className="poppins-font position-relative">7</h3>
                                                    <p className="open-sans-font m-0 position-relative text-uppercase">completed <span className="d-block">projects
                                                    </span></p></div></div>

                                            <div className="col-6">
                                                <div className="box-stats ">
                                                    <h3 className="poppins-font position-relative">10</h3>
                                                    <p className="open-sans-font m-0 position-relative text-uppercase">Happy <span className="d-block">customers
                                                    </span></p></div></div>


                                            <div className="col-6"><div className="box-stats ">
                                                <h3 className="poppins-font position-relative">25</h3><p className="open-sans-font m-0 position-relative text-uppercase">
                                                    awards <span className="d-block">won</span>
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rev row my-5 py-5 ">
                                    <div className="col-12 myskils">
                                        <h3 class="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">My Skills</h3>
                                    </div>
                             <div className="row ms-5 cc text-algin-center m-auto">       
                                   <div className="col-md-2 me-4 ">
    <CircularProgressBar progressEndValue={90} />
                                                <h2>HTML</h2>
                                            

                                            </div>

                                            <div className="col-md-2 me-4">
                                             
                                                <CircularProgressBar progressEndValue={85} />
   <h2>CSS</h2>
                                            </div>

                                            <div className="col-md-2 me-4">

                                                <CircularProgressBar progressEndValue={80} />
                                                <h2>BOOTSTRAP</h2>
                                            </div>
                                            <div className="col-md-2 me-4">

                                                <CircularProgressBar progressEndValue={25} />
                                                <h2>JAVASCRIPT</h2>

                                            </div>
                                            <div className="col-md-2 me-4">
                                                  <CircularProgressBar progressEndValue={30} />  <h2>REACT.JS</h2>
                                            

                                            </div></div>


                               





                                        

                                </div>


                            </div>
                        </div>




                        <div class="rev  col-lg-9 bio my-5 pt-5">
                            <div class="row container">
                                <div class="d-flex justify-content-center">
                                    <div class="title position-relative">
                                        <h2 class="text-uppercase Experience">
                                            Experience & Education</h2>

                                    </div>

                                </div>


                                <div class="row mt-5 ">
                                    <div class="col-md-6">
                                        <div class="d-flex haed align-items-center
                            position-relative">
                                            <i class="fas fa-graduation-cap"></i>
                                            <h3 class="ms-3 fs-5 mb-0">Education</h3>

                                        </div>
                                        <div class="desc pt-3">
                                            <div class="item carddd position-relative">
                                                <h4> Computer Engineering , <span class="fw-light
                                        "> An Najah National University </span></h4>
                                                <span class="custom-color my-2 d-inline-block ">Sep
                                                    2020 - May
                                                    2025</span>
                                                <p class=" m-0">Dedication, perseverance, studying, participation, diligence, development, learning, challenges, advancement, growth, skill acquisition, creativity, achievement, excellence, projects, responsibility, personal development.</p>
                                            </div>
                                            <div class="item carddd position-relative pt-3">
                                                <h4>Full Stack , <span class="fw-light
                                        ">Knowledge Academy</span></h4>
                                                <span class="custom-color my-2 d-inline-block ">Dec
                                                    2022 - Dec
                                                    2023</span>
                                                <p class=" m-0">Comprehensive program covering entire web
                                                 development spectrum for creating versatile applications.</p>
                                            </div>
                                            <div class="item carddd position-relative ">
                                                <h4>High School (Tawjihi) , <span class="fw-light
                                        ">Omar Bin Al-Khattab Secondary School</span></h4>
                                               <span class=" custom-color my-2 d-inline-block">My high school GPA is 95.6</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="d-flex haed align-items-center
                            position-relative">
                                            <i class="fas fa-briefcase"></i>
                                            <h3 class="ms-3 fs-5 mb-0">Work Experiences</h3>

                                        </div>
                                        <div class="desc pt-3">
                                            <div class="item carddd position-relative">
                                                <h4> <span class="fw-light
                                        ">Bodybuilding coach</span></h4>
                                              
                                                <p class="pb-3 m-0">Guiding clients in muscle building, tailored workouts, nutrition plans, form correction, motivation, progress tracking, personalized routines, fitness expertise, goal achievement.</p>
                                            </div>
                                            <div class="item carddd position-relative ">
                                                <h4> <span class="fw-light
                                        ">Casher</span></h4>
                                               
                                                <p class=" m-0">Handling transactions, managing cash registers, providing accurate change, processing payments, ensuring financial accuracy, customer service,
                                                 balancing daily earnings, receipt issuance, cash management.</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>

                </div></div>
        </div>
    )
}


export default About;