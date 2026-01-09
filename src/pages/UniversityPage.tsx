import {
  Building,
  Trophy,
  Layers,
  MapPin,
  GraduationCap,
  DollarSign,
} from "lucide-react";

const university = [
  { icon: Building, title: "Partner Universities" },
  { icon: Trophy, title: "Global Rankings" },
  { icon: Layers, title: "Programs & Degrees" },
  { icon: MapPin, title: "Virtual Campus Tours" },
  { icon: GraduationCap, title: "Faculty Information" },
  { icon: DollarSign, title: "Fee Structure & EMI" },
];

const UniversityPage = () => {
  return (
    <div className="container mx-auto pt-32 pb-20">
      <h1 className="text-4xl font-bold mb-4">Universities</h1>
      <p className="text-muted-foreground mb-10">
        Explore top universities across the globe.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {university.map((u) => (
          <div
            key={u.title}
            className="p-6 border rounded-xl hover:shadow-lg transition"
          >
            <u.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold">{u.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityPage;
