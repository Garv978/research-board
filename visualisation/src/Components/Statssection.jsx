
function Smallcard({ value, description }) {
  return (
    <div className="text-center p-8 rounded-xl border-2 border-red-100 hover:border-red-200 transition-all duration-300 card-hover bg-gradient-to-br from-white to-red-50">
      <div className="text-5xl font-bold gradient-text mb-4 pulse-animation">
        {value}
      </div>
      <p className="text-gray-700 font-medium text-lg">
        {description}
      </p>
    </div>
  );
}

function Statssection() {
  return (
       <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Smallcard value="24/7" description="Fast Outbreak Detection" />
                <Smallcard value="85%" description="Cost Reduction to Traditional Systems" />
                <Smallcard value="100+" description="Working Locations Worldwide" />
            </div>
        </div>
    </div>
  );
}

export default Statssection;