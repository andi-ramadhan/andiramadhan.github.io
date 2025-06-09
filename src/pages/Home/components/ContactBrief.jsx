import { motion } from "framer-motion";
import { NavLink } from "react-router";

const ContactBrief = () => {
  const socialMediaIcon = [
    { icon:"fa-brands fa-linkedin", link:"https://www.linkedin.com/in/andi-fajar-ramadhan/" },
    { icon:"fa-brands fa-whatsapp", link:"https://wa.me/6281291678841" },
    { icon:"fa-regular fa-envelope", link:"mailto:ramadhanfajar.ara@gmail.com?subject=Interested%20in%20Your%20Works&body=Hi%20Andi!%0A%0AI'm%20interested%20to%20hire/collaborate%20with%20you%20."},
    { icon:"fa-brands fa-instagram", link:"https://www.instagram.com/araru_ra/" },
  ]

  return (
    <section id="about" className="w-full min-h-[80dvh] flex justify-center text-my-black">
      <article className="w-[80%] md:w-[40%] flex flex-col md:items-center gap-2 md:gap-8 pt-20 md:pt-40 pb-20 border-t-2 border-dashed border-my-cyan">
        <motion.h1
          initial= {{ opacity: 0, y: 20 }}
          whileInView= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4}}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-my-cyan"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial= {{ opacity: 0, y: 20 }}
          whileInView= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5}}
          viewport={{ once: true }}
          className="md:max-w-[70%] md:text-center text-pretty md:text-lg"
        >
          Interested in my works? Want to collaborate or hire me for your project or company?
          You can message me on the links below. Let's catch up!
        </motion.p>
        <div className="flex gap-4 text-4xl text-my-cyan mt-3">
          {socialMediaIcon.map((icon, idx) => (
          <NavLink key={idx} to={icon.link} target="_blank">
            <motion.i
              key={idx}
              className={icon.icon}
              initial= {{ opacity: 0, y: 20 }}
              whileInView= {{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.7 + idx * 0.1,
              }}
              viewport={{ once: true }}
            ></motion.i>
          </NavLink>
          ))}
        </div>
      </article>
      <div className="absolute bottom-15 text-center text-sm opacity-50">
        <p>Copyright &copy; 2025 Andi Fajar Ramadhan</p>
        <p>All rights reserved</p>
      </div>      
    </section>
  )
}

export default ContactBrief;