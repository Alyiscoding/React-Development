import React from 'react';
import { REVIEW } from "../constants"
import xaviour_img from "../assets/xaviour.jpeg"
import customer1_img from "../assets/customer1.jpeg"
import customer2_img from "../assets/customer2.jpeg"
import customer3_img from "../assets/customer3.jpeg"
import customer4_img from "../assets/customer4.jpeg"
import { motion } from 'framer-motion';


const containerVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8
    }
  }
}

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}
[[]]
const Review = () => {
  return (
    <section id='review' className=' container mx-auto mb-8 mt-12 '>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariant}
        viewport={{ once: true }}
        className='flex flex-col'>


        <motion.p
          variants={itemVariant}


          className=' mb-10 text-3xl font-light leading-normal tracking-tighter 
            lg:mx-40 lg:mt-40 lg:text-[3.5rem]'>
          {REVIEW.content}
        </motion.p>

        <motion.div
          variants={itemVariant}
          className=' flex items-center justify-center gap-6'>
          <img src={xaviour_img} alt={REVIEW.name} width={80} height={80}
            className=' rounded-full border' />
          <div className=' tracking-tighter'>
            <h6>{REVIEW.name}</h6>
            <p className=' text-sm text-neutral-500 '>
              {REVIEW.profession}
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariant}
        viewport={{ once: true }}

        className='mt-14 flex flex-col items-center justify-center gap-2 md:flex-row'>
        {[customer1_img, customer2_img, customer3_img, customer4_img].map((customer, index) => (
          <motion.img
            variants={itemVariant}
            key={index} src={customer} alt={customer}
            className=' h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover'
          />
        ))}
      </motion.div>

    </section>
  );
}

export default Review;
