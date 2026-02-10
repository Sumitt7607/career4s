export type Notice = {
  id: number;
  title: string;
  date: string;
  category: string;
  priority: "new" | "urgent" | "important" | "normal";
  description: string;
  pdfUrl: string;
};
