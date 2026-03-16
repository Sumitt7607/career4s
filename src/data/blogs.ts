import blogUk from "@/assets/blog-uk.jpg";
import blogUsa from "@/assets/blog-usa.jpg";
import blogCanada from "@/assets/blog-canada.jpg";
import blogGermany from "@/assets/blog-germany.jpg";
import blogAustralia from "@/assets/blog-australia.jpg";
import blogScholarship from "@/assets/blog-scholarship.jpg";

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  content: string[];
}

export const blogs: Blog[] = [
  {
    id: "study-in-uk",
    title: "Complete Guide to Studying in the UK in 2026",
    excerpt: "Everything you need to know about UK universities, visa process, and student life in Britain.",
    category: "Destination Guide",
    image: blogUk,
    date: "March 10, 2026",
    author: "Priya Sharma",
    readTime: "8 min read",
    content: [
      "The United Kingdom remains one of the most popular destinations for international students. With world-renowned universities like Oxford, Cambridge, and Imperial College London, the UK offers an unparalleled academic experience.",
      "UK universities typically offer shorter degree programs compared to other countries. A bachelor's degree takes 3 years, while a master's program is usually completed in just 1 year. This means you save both time and money.",
      "The UK Student Visa (formerly Tier 4) requires an unconditional offer from a licensed institution, proof of English proficiency (IELTS 6.0-7.0), and financial evidence showing you can support yourself. The visa costs approximately £363.",
      "Living costs vary significantly across the UK. London is the most expensive city, where students spend around £1,300-£1,500 per month. Cities like Manchester, Birmingham, and Edinburgh offer more affordable options at £900-£1,100 per month.",
      "The Graduate Route visa allows international students to stay and work in the UK for 2 years after completing their degree (3 years for PhD graduates). This is an excellent opportunity to gain international work experience.",
      "Popular courses among Indian students include Business & Management, Engineering, Computer Science, Data Science, and Healthcare. Many UK universities also offer scholarships specifically for international students, such as the Chevening Scholarship and Commonwealth Scholarship.",
    ],
  },
  {
    id: "study-in-usa",
    title: "Why the USA Is Still the #1 Choice for Students",
    excerpt: "Discover why American universities continue to attract millions of international students every year.",
    category: "Visa Guide",
    image: blogUsa,
    date: "March 5, 2026",
    author: "Rahul Verma",
    readTime: "10 min read",
    content: [
      "The United States hosts over 1 million international students annually, making it the world's top destination for higher education. With over 4,000 accredited institutions, the variety of programs available is unmatched.",
      "American universities follow a flexible education system. Unlike many countries, US universities allow you to explore different subjects before declaring a major, usually in your second year. This flexibility is perfect for students who want to explore their interests.",
      "The F-1 student visa is the most common visa for international students. You'll need an I-20 form from your university, proof of financial support, and a valid passport. The visa interview at the US embassy is a crucial step — prepare thoroughly!",
      "Tuition costs vary widely: public universities charge $20,000-$35,000 per year for international students, while private universities can cost $50,000-$80,000. However, many universities offer generous financial aid and merit-based scholarships.",
      "OPT (Optional Practical Training) allows students to work in the US for 12 months after graduation, with STEM graduates eligible for a 36-month extension. This provides valuable work experience and potential pathways to H-1B sponsorship.",
      "Top states for international students include California, New York, Texas, Massachusetts, and Illinois. Each offers unique advantages in terms of job markets, cultural diversity, and quality of life.",
    ],
  },
  {
    id: "study-in-canada",
    title: "Canada: The Most Welcoming Country for Students",
    excerpt: "Learn about Canada's immigration-friendly policies and top-ranked universities for international students.",
    category: "Immigration",
    image: blogCanada,
    date: "February 28, 2026",
    author: "Ananya Patel",
    readTime: "7 min read",
    content: [
      "Canada has emerged as a top destination for international students, thanks to its welcoming immigration policies, high quality of life, and affordable education compared to the US and UK.",
      "Canadian universities like the University of Toronto, UBC, and McGill consistently rank among the world's best. The country offers excellent programs in STEM, Business, Healthcare, and Environmental Sciences.",
      "The study permit process requires an acceptance letter from a Designated Learning Institution (DLI), proof of funds (approximately CAD $10,000-$11,000 per year plus tuition), and a clean background check.",
      "One of Canada's biggest advantages is the Post-Graduation Work Permit (PGWP), which allows graduates to work for up to 3 years. This work experience can lead to permanent residency through the Canadian Experience Class (CEC) or Provincial Nominee Programs.",
      "Tuition fees for international students range from CAD $20,000-$40,000 per year for undergraduate programs. Graduate programs may cost less. Many provinces also offer health insurance coverage for international students.",
      "Cities like Toronto, Vancouver, Montreal, and Ottawa offer vibrant multicultural communities. Canada's Express Entry system makes it one of the easiest countries to transition from student to permanent resident.",
    ],
  },
  {
    id: "study-in-germany",
    title: "Study in Germany for Free: Complete Tuition Guide",
    excerpt: "Yes, you can study in Germany with zero tuition fees! Here's how to make it happen.",
    category: "Scholarships",
    image: blogGermany,
    date: "February 20, 2026",
    author: "Vikram Singh",
    readTime: "9 min read",
    content: [
      "Germany is unique among top study destinations because most public universities charge no tuition fees — even for international students! You only pay a small semester contribution of €150-€350, which often includes a public transport pass.",
      "German universities are renowned for engineering, automotive technology, computer science, and research. Institutions like TU Munich, RWTH Aachen, and Heidelberg University are globally recognized.",
      "While many master's programs are taught in English, knowing German gives you a significant advantage for daily life and employment. Many universities offer free German language courses for international students.",
      "The German student visa requires an admission letter, proof of financial resources (€11,208 in a blocked account), health insurance, and academic qualifications. The visa process is straightforward but requires careful documentation.",
      "Germany's strong economy means excellent job prospects after graduation. The 18-month job seeker visa allows graduates to stay and find employment. The country has a particular demand for engineers, IT professionals, and healthcare workers.",
      "Living costs in Germany are quite reasonable: €850-€1,200 per month in most cities. Munich is the most expensive, while cities like Leipzig, Dresden, and Cologne offer great value with vibrant student communities.",
    ],
  },
  {
    id: "study-in-australia",
    title: "Australia: Sun, Surf, and World-Class Education",
    excerpt: "Explore why Australia combines the best lifestyle with exceptional academic opportunities.",
    category: "Student Life",
    image: blogAustralia,
    date: "February 15, 2026",
    author: "Meera Joshi",
    readTime: "6 min read",
    content: [
      "Australia is home to 7 of the world's top 100 universities and offers a unique combination of academic excellence, beautiful landscapes, and a relaxed lifestyle that attracts over 750,000 international students.",
      "The Group of Eight (Go8) universities — including the University of Melbourne, ANU, and University of Sydney — are Australia's most prestigious institutions. They offer cutting-edge research opportunities and strong industry connections.",
      "Australian student visas (subclass 500) allow you to work up to 48 hours per fortnight during term and unlimited hours during breaks. This helps significantly with living expenses.",
      "Tuition fees range from AUD $20,000 to $45,000 per year depending on the course and university. The Australian government also offers scholarships like the Australia Awards and Research Training Program.",
      "The Temporary Graduate visa (subclass 485) allows graduates to work in Australia for 2-4 years after completing their studies. This is an excellent pathway to gaining international experience and potentially permanent residency.",
      "Cities like Melbourne, Sydney, Brisbane, and Perth consistently rank among the world's most livable cities. The Australian lifestyle — with its beaches, outdoor activities, and multicultural food scene — makes studying there an unforgettable experience.",
    ],
  },
  {
    id: "scholarships-guide",
    title: "Top 10 Scholarships for Indian Students in 2026",
    excerpt: "A comprehensive list of fully-funded scholarships that can make your study abroad dream a reality.",
    category: "Scholarships",
    image: blogScholarship,
    date: "February 8, 2026",
    author: "Arjun Mehta",
    readTime: "12 min read",
    content: [
      "Studying abroad doesn't have to break the bank. There are numerous fully-funded and partially-funded scholarships available for Indian students. Here are the top 10 opportunities you should consider.",
      "1. Chevening Scholarship (UK) — Fully funded by the UK government, covering tuition, living expenses, and travel. It's available for master's programs and is highly competitive with only a 2% acceptance rate.",
      "2. Fulbright-Nehru Fellowship (USA) — One of the most prestigious scholarships for Indian students, covering tuition, living stipend, health insurance, and airfare for master's and doctoral programs.",
      "3. DAAD Scholarship (Germany) — The German Academic Exchange Service offers scholarships for various academic levels. Monthly stipends range from €861 for graduates to €1,200 for doctoral candidates.",
      "4. Australia Awards Scholarship — Fully funded by the Australian government, covering tuition, return airfare, living allowance, and health insurance. Priority fields include human development, economic growth, and sustainability.",
      "5. Erasmus Mundus Joint Masters (Europe) — Covers tuition, travel, installation costs, and a monthly living allowance for studying at multiple European universities. It's a unique opportunity to experience education across different countries.",
    ],
  },
];
