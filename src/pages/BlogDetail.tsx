import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type Article = {
  title: string;
  image: string;
  content: string[];
};

const blogContent: { [key: string]: Article } = {
  "ai-transforming-education": {
    title: "How AI is Transforming Education in 2026",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*kQ9tAC19HLAt0nu9okDOgg.jpeg",
    content: [
      "Artificial Intelligence is transforming modern education across the world.",
      "AI powered platforms can now analyze how students learn and adjust lessons accordingly.",
      "This helps students learn faster and understand difficult topics more easily.",
      "Teachers also benefit from AI tools that help track student progress and identify weak areas.",
      "Some major benefits of AI in education include personalized learning, automated grading, and smart tutoring systems.",
      "In the future AI will become an assistant for teachers rather than a replacement."
    ]
  },

  "career-options-after-12th": {
    title: "Top Career Options After 12th in 2026",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    content: [
      "Choosing the right career after class 12 is one of the most important decisions for students.",
      "Technology driven careers are growing rapidly and creating many opportunities.",
      "Fields like Artificial Intelligence, Data Science and Cybersecurity are highly in demand.",
      "Students can also explore careers in digital marketing, entrepreneurship and design.",
      "It is important to select a career based on interests, skills and long term growth potential."
    ]
  },

  "best-countries-study-abroad": {
    title: "Best Countries to Study Abroad in 2026",
    image: "https://tse3.mm.bing.net/th/id/OIP.CUIAfD1jsb9a_W8Pyqr9_QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3 ",
    content: [
      "Studying abroad gives students global exposure and access to world class universities.",
      "Countries like Canada, Germany, UK, Australia and the USA are popular choices for international students.",
      "Canada offers excellent work opportunities after graduation.",
      "Germany provides high quality education with very low tuition fees in many universities.",
      "Students should compare visa policies, job opportunities and living costs before choosing a country."
    ]
  },

  "highest-paying-engineering-fields": {
    title: "Highest Paying Engineering Fields in 2026",
    image: "https://www.adda247.com/jobs/wp-content/uploads/sites/12/2023/07/21155105/Top-10-Highest-Paying-Engineering-Jobs-in-India-2024.jpg",
    content: [
      "Engineering careers are evolving rapidly due to new technologies.",
      "Artificial Intelligence engineering is one of the highest paying fields today.",
      "Cybersecurity professionals are also highly demanded due to rising cyber threats.",
      "Cloud computing engineers help companies manage modern digital infrastructure.",
      "Robotics engineering is growing quickly in manufacturing and automation industries."
    ]
  },

  "strong-college-application": {
    title: "How to Build a Strong College Application",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    content: [
      "Getting into top colleges requires more than just good marks.",
      "Universities evaluate students based on academics, extracurricular activities and leadership skills.",
      "Students should participate in competitions, projects and internships.",
      "Building a strong personal statement can also improve admission chances.",
      "A balanced profile makes a student stand out during the admission process."
    ]
  },

  "digital-skills-for-students": {
    title: "Digital Skills Every Student Must Learn",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    content: [
      "Digital skills are becoming essential for every student.",
      "Programming languages like Python and JavaScript are highly valuable.",
      "Data analysis and AI tools help students understand modern technologies.",
      "Digital marketing skills like SEO and social media management are also useful.",
      "Students who learn digital skills early will have better career opportunities."
    ]
  }
};

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? blogContent[slug] : undefined;

  if (!article) {
    return (
      <div className="p-20 text-center text-xl">
        Article not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">

      <Link to="/blog" className="flex items-center gap-2 text-blue-600 mb-6">
        <ArrowLeft size={18} />
        Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mb-6">
        {article.title}
      </h1>

      <img
        src={article.image}
        alt={article.title}
        className="w-full rounded-lg mb-8"
      />

      <div className="space-y-4 text-lg leading-8">
        {article.content.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

    </div>
  );
}