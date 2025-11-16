import "./App.css";
import FlashCardSection from "./Components/Flashcards";
import Footer from "./Components/Footer";
import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import Directorate from "./Components/Directorate"; 
import Department from "./Components/Department";
import CardSection from "./Components/SmallCards";
import UpperHeader from "./Components/UpperHeader";
import Foot from "./assets/R.jpeg";
function App() {
  return (
    <>
      <Navbar />

      <UpperHeader />

      <div className="py-5">
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap list-none text-sm font-sans px-20">
            <li class="flex items-center">
              <a
                href="https://www.nitj.ac.in/"
                class="text-gray-800 hover:underline text-xl font-bold"
              >
                Home {">"}
              </a>
              <span class="mx-2 text-gray-500  text-xl font-bold  "></span>
            </li>

            <li
              class="flex items-center text-gray-800  text-xl font-bold"
              aria-current="page"
            >
              Research {">"}
            </li>
            <li
              class="flex items-center text-blue-600  text-xl font-bold"
              aria-current="page"
            >
              Research highlights {">"}
            </li>
          </ol>
        </nav>
      </div>

      <Herosection />
      <div className="common__heading  bg-[#0369a0] py-5 text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg">
        RECENT RESEARCH
      </div>

      <div className="b py-10">
        <FlashCardSection />
      </div>

      <hr class="border-t border-gray-300 my-4" />
      <Directorate/>
      <hr class="border-t border-gray-300 my-4" />
      <Department/>
      
      <div className="relative w-full h-[400px]">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.thapar.edu/images/research-banner.jpg)",
          }}
        ></div>
      </div>

      <div>
        <CardSection />
      </div>
      {/* <Statssection /> */}

      <div className="relative w-full h-[500px]">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${Foot})`,
          }}
        ></div>
      </div>

      <Footer />
    </>
  );
}

export default App;
