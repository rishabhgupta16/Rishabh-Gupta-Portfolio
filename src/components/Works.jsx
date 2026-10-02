import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      className='flex'
    >
      <Tilt
        options={{
          max: 12,
          scale: 1,
          speed: 600,
        }}
        className='bg-tertiary p-5 rounded-card sm:w-[360px] w-full h-full card-hover flex flex-col'
      >
        {/* Project Image */}
        <div className='relative w-full h-[220px] overflow-hidden rounded-2xl bg-[#0b0718] flex items-center justify-center'>
          <img
            src={image}
            alt={`${name} project`}
            className='w-full h-full object-contain'
          />

          {/* Project Links */}
          <div className='absolute top-2.5 right-2.5 flex items-center gap-2'>
            {live_demo_link && (
              <button
                type='button'
                onClick={() =>
                  window.open(
                    live_demo_link,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className='bg-[#915EFF] px-2.5 py-1.5 rounded-full text-white text-[10px] font-semibold cursor-pointer transition-transform duration-300 hover:scale-105'
                aria-label={`Open ${name} live demo`}
              >
                Live Demo
              </button>
            )}

            {source_code_link && (
              <button
                type='button'
                onClick={() =>
                  window.open(
                    source_code_link,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110'
                aria-label={`View ${name} source code`}
              >
                <img
                  src={github}
                  alt=''
                  className='w-4 h-4 object-contain'
                />
              </button>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className='mt-5 flex flex-col flex-1'>
          <h3 className='text-white font-bold text-[24px]'>
            {name}
          </h3>

          <p className='mt-2 text-secondary text-[14px] leading-[22px] min-h-[110px]'>
            {description}
          </p>

          {/* Technologies */}
          <div className='mt-auto pt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Work
        </p>

        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 0.8)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects showcase my development skills through practical
          applications built with modern technologies. Each project reflects
          my approach to solving problems, building user-focused experiences,
          and continuously improving as a developer.
        </motion.p>
      </div>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");