import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {}

  const handleSubmit = (e) => {}

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">  
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText} >Contact.</h3>
        <label class="flex flex-col">
          <p class="text-white font-extrabold text-xl">
            Jezzon Kyle D. Telebanco
          </p>
        </label>
        <label class="flex flex-col">
          <p class="text-white font-medium">
            Email: jktelebanco@gmail.com
          </p>
        </label>
        <label class="flex flex-col">
          <p class="text-white font-medium">
            LinkedIn: https://www.linkedin.com/in/jezzon-telebanco-5310a1275/
          </p>
        </label>
        <label class="flex flex-col">
          <p class="text-white font-medium">
            Phone Number: 09293982047 / 09150427329
          </p>
        </label>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")