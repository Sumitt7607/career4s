import { Send } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-foreground py-16 md:py-20">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Stay <span className="text-primary">Updated</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-primary-foreground/70">
          Get the latest scholarship alerts, visa updates, and study abroad tips delivered to your inbox.
        </p>
        <div className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-full bg-background p-1.5">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent px-4 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary">
            <Send className="h-4 w-4" />
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
