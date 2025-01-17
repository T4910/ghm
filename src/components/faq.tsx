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
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl text-center mb-12">
        FREQUENTLY<br />ASKED QUESTIONS
      </h2>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium text-xl">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

