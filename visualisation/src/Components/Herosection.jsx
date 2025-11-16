// import hero from '../assets/R.jpeg';

function Herosection() {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            // "url(https://www.nitj.ac.in/today/assets/header2.webp)",
            "url(https://www.iitb.ac.in/sites/www.iitb.ac.in/files/styles/banner_style_low_pivot/public/2024-02/fhgfhfgh.jpg?itok=6I-F_mrV)",
        }}
      ></div>
    </div>
  );
}

export default Herosection;
