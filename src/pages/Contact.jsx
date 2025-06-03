const Contact = () => {
  return (
    <section id="contact" className="flex justify-center items-center min-h-screen bg-white">
      <h1 className="text-4xl md:text-6xl">Contact</h1>
    </section>
  )
}

Contact.motion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { x: 1000 },
  transition: { duration: 0.5, ease: "easeInOut" }
}

export default Contact;