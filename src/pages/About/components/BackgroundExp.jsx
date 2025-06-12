const BackgroundExp = () => {
  return (
    <section className="flex flex-col gap-7 bg-my-white text-my-black">
      <article className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-4xl font-semibold text-my-cyan">Related Background</h1>
        <ul className="flex flex-col gap-4">
          <li className="flex justify-between">
            <p>IDCAMP 2024 Back-End Developer JavaScript Beginner</p>
            <p>19/09/2024</p>
          </li>
          <li className="flex justify-between">
            <p>IDCAMP 2024 Back-End Developer JavaScript Intermediate</p>
            <p>10/01/2025</p>
          </li>
          <li className="flex justify-between">
            <p>Coding Camp by DBS Foundation 2025 [Front-End Beginner &mdash; Low Touch]</p>
            <p>08/02/2025</p>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default BackgroundExp;