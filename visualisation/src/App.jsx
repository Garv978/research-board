import Navbar from "./Components/Navbar";
import UpperHeader from "./Components/UpperHeader";
import Herosection from "./Components/Herosection";
import FlashCardSection from "./Components/Flashcards";
import Footer from "./Components/Footer";
import CardSection from "./Components/Smallcards";
import Statssection from "./Components/Statssection";
import Foot from "./assets/R.jpeg";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />

      <UpperHeader />

      <div className="py-5">
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap list-none text-sm font-sans px-20">
            <li class="flex items-center">
              <a href="https://www.nitj.ac.in/" class="text-gray-800 hover:underline text-xl font-bold">
                Home {'>'}
              </a>
              <span class="mx-2 text-gray-500  text-xl font-bold  "></span>
            </li>

            <li
              class="flex items-center text-gray-800  text-xl font-bold"
              aria-current="page"
            >
              Research {'>'}
            </li>
            <li
              class="flex items-center text-blue-600  text-xl font-bold"
              aria-current="page"
            >
              Research highlights {'>'}
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

      <div>
        <CardSection />
      </div>
      <div className="flex justify-center my-8">
        <div className="px-6 py-3 border-2 border-red-600 text-white font-bold rounded-lg bg-red-500 hover:bg-red-600 transition cursor-pointer text-center">
        SHOW MORE RESEARCH HIGHLIGHTS
        </div>
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
