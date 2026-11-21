import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/faqs";

export default function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <Accordion type="single" defaultValue={items[0]?.question} collapsible>
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger className="font-oswald uppercase font-semibold text-slag hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-slag/80 max-w-2xl">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
