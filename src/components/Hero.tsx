const Hero = () => {
  return (
    <section className="container h-[75vh] w-full bg-hero-bg bg-cover bg-no-repeat bg-top object-cover relative z-0 rounded-xl overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black/30 flex justify-center items-center mt-10">
      <div className="relative z-[5] text-center">
        <h1 className="text-5xl text-white font-bold mb-10">
          Adventure is Worthwhile
        </h1>
        <p className="text-white">
          Would you explore nature paradise in the Morocco, let’s find the best
          destination in Morocco with us.
        </p>
      </div>
    </section>
  );
};

export default Hero;
