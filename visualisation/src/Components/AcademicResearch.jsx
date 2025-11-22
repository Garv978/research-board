function Box({ link, icon, title }) {
  return (
    <a href={link} className="group block">
      <div
        className="flex flex-col items-center justify-center text-center bg-white shadow-md 
                   rounded-md p-6 transition-all hover:-translate-y-2 hover:shadow-xl 
                   min-h-[250px] max-w-[300px] mx-auto"
      >
        <div className="text-[#0c4da2] text-5xl mb-3">
          <i className={icon}></i>
        </div>

        <h3 className="text-xl font-semibold text-[#0c4da2]">{title}</h3>
      </div>
    </a>
  );
}

export function AcademicResearch() {
  return (
    <div className="min-h-[450px] bg-[#e0e8f2]">
      
      {/* Heading */}
      <div className="flex justify-center">
        <h1
          className="relative font-lora text-4xl md:text-5xl font-extrabold text-black py-5 tracking-wide
                     after:content-[''] after:block after:w-20 after:h-1 after:bg-[#0c4da2] 
                     after:mx-auto after:mt-2"
        >
          Academic Research
        </h1>
      </div>

      {/* Paragraph */}
      <div className="p-10 text-sm md:text-xl font-serif font-medium text-gray-700 ml-[30px] text-left leading-relaxed">
        Dr. B. R. Ambedkar Institute Of Technology, Jalandhar organizes
        Conferences, Seminars and Workshops periodically. These activities and
        forums help expose young minds to the latest innovations and scientific
        trends, thereby generating an interest in research.
        <br />
        <br />
        Students are also encouraged to take up innovative, socially relevant
        research projects. Such projects are funded by various government
        agencies like AICTE, DST, CSIR, etc. The institute has a dedicated
        Research and Development Cell that facilitates research activities and
        promotes collaboration with other institutions and industries. The
        faculty members are actively involved in research and have published
        numerous papers in reputed national and international journals and
        conferences.
      </div>

      {/* 4-Box Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-10 ml-[30px] mr-[30px]">
        <Box link="#" icon="fas fa-file-alt" title="Publications" />
        <Box link="#" icon="fas fa-lightbulb" title="Patents" />
        <Box link="#" icon="fas fa-file-signature" title="Ph.D Regulations & Forms" />
        <Box link="#" icon="fas fa-graduation-cap" title="Ph.D Awarded" />
      </div>

    </div>
  );
}
