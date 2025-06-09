const ContactBrief = () => {
  return (
    <section id="about" className="w-full min-h-dvh flex justify-center text-my-black">
      <article className="w-[80%] flex flex-col gap-2 py-20 border-t border-dashed border-my-cyan">
        <h1 className="text-3xl md:text-4xl font-semibold text-my-cyan">Get in Touch</h1>
        <p>
          Interesting in my works? Want to collaborate or even
          hire me to your project? You can message me on one of the links
          below. Let's catch up!
        </p>
        <div className="flex gap-4 text-4xl text-my-cyan mt-3">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-regular fa-envelope"></i>
          <i className="fa-brands fa-instagram"></i>
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