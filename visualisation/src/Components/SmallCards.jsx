import hero from "../assets/R.jpeg";
import Jagdeep from "../assets/Jagdeep.jpg";
import Chakraborty from "../assets/Chakraborty.jpg";
import AnilKumar from "../assets/AnilKumar.jpg";
import AjayKSharma from "../assets/AjayKSharma.jpg";
import GauravKumar from "../assets/GauravKumar.png";
import Nagendra from "../assets/Narendra.webp";

function SmallCard({ title, image, link }) {
  return (
    <a
      className="group block rounded-xl overflow-hidden border border-gray-600 hover:border-black focus:outline-none transition-colors duration-300"
      href={link}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 ">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44 ">
          <img
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl "
            src={image}
            alt={title}
          />
        </div>

        <div className="grow">
          <h3 className="text-xl font-semibold text-black ">{title}</h3>
        </div>
      </div>
    </a>
  );
}

function CardSection() {
  const cards = [
    {
      title: " Establishing Science & Technology Innovation Hub in Jalandhar Cluster",
      image: Jagdeep,
      link: "https://www.google.com",
    },
    {
      title: "Technology Gap study for the Bicycle parts manufacturers cluster at Ludhiana",
      image: Chakraborty,
      link: "https://www.google.com",
    },
    {
      title: " Development of Multi-rating Battery charger for charging station of electric vehicles via solar photovoltaic",
      image: AnilKumar,
      link: "https://www.google.com",
    },
    {
      title: "Special Manpower Development Programme for Chips to System Design (SMDP-C2SD)",
      image: AjayKSharma,
      link: "https://www.google.com",
    },
    {
      title: " Wage discrimination across sectors amidst COVID-19 pandemics: A gendered perspective from the selected northern Indian states",
      image: GauravKumar,
      link: "https://www.google.com",
    },
    {
      title: "Study of general and functional requirements concerning safety and performance of Arthroscopy",
      image: Nagendra,
      link: "https://www.google.com",
    },
  ];

  return (
    <div className="bg-gray-50">
      <h1 className="flex justify-center items-center text-5xl font-lora font-bold pt-[50px]">
        Featured Publications
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  dark:border-neutral-800 max-w-[2000px] mx-auto px-4 py-10">
        {cards.map((card, index) => (
          <SmallCard
            key={index}
            title={card.title}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
      <div className="flex justify-center p-[20px]">
        <div className="px-6 py-3 border-2 border-red-600 text-white font-bold rounded-lg bg-red-500 hover:bg-red-600 transition cursor-pointer text-center">
          SHOW MORE RESEARCH HIGHLIGHTS
        </div>
      </div>
    </div>
  );
}

export default CardSection;
