import AboutSection from "./about";
import ContactSection from "./contact";
import EducationSection from "./education";
import FooterSection from "./footer";
import Header from "./header";
import ProjectSection from "./projects";

type Props = {}

export default function HomePage({}: Props) {
  return (
    <main>
      <div className="relative">
        <div
          id="content"
          className="px-8 relative flex items-center max-w-[1100px] mx-auto">
          <div className="h-full text-left max-w-full">
            <div className="grid grid-cols-2 gap-2 h-full w-full ">
              <Header />
              <div className="col-span-1 max-[800px]:col-span-2 flex flex-col">
                <AboutSection />
                {/*<ExperiencesSection />*/}
                <ProjectSection />
                <EducationSection/>
                <ContactSection/>
                <FooterSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
