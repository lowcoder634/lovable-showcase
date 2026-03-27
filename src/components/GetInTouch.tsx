import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Linkedin } from "lucide-react";

const emailReasons = [
  { label: "I have a product role that might be a great fit", subject: "Product Role Opportunity" },
  { label: "I have a product advisory opportunity for an AI-native app", subject: "Product Advisory Opportunity" },
  { label: "I want to book you for a poetry reading", subject: "Poetry Reading Booking" },
  { label: "I'm interested in writing collaboratively together", subject: "Creative Collaboration" },
  { label: "I want to get a copy of Throat on Fire", subject: "Throat on Fire — Copy Request" },
  { label: "I have a diabetes advocacy opportunity", subject: "Diabetes Advocacy Opportunity" },
  { label: "I'd like you to participate in a diabetes focus group", subject: "Diabetes Focus Group Invitation" },
];

const GetInTouch = () => {
  const [selected, setSelected] = useState("");
  const reason = emailReasons.find((r) => r.subject === selected);
  const href = reason
    ? `mailto:nicholeacosta@gmail.com?subject=${encodeURIComponent(reason.subject)}`
    : "mailto:nicholeacosta@gmail.com";

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container max-w-3xl text-center space-y-8">
        <div className="space-y-3">
          <h2 id="get-in-touch-heading" className="text-2xl md:text-3xl font-bold tracking-tight">Get in touch</h2>
          <a
            href="https://www.linkedin.com/in/nicholea/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label="Connect with Nichole Acosta on LinkedIn"
          >
            <Linkedin className="w-4 h-4" aria-hidden="true" />
            Connect on LinkedIn
          </a>
          <p id="get-in-touch-instructions" className="text-sm text-muted-foreground/70 max-w-xl mx-auto">
            Select your reason for getting in touch from the dropdown menu, then click the Email Me button which will open an email window with your selected subject line.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg mx-auto">
          <label htmlFor="contact-reason" className="sr-only">Reason for getting in touch</label>
          <Select onValueChange={setSelected}>
            <SelectTrigger id="contact-reason" className="w-full" aria-describedby="get-in-touch-instructions">
              <SelectValue placeholder="What's on your mind?" />
            </SelectTrigger>
            <SelectContent className="max-w-[calc(100vw-2rem)]">
              {emailReasons.map((r) => (
                <SelectItem key={r.subject} value={r.subject} className="whitespace-normal h-auto py-2">
                  {r.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selected ? (
            <a href={href} className="shrink-0" aria-label={`Send email about: ${reason?.label}`}>
              <Button className="gap-2 w-full sm:w-auto" size="lg">
                <Mail className="w-4 h-4" aria-hidden="true" />
                Email Me
              </Button>
            </a>
          ) : (
            <Button className="gap-2 w-full sm:w-auto shrink-0" size="lg" disabled aria-disabled="true">
              <Mail className="w-4 h-4" aria-hidden="true" />
              Email Me
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
