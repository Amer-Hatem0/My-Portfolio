import React from 'react'
import './Protfolio.css'
import img from './rest.png'
import img2 from './bakery.png'
import img3 from './ramadan.png'
import img4 from './Screenshot 2023-08-23 131459.png'
import img5 from './pro.png'
import img6 from './ssScreenshot 2023-08-23 133528.png'
export default function Protfolio() {
    return (
        <div>
            <div className="a bb overflow-hidden">
                <div className="row d-flex ">

                    <div className="col-lg-12    ">
                        <div className="row ">
                            <div className="title-section text-start text-sm-center">
                                <div className="h1 mydi">
                                    <h1>MY <span>DESIGNS</span></h1></div>
                                <span className="title-bg d-none d-lg-block  ">WEBSITES</span>
                            </div>
                            <div className=" row images my-5 py-5  ">


                                <div className="col-md-4   mb-3">
                                    <a href="https://startling-florentine-6abb58.netlify.app/">
                                        <img src={img} className='img2 ' alt="" />
                                    </a>
                                </div>
                                <div className="col-md-4  mb-3 ">
                                    <a href="https://lustrous-zabaione-546e20.netlify.app/">
                                        <img src={img2} className='img2 ' alt="" />
                                    </a>
                                </div>
                                <div className="col-md-4  mb-3 ">
                                    <a href="https://frabjous-sopapillas-465a72.netlify.app/">
                                        <img src={img3} className='img2 ' alt="" />
                                    </a>
                                </div>
                                <div className="col-md-4  img5 mb-3 ">
                                    <a href="https://starlit-pithivier-25dcd2.netlify.app/">
                                        <img src={img5} className='img2 ' alt="" />
                                    </a></div>
                                <div className="col-md-4  mb-3 ">
                                    <a href="https://bejewelled-smakager-c2041c.netlify.app">
                                        <img src={img4} className='img2 ' alt="" />
                                    </a>
                                </div>

                                <div className="col-md-4  img5 mb-3 ">
                                    <a target='-blank' href="https://drive.google.com/file/d/1S7vhnZ4ztRMUvUIfVl3fe_wFdWLlwDgt/view?usp=sharing">
                                        <img src={img6} className='img2 ' alt="" />
                                    </a></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
