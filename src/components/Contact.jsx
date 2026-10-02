import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rishabh Gupta",
          from_email: form.email,
          to_email: "rishabhh1603@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);

          alert(
            "Thank you for reaching out! I'll get back to you as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-card'
      >
        <p className={styles.sectionSubText}>Get in touch</p>

        <h3 className={styles.sectionHeadText}>
          Contact Me.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>

            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your name'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-control outline-none border-none font-medium focus:ring-1 focus:ring-accent/60'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>

            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-control outline-none border-none font-medium focus:ring-1 focus:ring-accent/60'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>

            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write your message here...'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-control outline-none border-none font-medium focus:ring-1 focus:ring-accent/60'
            />
          </label>

          <div className='flex flex-wrap items-center justify-between gap-5'>
            <button
              type='submit'
              disabled={loading}
              className='bg-tertiary py-3 px-8 rounded-control w-fit text-white font-bold shadow-md shadow-primary hover:bg-accent hover:shadow-glow-accent disabled:opacity-60 disabled:cursor-not-allowed'
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <div className='flex items-center gap-4'>
              <a
                href='https://github.com/rishabhgupta16'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Rishabh Gupta GitHub'
                title='GitHub'
                className='w-11 h-11 rounded-full bg-tertiary flex items-center justify-center text-white text-[22px] transition-all duration-300 hover:bg-accent hover:scale-110'
              >
                <FaGithub />
              </a>

              <a
                href='https://www.linkedin.com/in/rishabh-gupta-dev/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Rishabh Gupta LinkedIn'
                title='LinkedIn'
                className='w-11 h-11 rounded-full bg-tertiary flex items-center justify-center text-white text-[22px] transition-all duration-300 hover:bg-accent hover:scale-110'
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");