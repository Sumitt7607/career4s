import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import UniversityInsightsSection from "./UniversityInsightsSection";
import { MapPin, Users, Trophy, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import Career4SLogo from "@/components/Career4SLogo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsApp from "@/components/WhatsApp";

/* ===================== TYPES ===================== */
export interface University {
  name: string;
  country: string;
  logo: string;
  ranking: number;
  // studentsCount: string;
  // acceptanceRate: string;
  // tuitionRange: string;
  programs: string[];
  featured?: boolean;
}

/* ===================== DATA ===================== */
const DATA = {
  engineering: {
    canada: ["University of Toronto", "University of Waterloo", "University of British Columbia (UBC)","McGill University","University of Alberta","University of Calgary"],
    uk: ["University of Oxford", "University of Cambridge", "Imperial College London","University College London (UCL)","University of Manchester","University of Edinburgh","University of Sheffield","University of Bristol"],
    usa: ["Massachusetts Institute of Technology (MIT)", "Stanford University", "University of California, Berkeley (UC Berkeley)","California Institute of Technology (Caltech)","Carnegie Mellon University","Georgia Institute of Technology (Georgia Tech)","University of Illinois at Urbana-Champaign (UIUC)","University of Michigan, Ann Arbor","Purdue University College of Engineering","University of Texas at Austin (UT Austin)","University of California, Los Angeles (UCLA)","University of Wisconsin–Madison"],
    australia: ["University of New South Wales (UNSW Sydney)", "The University of Melbourne","The University of Sydney","Monash University","The University of Queensland (UQ)","Australian National University (ANU)","University of Technology Sydney (UTS)","University of Adelaide","RMIT University","Queensland University of Technology (QUT)"],
    germany: ["Technical University of Munich (TUM)", "RWTH Aachen University","Karlsruhe Institute of Technology (KIT)","Technical University of Berlin (TU Berlin)","Dresden University of Technology (TU Dresden)","University of Stuttgart","Technical University of Darmstadt","Humboldt University of Berlin","Ludwig Maximilian University of Munich (LMU Munich)","Friedrich-Alexander University Erlangen-Nuremberg"],
    ireland: ["Trinity College Dublin (TCD)","University College Dublin (UCD)","University College Cork (UCC)","National University of Ireland, Galway (NUIG)","University of Limerick (UL)","Dublin City University (DCU)","Maynooth University","Royal College of Surgeons in Ireland (RCSI)"]
  },
  medical: {
    uk: ["King’s College London", "University of Edinburgh"],
    philippines: ["AMA School of Medicine"],
    russia: ["Moscow State Medical University"],
    georgia: ["Tbilisi State Medical University"],
    kazakhstan: ["Kazakh National Medical University"],
  },
  management: {
    usa: ["Stanford Graduate School of Business — Stanford University", "The Wharton School, University of Pennsylvania (MBA)","Harvard Business School — Harvard University","MIT Sloan School of Management — Massachusetts Institute of Technology","Columbia Business School — Columbia University","Chicago Booth School of Business — University of Chicago","Ross School of Business — University of Michigan",],
    uk: ["London Business School", "University of Oxford – Saïd Business School","University of Cambridge – Judge Business School","London School of Economics (LSE)","Imperial College Business School","Warwick Business School","University of Manchester – Alliance Business School","University of Bath – School of Management","Durham University Business School"],
    canada: ["Rotman School of Management","Ivey Business School","Desautels Faculty of Management","Smith School of Business","Schulich School of Business","Sauder School of Business"],
    france: ["INSEAD","HEC Paris","ESSEC Business School","ESCP Business School","EDHEC Business School"],
    // singapore: ["NUS Business School"],
  },
  "post-graduation": {
    canada: ["University of Toronto", "McGill University","University of British Columbia (UBC)","McMaster University","University of Alberta","University of Waterloo","Western University","Queen’s University","University of Calgary","University of Ottawa"],
    germany: ["Technical University of Munich (TUM)","Ludwig-Maximilians University Munich (LMU)","Heidelberg University","RWTH Aachen University","Free University of Berlin (Freie Universität Berlin)","Humboldt University of Berlin","University of Stuttgart","Karlsruhe Institute of Technology (KIT)","University of Bonn","Technical University of Berlin"],
    australia: ["University of Melbourne","Australian National University (ANU)","University of Sydney","University of New South Wales (UNSW)","Monash University","University of Queensland (UQ)"],
    netherlands: ["University of Amsterdam"],
    sweden: ["Lund University"],
  },
};

/* ===================== FLAG IMAGES ===================== */
const FLAG_IMAGES: Record<string, string> = {
  canada: "https://flagcdn.com/w80/ca.png",
  uk: "https://flagcdn.com/w80/gb.png",
  usa: "https://flagcdn.com/w80/us.png",
  australia: "https://flagcdn.com/w80/au.png",
  germany: "https://flagcdn.com/w80/de.png",
  ireland: "https://flagcdn.com/w80/ie.png",
  philippines: "https://flagcdn.com/w80/ph.png",
  russia: "https://flagcdn.com/w80/ru.png",
  georgia: "https://flagcdn.com/w80/ge.png",
  kazakhstan: "https://flagcdn.com/w80/kz.png",
  france: "https://flagcdn.com/w80/fr.png",
  singapore: "https://flagcdn.com/w80/sg.png",
  netherlands: "https://flagcdn.com/w80/nl.png",
  sweden: "https://flagcdn.com/w80/se.png",
};

/* ===================== UNIVERSITY IMAGES ===================== */
const UNIVERSITY_IMAGES: Record<string, string> = {
  "University of Toronto":
    "/uot.webp",
 "University of Waterloo": "/uw0.webp",
  "University of British Columbia (UBC)": "/ubc.webp",
"McGill University": "/mc.webp",
  "University of Alberta": "/al.webp",
  "University of Calgary":
    "/cal.webp",
    "University of Oxford":"/oxf.jpg",
    "University of Cambridge":"/cam.jpg",
    "Imperial College London":"/imp.jpg",
    "University College London (UCL)":"/ucl.jpg",
    "University of Manchester":"/uom.jpg",
    "University of Edinburgh":"/uoe.jpg",
    "University of Sheffield":"/uos.png",
    "University of Bristol":"/uob.jpeg",
"Massachusetts Institute of Technology (MIT)":"/mit.webp",
"Stanford University":"/su.jpg",
"University of California, Berkeley (UC Berkeley)":"/uoc.jpg",
"California Institute of Technology (Caltech)":"/cit.jpg",
"Carnegie Mellon University":"/cmu.webp",
"Georgia Institute of Technology (Georgia Tech)":"/git.jpg",
"University of Illinois at Urbana-Champaign (UIUC)":"/uiuc.jpg",
"University of Michigan, Ann Arbor":"/uomuk.jpg",
"Purdue University College of Engineering":"/pucoe.jpg",
"University of Texas at Austin (UT Austin)":"/uota.webp",
"University of California, Los Angeles (UCLA)":"/uocl.jpg",
"University of Wisconsin–Madison":"/uow.webp",
"University of New South Wales (UNSW Sydney)":"/unsw.jpg",
"The University of Melbourne":"/uomau.webp",
"The University of Sydney":"/uomsy.jpg",
"Monash University":"/monash.jpg",
"The University of Queensland (UQ)":"/uoq.webp",
"Australian National University (ANU)":"/anu.jpg",
"University of Technology Sydney (UTS)":"/uts.webp",
"University of Adelaide":"/uoal.webp",
"RMIT University":"/rmit.webp",
"Queensland University of Technology (QUT)":"/qut.jpg",
"Technical University of Munich (TUM)":"/munich.webp",
"RWTH Aachen University":"/RWTH Aachen University.jpg",
"Karlsruhe Institute of Technology (KIT)":"/kait.jpg",
"Technical University of Berlin (TU Berlin)":"/tub.webp",
"Dresden University of Technology (TU Dresden)":"/tud.webp",
"University of Stuttgart":"/uostu.jpg",
"Technical University of Darmstadt":"/uostg.webp",
"Humboldt University of Berlin":"/uob.jpg",
"Ludwig Maximilian University of Munich (LMU Munich)":"/lmuuu.jpg",
"Friedrich-Alexander University Erlangen-Nuremberg":"/fau.jpg",
"Trinity College Dublin (TCD)":"/tcd.webp",
"University College Dublin (UCD)":"/uccd.webp",
"University College Cork (UCC)":"/ucc.webp",
"National University of Ireland, Galway (NUIG)":"/nuig.webp",
"University of Limerick (UL)":"/uolm.webp",
"Dublin City University (DCU)":"/dcu.jpg",
"Maynooth University":"/myu.jpg",
"Royal College of Surgeons in Ireland (RCSI)":"/rcsi.webp",
"Stanford Graduate School of Business — Stanford University":"/su.jpg",
"MIT Sloan School of Management — Massachusetts Institute of Technology" :"/mit.webp",
"The Wharton School, University of Pennsylvania (MBA)":"/wharton.jpg",
"Harvard Business School — Harvard University":"/hbs.jpg",
"Columbia Business School — Columbia University":"/columbia univer.jpg",
"Chicago Booth School of Business — University of Chicago":"/chicago.webp",
"Ross School of Business — University of Michigan":"/mich.webp",
"Yale School of Management — Yale University":"/yale.webp",
"London Business School":"/Lbs.jpeg",
"University of Oxford – Saïd Business School":"/said.webp",
"University of Cambridge – Judge Business School":"/jbs.jpg",
"London School of Economics (LSE)":"/lse.webp",
"Imperial College Business School":"/icbs.webp",
"Warwick Business School":"/wbs.avif",
"University of Manchester – Alliance Business School":"/ambs.jpg",
"University of Bath – School of Management":"/uobs.jpg",
"Durham University Business School":"/dubs.jpg",
"Rotman School of Management":"/rotman.webp",
"Ivey Business School":"/ribs.webp",
"Desautels Faculty of Management":"/fdfm.webp",
"Smith School of Business":"/smbs.webp",
"Schulich School of Business":"/ssbs.webp",
"Sauder School of Business":"/sbs.webp",
"INSEAD":"/insead.jpg",
"HEC Paris":"/Hec.webp",
"ESSEC Business School":"/essec.webp",
"ESCP Business School":"/escp.jpg",
"EDHEC Business School":"/edhec.jpeg",
"McMaster University":"/mcmaster.jpg",
"Western University":"/westu.webp",
"Queen’s University":"/queenuniv.png",
"University of Ottawa":"/ottatwa.webp",
"Ludwig-Maximilians University Munich (LMU)":"/lmum.jpg", 
"Heidelberg University":"/heidelberg.webp",
"Free University of Berlin (Freie Universität Berlin)":"/fub.jpg",
"University of Bonn":"/bonnn.webp",
"Technical University of Berlin":"/tubee.webp",
"University of Melbourne":"/mel.webp",

};

/* ===================== NAVBAR ===================== */
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Testimonials", to: "/testimonials" },
    { name: "Admission", to: "/admissionab" },
    { name: "Documents", to: "/doc" },
    { name: "Entrance Exams", to: "/exsec" },
    { name: "Contact", to: "/contact" },
    { name: "Visa process", to: "/visa" },
    { name: "Counselling", to: "/counsellingab" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <Career4SLogo />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 font-medium"
                  : "text-gray-700 hover:text-orange-600 font-medium"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <Link
          to="/contact"
          className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Free Consultation
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium hover:text-orange-600"
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};


/* ===================== UNIVERSITY CARD (UNCHANGED) ===================== */
const UniversityCard = ({
  university,
  index,
}: {
  university: University;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{ y: -6 }}
className="group bg-white rounded-xl border border-orange-100 overflow-hidden cursor-pointer hover:border-orange-400 hover:shadow-xl transition-all p-1"


  >
    {university.featured && (
      <div className="absolute top-2 left-2 z-10">
        <Badge className="bg-orange-500 text-white text-xs">Featured</Badge>
      </div>
    )}

    <div className="absolute top-2 right-2 z-10">
      {/* <Badge variant="secondary" className="text-xs font-bold">
        {university.ranking}
      </Badge> */}
    </div>

<div className="h-32 bg-gradient-to-br from-orange-200 to-orange-50 relative">


<img
  src={university.logo}
  alt={university.name}
  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
             w-40 h-40 rounded-full border-4 border-white shadow-2xl object-cover"
/>


    </div>
<div className="pt-24 p-4">


      <h3 className="font-bold text-sm mb-1 group-hover:text-orange-600">
        {university.name}
      </h3>

      <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
        <MapPin className="w-3 h-3" />
        {university.country}
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
        {/* <div className="flex items-center gap-1">
          <Users className="w-3 h-3 text-orange-500" />
          {university.studentsCount}
        </div> */}
        {/* <div className="flex items-center gap-1">
          <Trophy className="w-3 h-3 text-orange-500" />
          {university.acceptanceRate}
        </div> */}
      </div>

      {/* <div className="flex items-center gap-1 text-xs font-medium mb-3">
        <DollarSign className="w-3 h-3 text-orange-500" />
        {university.tuitionRange}
      </div> */}

  <Button
  className="w-full h-8 text-xs bg-orange-500 hover:bg-orange-600 text-white"
  onClick={() => {
    const phoneNumber = "919650831008"; // replace with your WhatsApp number (country code + number)
    const message = encodeURIComponent("Hi, I want to apply for admission.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  }}
>
  Apply Now
</Button>

    </div>
  </motion.div>
);

/* ===================== PAGE ===================== */
export default function Universities() {
  const { domain, country } = useParams();
  const domainData = DATA[domain as keyof typeof DATA];

  if (!domainData) {
    return (
      <section className="min-h-screen pt-32 px-6">
        <h1 className="text-2xl font-bold">Domain not found</h1>
      </section>
    );
  }

  return (
    <>
    <WhatsApp />
      <Navbar />
     

      <section className=" pt-28 pb-12 bg-gradient-to-b from-[#FFF6EE] to-white">
      
     
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-14 capitalize text-center">
            {domain?.replace("-", " ")} Admissions
          </h1>

          {/* ================= COUNTRY CHOOSING (ANIMATED ONLY HERE) ================= */}
          
          {!country && (
            <>  
<div className="mb-8">
      <Link
        to="/admission-abroad"
        className="inline-flex items-center gap-2 text-orange-600 font-medium hover:underline"
      >
        ← Back to Domains
      </Link>
    </div>



            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.25 },
                },
              }}
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {Object.keys(domainData).map((c) => (
                <motion.div
                  key={c}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05, y: -6 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <NavLink
                    to={`/universities/${domain}/${c}`}
                    className="block bg-white rounded-2xl border p-8 text-center hover:shadow-xl transition"
                  >
                    <img
                      src={FLAG_IMAGES[c]}
                      alt={c}
                      className="w-16 h-16 mx-auto mb-4 rounded-full border shadow-sm"
                    />

                    <h2 className="text-xl font-semibold capitalize">
                      {c}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Explore Universities
                    </p>
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
            </>
          )}

          {/* ================= UNIVERSITIES ================= */}
          {country && (
            <>
                <div className="pt-15 max-w-7xl mx-auto px-4">
  <Link
    to="/"
    className="inline-flex items-center gap-2 text-orange-600 font-medium hover:underline"
  >
    ← Back to Home
  </Link>
</div>
              <NavLink
                to={`/universities/${domain}`}
                className="text-orange-600 font-medium block mb-8"
              >
                ← Back to Countries
              </NavLink>

              <h2 className="text-3xl font-semibold mb-10 text-center capitalize flex items-center justify-center gap-3">
                <img
                  src={FLAG_IMAGES[country]}
                  alt={country}
                  className="w-8 h-8 rounded-full border shadow-sm"
                />
                Universities in {country}
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {domainData[country]?.map((name, index) => (
                  <UniversityCard
                    key={name}
                    index={index}
                    university={{
                      name,
                      country,
                      logo:
                        UNIVERSITY_IMAGES[name] ||
                        UNIVERSITY_IMAGES.default,
                      ranking: 10 + index,
                      // studentsCount: "20k+",
                      // acceptanceRate: "25%",
                      // tuitionRange: "$20k – $50k",
                      programs: ["Engineering", "Management", "Medical"],
                    
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      {country && <UniversityInsightsSection country={country} />}


      <Footer />
    </>
  );
}
