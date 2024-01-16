import React, { Fragment } from 'react'
// import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'

import { motion } from 'framer-motion'
import Product from "../Products/Product"
import Program from "./../Program/Program"


const product = {
    name: "Blue Tshirt",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
    price: "rs 300",
    _id: "Wrohit",
};

const transition = { type: 'spring', duration: 3 }
const mobile = window.innerWidth <= 768 ? true : false;



const Hero = () => {

    return (
        <Fragment>
            <div className="hero" id='home'>
                <div className="blur hero-blur"></div>
                <div className="left-h">
                    {/* <Header /> */}
                    {/* the best add */}
                    <div className="the-best-ad">
                        <motion.div
                            initial={{ left: mobile ? "178px" : '238px' }}
                            whileInView={{ left: '8px' }}
                            transition={{ ...transition, type: 'tween' }}

                        ></motion.div>
                        <span>the best fitness club in Itahari</span>
                    </div>
                    {/* Hero Heading  */}
                    <div className="hero-text">
                        <div><span className='stroke-text'>Shape </span>
                            <span>Your</span></div>
                        <div><span>Ideal Body</span></div>
                        <div><span> Here we will help you to shape and build your ideal body and live up your life to fullest</span>

                        </div>
                    </div>
                    {/* Fegures */}
                    <div className="figures">
                        <div>
                            <span>
                                <NumberCounter end={1000} start={100} delay='8' preFix="+" />
                            </span>
                            <span>Proten Products</span>
                        </div>
                        <div>
                            <span>
                                <NumberCounter end={80} start={48} delay='4' preFix="+" />
                            </span>
                            <span>OutFits</span></div>
                        <div>
                            <span>
                                <NumberCounter end={27} start={0} delay='2' preFix="+" />
                            </span>
                            <span>Expert coach</span></div>
                    </div>
                    {/* hero butten */}
                    <div className="hero-buttons">
                        <buttons className="btn">Get Started</buttons>
                        <buttons className="btn">Learn More</buttons>

                    </div>

                </div>

                {/* Right side */}
                <div className="right-h">
                    <button className='btn'>Join Now</button>


                    <motion.div
                        initial={{ right: "-1rem" }}
                        whileInView={{ right: "4rem" }}
                        transition={transition}
                        className="heart-rate">
                        <img src={Heart} alt="" />
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </motion.div>


                    {/* hero image */}
                    <img src={hero_image} alt="" className='hero-image' />
                    <motion.img
                        initial={{ right: '37rem' }}
                        whileInView={{ right: '20rem' }}
                        transition={transition}


                        src={hero_image_back} alt="" className='hero-image-back' />


                    {/*  calories */}
                    <motion.div
                        initial={{ right: "37rem" }}
                        whileInView={{ right: "28rem" }}
                        transition={transition}
                        className="calories">
                        <img src={Calories} alt="" />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 kcal</span></div>
                    </motion.div>
                </div>
            </div>

            <Program Program={Program} />

            {/* products start  */}
            <div className="Products" id="products">
                <div className="product-header">
                    <span className='stroke-text'>Explore </span>
                    <span>Our</span>
                    <span className='stroke-text'>Products </span>

                </div>
            </div>
            {/* products start  */}

            <div className="container" id='container'>
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />

                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>


        </Fragment>





    )
}

export default Hero