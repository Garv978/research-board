function QuickElement({ link, icon }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className={`fa-brands ${icon} text-[21px] hover:text-yellow-300`}></i>
    </a>
  );
}

function Linkelement({ link, text }) {
  return (
    <a
      href={link}
      target="_blank"
      className="hover:text-yellow-300 hover:underline"
    >
      {text}
    </a>
  );
}

function Footer() {
  return (
    <>
      <div class="flex flex-col justify-between bg-slate-800 text-white lg:flex-row lg:px-20">
        <div class="flex basis-1/3 flex-col border-y-gray-300 p-[25px] lg:border-r lg:border-zinc-400">
          <div class="flex flex-row items-center gap-x-[10px] pb-3">
            {" "}
            <img
              src="https://th.bing.com/th/id/ODF.7wir8lEvM1yNU-Gzu6A2nA?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
            <p class="font-semibold text-white lg:text-[20px]">
              Dr B R Ambedkar National Institute of Technology Jalandhar
            </p>
          </div>


          <div class="p-[20px]">
            <div class="pb-[6px] lg:w-[85%]">
              <i class="fas fa-location-dot pr-[8px]"></i>
              <span class="opacity-90">
                G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008
              </span>
            </div>
            <div class="align-center flex flex-row pb-[14px]">
              <i class="fas fa-phone mt-1 pr-[8px]"></i>
              <h3 class="opacity-90">
                +91-0181-5037855, 2690301, 2690453, 3082000
              </h3>
            </div>
            <div id="social-links" class="flex flex-col bg-slate-800">
              <div class="flex flex-row gap-10 mt-4">
                  <QuickElement
                    link="https://www.facebook.com/NITJofficial/"
                    icon="fa-facebook"
                  />
                  <QuickElement
                    link="https://www.instagram.com/nitjofficial/?hl=en"
                    icon="fa-instagram"
                  />
                  <QuickElement
                    link="https://twitter.com/NITJofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    icon="fa-twitter"
                  />
                  <QuickElement
                    link="https://in.linkedin.com/school/dr-b-r-ambedkar-national-institute-of-technology-jalandhar-official/"
                    icon="fa-linkedin"
                  />
                  <QuickElement
                    link="https://www.youtube.com/c/NITJOfficial"
                    icon="fa-youtube"
                  />
                </div>
              </div>
            </div>
          </div>
        <div class="basis-2/3 p-[25px]" id="quicklinks">
          <h2 class="my-1 text-xl font-semibold">Quick Links</h2>
          <div class="grid md:grid-cols-4 grid-cols-2 gap-10 p-15">
                      <div className="flex basis-1/4 flex-col text-[11px] lg:text-[14px] space-y-1">
            <Linkelement link="https://nitj.ac.in/template/index.html?id=6433e06be7b7ce1ef620fd53?category=notice" text="Academic Calender" />
            <Linkelement link="/admin/Contact.html" text="Academic Section Officials" />
            <Linkelement link="/admissions/index.html#btech" text="Admission" />
            <Linkelement link="https://www.nitj.ac.in/template/index.html?id=651e908479c68ff6aaa9df9e?category=newpage" text="Annual Reports" />
            <Linkelement link="/admin/administration.html" text="Deans" />
            <Linkelement link="https://www.nitj.ac.in/template/index.html?id=6551f252a7c0e1110f0f7882?category=newpage" text="List of Holidays" />
            <Linkelement link="https://www.nitj.ac.in/template/index.html?id=64cb8905f9a66f2de548282f?category=newpage" text="Minutes of Meeting" />
            <Linkelement link="https://www.nitj.ac.in/template/index.html?id=64faf68538ceda75f04478fe?category=newpage" text="NIT Act and Statutes" />
            <Linkelement link="https://www.nitj.ac.in/NITJ-Compendium/" text="NITJ Compendium" />
            <Linkelement link="https://www.nitj.ac.in/template/index.html?id=650a7d8fbce5d4cbc4fba0ef?category=newpage" text="Proformas (Bilingual)" />
            <Linkelement link="https://www.nitj.ac.in/admin/ranking.html" text="Rankings" />
            <Linkelement link="https://www.nitj.ac.in/template/index.html?id=64ae4b97a5e16718759c7e9c?category=newpage" text="Rules/Policies" />
            <Linkelement link="https://www.nitj.ac.in/admin/rti-cell.html" text="RTI Cell" />
            <Linkelement link="/admin/UMC.html" text="UMC Rules" />
          </div>

          {/* Column 2 */}
          <div className="flex basis-1/4 flex-col text-[11px] lg:text-[14px] space-y-1">
            <Linkelement link="https://www.nitj.ac.in/template/index.html?id=654cc416a7c0e1110ff06af5?category=newpage" text="Other Charges Payment Link" />
            <Linkelement link="https://www.nitj.ac.in/ITEP/" text="National Council for Technical Education-ITEP" />
            <Linkelement link="https://www.nitj.ac.in/other/nisp" text="National Innovation and Startup Policy (NISP)" />
            <Linkelement link="http://www.nitcouncil.org.in/" text="Council of NITs" />
            <Linkelement link="https://v1.nitj.ac.in/GIAN/index.html" text="GIAN" />
            <Linkelement link="https://www.ugc.gov.in" text="UGC" />
            <Linkelement link="https://nitj.ac.in/files/1739772482337-Dr%20B%20R%20Ambedkar%20NIT%20Jalandhar.pdf" text="NIRF" />
            <Linkelement link="https://www.serbonline.in/SERB/HomePage" text="SERB" />
            <Linkelement link="https://www.vlab.co.in/" text="Virtual labs" />
            <Linkelement link="https://igod.gov.in/" text="GOI Web Directory" />
            <Linkelement link="https://nitj.irins.org/" text="IRINS Instance of NITJ (VIDWAN)" />
            <Linkelement link="https://www.nitj.ac.in/nitj_files/links/salientfeatures_Highereducation_final-merged_73472.pdf" text="National Education Policy 2020" />
          </div>

          {/* Column 3 */}
          <div className="flex basis-1/4 flex-col text-[11px] lg:text-[14px] space-y-1">
            <Linkelement link="http://xceed.nitj.ac.in/classrooms" text="Classroom Information" />
            <Linkelement link="http://xceed.nitj.ac.in/timetable" text="Institute Timetable" />
            <Linkelement link="https://nitj.ac.in/admin/OATC.html" text="Online Application for Transcripts and Certificates" />
            <Linkelement link="https://nitj.ac.in/admin/Oavd.html" text="Online Application for Verification of Degree" />
            <Linkelement link="https://nitj.ac.in/template/index.html?id=660e3243b7c092452508e69a?category=newpage" text="Library Resources" />
            <Linkelement link="https://drive.google.com/drive/folders/1jTvMxunYARWam0_Ye6oOlcw5VGhkCYiY?usp=sharing" text="New Criminal Laws" />
            <Linkelement link="https://www.nitj.ac.in/template/index.html?id=666161b6deaa374518e51e76?category=newpage" text="Standard Operating Procedures (SOPs)" />
            <Linkelement link="https://www.nitj.ac.in/erp/modules/other/equipment_booking/all_equipments" text="List of Equipments" />
            <Linkelement link="https://www.nitj.ac.in/template/index.html?id=6720726cb4453cb8a6f7c674?category=newpage" text="STUDY IN INDIA" />
          </div>

          {/* Column 4 */}
          <div className="flex basis-1/4 flex-col text-[11px] lg:text-[14px] space-y-1">
            <Linkelement link="https://nitj.ac.in/research/BIS.html" text="Academic BIS Dashboard" />
            <Linkelement link="https://www.nitj.ac.in/nitj_files/downloads/Annual_Property_Return_16113012632.pdf" text="Annual Property Return" />
            <Linkelement link="https://cghs.nic.in/reports/view_hospital.jsp" text="CGHS Empanelled Hospitals" />
            <Linkelement link="https://www.mohfw.gov.in/documents/csma" text="CS MA Empanelled Hospitals" />
            <Linkelement link="https://nitj.ac.in/files/1748511822945-Joining SOP for New Faculty/Staff.pdf" text="Joining SOP for New Faculty/Staff" />
            <Linkelement link="https://www.nitj.ac.in/nitj_files/links/TA_DA_Guidelines_80802.pdf" text="TA/DA Rules" />
            <Linkelement link="https://www.istem.gov.in/login" text="I-STEM" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
