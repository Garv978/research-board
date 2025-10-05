import hero from "../assets/R.jpeg";
import Amritpal from "../assets/Amritpal.png";
import Jagdeep from "../assets/Jagdeep.png";
import Kuwarpal from "../assets/Kuwarpal.png";
function FlashCard({ title, date, description, departments, img, link}) {
  return (
    <a className="group flex flex-col bg-white border border-gray-800 shadow-2xs rounded-xl max-w-sm focus:outline-none 
transition-transform duration-300 hover:scale-105"
    href={link}>
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="w-full object-cover rounded-t-xl"
          src={img}
          alt="Card Image"
        />
      </div>
      <div className="p-4 md:p-5">
        <p className="mt-1 text-xs uppercase text-black ">
          {date}
        </p>
        <h3 className="mt-2 text-lg font-semibold  text-black ">
          {title}
        </h3>
        <p className="mt-1 text-black text-sm">
          {description}
        </p>
        <p className="mt-2 text-white bg-black text-base font-semibold px-3 py-1 rounded-full inline-block">
          {departments.join(" | ")}
        </p>
      </div>
    </a>
  );
}


function FlashCardSection() {
  const cardsData = [
    {
      title: "Fog-cloud centric IoT assisted technologies in healthcare",
      date: "2020-2022",
      description:
        "This project focused on leveraging fog and cloud computing architectures with Internet of Thing ...",
      departments: ["Department of Computer Science and Engineering"],
      img: Amritpal,
      link: "https://www.google.com",
    },
    {
      title: "An intelligent network analyzer cum patcher for advanced security hardening of organizational networks",
      date: "2024-09-27",
      description:
        "automated solution that continuously monitors, detects, and remediates network vulnerabilities tol...",
      departments: ["Department of Computer Science and Engineering"],
      img: Jagdeep,
      link: "https://www.google.com",
    },
    {
      title: "CA lightweight robust path-planning scheme for multi-UAVs Based on Gravitational Potential Field",
      date: "Feb 2024-Feb 2027",
      description:
        "efficiently guides multiple UAVs through dynamic environments by calculating attractive and repulsive vi...",
      departments: ["Department of Computer Science and Engineering"],
      img: Kuwarpal,
      link: "https://www.google.com",
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
