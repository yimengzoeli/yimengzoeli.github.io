import WorkCard from "./WorkCard";
import tiktokDashboard from "@assets/截屏2025-07-12 22.30.32_1761319138040.png";
import audiImage from "@assets/AUdi_1761319558798.jpg";
import weeeImage from "@assets/截屏2025-10-24 03.47.18_1761319558784.png";

const WorkSection = () => {
  const works = [
    {
      title: "Grow",
      subtitle: "like a marketer",
      description: "A month-long livestream experiment that led to $10.7K GMV on Super Brand Day.",
      image: tiktokDashboard,
      link: "See the full case"
    },
    {
      title: "Position",
      subtitle: "like a brand strategist",
      description: "Audi EVs repositioned for China. From \"premium\" to tech-forward performance.",
      image: audiImage,
      link: "See the full case"
    },
    {
      title: "Build",
      subtitle: "like a product designer",
      description: "Last-mile redesign, live tracking, share links, masked contact, receipt check.",
      image: weeeImage,
      link: "See the full case"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A marketer builds beyond marketing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how my previous work spans building, positioning, and growth across the product lifecycle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
