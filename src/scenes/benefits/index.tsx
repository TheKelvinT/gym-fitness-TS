import ActionButton from "@/shared/ActionButton"
import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import {motion} from 'framer-motion'
import React from "react"
import Benefit from "./Benefit"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facillities",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure nostrum vero quibusdam et sit error eos iste, vitae veniam consequuntur mollitia aperiam porro nesciunt eius molestias deserunt possimus alias blanditiis"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure nostrum vero quibusdam et sit error eos iste, vitae veniam consequuntur mollitia aperiam porro nesciunt eius molestias deserunt possimus alias blanditiis"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Experts and Pro Trainers",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure nostrum vero quibusdam et sit error eos iste, vitae veniam consequuntur mollitia aperiam porro nesciunt eius molestias deserunt possimus alias blanditiis"
    },
]

type Props = {
    setSelectedPage:(value:SelectedPage) => void
}


const container ={
    hidden:{},
    visible:{
        transition:{ staggerChildren:0.2}
    },
}




function Benefits({setSelectedPage}: Props) {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADER */}
            <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{once:true, amount: 0.5}} 
            transition={{duration: 1}} 
            variants={{
                hidden:{opacity:0, x:-100},
                visible:{opacity:1, x:0}}
                    
                }
            className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes to get you to your ultimate goal with ease. We provide true care into each and every member. </p>
            </motion.div>
            {/* BENEFITS */}
            <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{once:true, amount: 0.5}} 
            variants={container}
            className="md:flex items-center justify-between gap-8 mt-5">
                {benefits.map((benefit: BenefitType)=>(
                    <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}/>
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 item-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
            <img className="mx-auto"src={BenefitsPageGraphic} alt="benefits-page-graphic" />
            <div>
                {/* Title */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                        <motion.div
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{once:true, amount: 0.5}} 
                        transition={{duration: 1}} 
                        variants={{
                            hidden:{opacity:0, x:100},
                            visible:{opacity:1, x:0}}
                                }>
                            <HText> MILLIONS OF HAPPY MEMBERS GETTING {" "} <span className="text-primary-500">FIT</span></HText>
                        </motion.div>
                    </div>
                </div>
                {/* Descript */}
                <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{once:true, amount: 0.5}} 
                transition={{delay: 0.2, duration: 1}} 
                variants={{
                    hidden:{opacity:0, x: 100},
                    visible:{opacity:1, x:0}}
                        
                    }>
                    <p className="my-5">Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.</p>
                    <p className="mb-5">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </motion.div>
                {/* buitton */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
            </div>
            
        </motion.div>
    </section>
  )
}

export default Benefits