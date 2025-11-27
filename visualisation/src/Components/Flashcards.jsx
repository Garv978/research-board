import Amritpal from "../assets/Amritpal.png";
import Kanojia from "../assets/Kanojia.png";
import Khosla from "../assets/Khosla.png";

function FlashCard({ 
  title, 
  date, 
  description, 
  img, 
  link 
}) {
  return (
    <a
      href={link}
      className="group block bg-white rounded-xl overflow-hidden 
                 border border-gray-200 shadow-md hover:shadow-xl 
                 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={img}
          alt="Card"
          className="w-full h-full object-cover 
                     transition-transform duration-500 
                     group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {date}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black">
          {title}
        </h3>

        <p className="text-sm text-gray-700 line-clamp-3">
          {description}
        </p>

      </div>
    </a>
  );
}



function FlashCardSection() {
  const cardsData = [
    {
      title: "Fog-cloud centric IoT assisted technologies in healthcare",
      date: "2021-2022",
      description:
        "This project focused on leveraging fog and cloud computing architectures with Internet of Thing ...",
      img: Amritpal,
      link: "https://ieeexplore.ieee.org/document/9168070",
    },
    {
      title: " Biologically Inspired Retinal Prosthesis Based Biomedical",
      date: " 2023-2025",
      description:
        "A biologically inspired retinal prosthesis is a biomedical implant developed to partially restore vision for people who are blind due to retinal di...",
      img: Kanojia,
      link: "https://www.google.com",
    },
    {
      title: "Technology Business Incubator",
      date: "2017-2022",
      description:
        "A Technology Business Incubator (TBI) is an organization that supports early-stage, technology-based startups and knowledge-driven businesses so they can grow into sustainable companies. It provides them wit...",
      img: Khosla,
      link: "https://www.nitj.ac.in/research/TechnologyBusinessIncubator.html",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((card, index) => (
        <FlashCard key={index} {...card} />
      ))}
    </div>
  );
}

export default FlashCardSection;
