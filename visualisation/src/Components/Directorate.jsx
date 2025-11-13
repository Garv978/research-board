import "./Directorate.css";

function Directorate() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-7 grid-rows-5 gap-4relative w-full h-[450px] bg-[#0c4da2] p-[50px]">
          <div className="col-span-2 row-span-5 flex justify-center items-start p-2 ">
            <div className=" shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center ml-[80px]">
              <a
                href="/faculty/dr-bernaurdshaw-neppolian/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-2 border-white"
                  src="https://v1.nitj.ac.in/images/faculty/20050251101.jpg"
                  alt="Prof. Rohit Mehra"
                />
              </a>

              <div className="mt-4 text-center">
                <h2 className="text-lg md:text-xl font-bold mb-1 font-lora text-white">
                  <a
                    href="/faculty/dr-bernaurdshaw-neppolian/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prof. Rohit Mehra
                  </a>
                </h2>
                <h3 className="text-md text-[#aeb6cd] mb-1">Dean (Research)</h3>
                <h3 className="text-md mb-1 text-[#aeb6cd]">
                  Phone: 01815037421
                </h3>
                <h3 className="text-md text-[#aeb6cd]">
                  E-Mail: drc@nitj.ac.in
                </h3>
              </div>
            </div>
          </div>

          <div className="col-span-5 col-start-3 font-greatvibes text-white text-4xl md:text-5xl font-openSans font-semibold drop-shadow-lg">
            Directorate of Research
          </div>
          <div className="col-span-2 row-span-4 col-start-6 row-start-2">
            <br></br>
            <ul className="list-none space-y-2">
              <li className="relative pl-5 before:absolute before:left-0 before:content-['→'] font-oswald  text-white">
                Projects
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:content-['→'] font-oswald  text-white">
                Investments in research infrastructure
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:content-['→'] font-oswald  text-white">
                Development of new knowledge resources
              </li>
            </ul>
          </div>
          <div className="col-span-3 row-span-4 col-start-3 row-start-2  text-white font-oswald ">
            Research is a cornerstone of the academic and learning activities at
            Dr. B. R. Ambedkar National Institute of Technology Jalandhar
            (NITJ). Over the years, numerous research-focused initiatives have
            been undertaken to foster a strong research culture. From the early
            days of NITJ, the institute’s leadership has emphasized the
            importance of nurturing a research mindset within the
            teaching–learning process. This strategic focus has guided the
            institute in making significant investments in research
            infrastructure and resources, enabling the creation of new knowledge
            and innovative solutions to contemporary challenges.
          </div>
        </div>
      </div>
    </>
  );
}

export default Directorate;
