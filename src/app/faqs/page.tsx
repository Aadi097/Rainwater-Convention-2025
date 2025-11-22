import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is the Rainwater Convention?",
    answer: "The Rainwater Convention is a global gathering of experts, policymakers, and enthusiasts dedicated to promoting rainwater harvesting and sustainable water management practices. It's a platform for sharing knowledge, innovations, and strategies to address global water challenges.",
  },
  {
    question: "Who should attend this event?",
    answer: "The convention is ideal for environmentalists, engineers, urban planners, architects, farmers, policymakers, students, and anyone interested in water conservation and sustainability. If you're passionate about making a difference, this event is for you.",
  },
  {
    question: "Where and when will the convention take place?",
    answer: "The convention will be held from October 22-24, 2025, at International Convention City Bashundhara. The venue is equipped with state-of-the-art facilities and is easily accessible via public transport.",
  },
  {
    question: "How can I register for the event?",
    answer: "You can register through our official website by navigating to the 'Register' page. We offer early bird discounts, so we encourage you to register soon to secure your spot.",
  },
  {
    question: "Will the sessions be available online?",
    answer: "Yes, we will offer a hybrid format. All keynote sessions and select workshops will be live-streamed for virtual attendees. Recordings will also be made available to all registered participants after the event.",
  },
  {
    question: "Are there any opportunities for sponsorship or exhibition?",
    answer: "Absolutely. We have various sponsorship and exhibition packages available for organizations looking to showcase their products and services to a global audience. Please contact our sponsorship team for more details.",
  },
];

export default function FaqsPage() {
  return (
    <div className="bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about the Rainwater Convention.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-medium text-left hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
