'use client'
import { motion } from 'framer-motion'
import React from 'react'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine'
import BounceAnimatedBtn from '../utils/BounceAnimatedBtn'
import { useAppDispatch } from '@/redux/hooks'
import { toggleVideoModalOpen } from '@/redux/features/videoModalSlice'

const VideoSection3 = () => {
    const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <section>
            <div className="video-8 video-10 bg-dark bg-opacity-25">
                <div className="container">
                    <div className="section-heading-8 section-heading-10">
                        <div className="row align-items-center row-gap-lg-0 row-gap-5">
                        <motion.div 
                            className="col-lg-7"
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            viewport={{once: true}}
                            transition={{
                                duration: 1.5
                            }}
                            >
                                <h2 className="title-anim"><CustomGsapTextSplit children='Watch Our Training In Action'/></h2>
                            </motion.div>
                            <motion.div 
                            className="col-lg-5"
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            viewport={{once: true}}
                            transition={{
                                duration: 1.5
                            }}
                            >
                                    <CustomGsapTextSplitLine className="title-txt title-anim">
                                    At En Motion, we believe personal training is all about you. Our trainers craft workouts that fit your unique needs and goals. They're your partners in wellness, helping you get fit, eat right, and stay balanced. It's not just about working out; it's about building a healthier lifestyle that works for you.
                                    </CustomGsapTextSplitLine>
                            </motion.div>
           
                        </div>
                    </div>
                </div>
                <div className="container d-flex align-items-end">
                    <motion.div 
                    className="video-wrap"
                    initial={{
                        x: -40,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    viewport={{once: true}}
                    transition={{
                        duration: 1.5
                    }}
                    >
                        <span className="vertical-title fade_bottom">Watch video</span>
                    </motion.div>
                    <div className="video-box video-box-animation ms-0">
                        <motion.img 
                        src="img/video-preview.jpg" 
                        alt="Image"
                        initial={{
                            scale: 1.2
                        }}
                        whileInView={{
                            scale: 1
                        }}
                        viewport={{once: true}}
                        transition={{
                            duration: 1.5
                        }}
                        />
                        <div className="btn-box">
                            <BounceAnimatedBtn className="btn-bounce-animated">
                                <a role="button" onClick={openVideoModal} className="circle-btn btn-hover play-btn" data-video-id="wV5yw3cqEs8 "><span className="dot"></span> <span className="txt"><i className="fa-thin fa-play"></i></span></a>
                            </BounceAnimatedBtn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default VideoSection3