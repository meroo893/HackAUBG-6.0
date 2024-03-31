import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion';

export default function FAQ() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-bold mt-8">FAQ</div>
        <div></div>
        <Accordion type="single" collapsible className="w-1/2 my-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>Why should you choose us?</AccordionTrigger>
            <AccordionContent>We are Better. WE ARE BETTER!</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What do we do?</AccordionTrigger>
            <AccordionContent>We work for you!</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it free?</AccordionTrigger>
            <AccordionContent>
              Yes. Of course it's free! We are the middle man between you and
              your dreams!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How to be sure you give me the best offer?
            </AccordionTrigger>
            <AccordionContent>
              Our advanced AI model takes and analyzes all the data from the
              insurancy companies and you need to gives you the best offer!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Do i need to go to the office of the insurancy compnay?
            </AccordionTrigger>
            <AccordionContent>
              No, you just tell us what you want from the comfort of your home
              and we do everything else!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
