import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.15, 0.6)}
      className='w-full green-pink-gradient p-[1px] rounded-card shadow-card'
    >
      <div
        options={{
          max: 12,
          scale: 1,
          speed: 600,
        }}
        className='bg-tertiary rounded-card py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-colors duration-300 ease-soft hover:bg-black-100'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a Full Stack Developer focused on building modern, responsive,
        and user-friendly web applications. I work with HTML, CSS,
        JavaScript, and React.js on the frontend, while continuously
        strengthening my backend development skills. I enjoy turning ideas
        into practical web experiences, solving problems, and learning new
        technologies to build better and more scalable applications.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");