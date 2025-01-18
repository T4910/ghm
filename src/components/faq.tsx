'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is Gilgal House Media about?",
      answer: "Gilgal House Media is Landmark University's official media team, dedicated to capturing and sharing moments that matter."
    },
    {
      question: "Is it easy to learn?",
      answer: "Yes, we provide comprehensive training and support for all new members joining our media team."
    },
    {
      question: "Do I need to code?",
      answer: "Framer is an end to end tool that lets everyone design and ship web sites. You don't need a frontend team or web programming course. Just basic canvas skills."
    }
  ]

  return (
    <section className="py-16 px-8 font-grotesk">
      <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl text-center mb-12">
        FREQUENTLY<br />ASKED QUESTIONS
      </h2>
      <Accordion className="max-w-2xl mx-auto -tracking-tight" transition={{ duration: 0.35, ease: 'easeInOut' }}>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="mb-8">
            <AccordionTrigger className="text-left font-semibold text-xl mb-4">
              <span className=" group-data-[expanded]:text-blue-600 transition-transform duration-200">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="font-grotesk">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

