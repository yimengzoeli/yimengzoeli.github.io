import zoePhoto from "@/assets/zoe-photo.png";

const Introduction = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hi! I'm Zoe!
            </h2>
            <p className="text-lg leading-relaxed">
              I am a professional{" "}
              <span className="text-primary font-semibold">
                marketer
              </span>{" "}
              who is now dedicated to{" "}
              <span className="text-primary font-semibold">
                learning AI
              </span>
              .
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-photo rounded-3xl p-8 md:p-12">
              <img 
                src={zoePhoto}
                alt="Zoe Li - Growth Marketer and AI Practitioner"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
