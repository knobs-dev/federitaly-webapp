"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Slider,
} from "@components";

import { clientT } from "@store/i18n";

type Topics = "generic" | "the_certification" | "blockchain" | "advantages";

const Faq = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topics>("generic");

  const topicsFaqs = {
    generic: [
      {
        question: clientT.value?.Faq.questions[0].title,
        answer: clientT.value?.Faq.questions[0].body,
      },
      {
        question: clientT.value?.Faq.questions[1].title,
        answer: clientT.value?.Faq.questions[1].body,
      },
      {
        question: clientT.value?.Faq.questions[2].title,
        answer: clientT.value?.Faq.questions[2].body,
      },
      {
        question: clientT.value?.Faq.questions[3].title,
        answer: clientT.value?.Faq.questions[3].body,
      },
      {
        question: clientT.value?.Faq.questions[4].title,
        answer: clientT.value?.Faq.questions[4].body,
      },
      {
        question: clientT.value?.Faq.questions[5].title,
        answer: clientT.value?.Faq.questions[5].body,
      },
      {
        question: clientT.value?.Faq.questions[6].title,
        answer: clientT.value?.Faq.questions[6].body,
      },
      {
        question: clientT.value?.Faq.questions[7].title,
        answer: clientT.value?.Faq.questions[7].body,
      },
      {
        question: clientT.value?.Faq.questions[8].title,
        answer: clientT.value?.Faq.questions[8].body,
      },
      {
        question: clientT.value?.Faq.questions[9].title,
        answer: clientT.value?.Faq.questions[9].body,
      },
      {
        question: clientT.value?.Faq.questions[10].title,
        answer: clientT.value?.Faq.questions[10].body,
      },
      {
        question: clientT.value?.Faq.questions[11].title,
        answer: clientT.value?.Faq.questions[11].body,
      },
      {
        question: clientT.value?.Faq.questions[12].title,
        answer: clientT.value?.Faq.questions[12].body,
      },
      {
        question: clientT.value?.Faq.questions[13].title,
        answer: clientT.value?.Faq.questions[13].body,
      },
      {
        question: clientT.value?.Faq.questions[14].title,
        answer: clientT.value?.Faq.questions[14].body,
      },
      {
        question: clientT.value?.Faq.questions[15].title,
        answer: clientT.value?.Faq.questions[15].body,
      },
      {
        question: clientT.value?.Faq.questions[16].title,
        answer: clientT.value?.Faq.questions[16].body,
      },
      {
        question: clientT.value?.Faq.questions[17].title,
        answer: clientT.value?.Faq.questions[17].body,
      },
      {
        question: clientT.value?.Faq.questions[18].title,
        answer: clientT.value?.Faq.questions[18].body,
      },
      {
        question: clientT.value?.Faq.questions[19].title,
        answer: clientT.value?.Faq.questions[19].body,
      },
      {
        question: clientT.value?.Faq.questions[20].title,
        answer: clientT.value?.Faq.questions[20].body,
      },
      {
        question: clientT.value?.Faq.questions[21].title,
        answer: clientT.value?.Faq.questions[21].body,
      },
      {
        question: clientT.value?.Faq.questions[22].title,
        answer: clientT.value?.Faq.questions[22].body,
      },
      {
        question: clientT.value?.Faq.questions[23].title,
        answer: clientT.value?.Faq.questions[23].body,
      },
      {
        question: clientT.value?.Faq.questions[24].title,
        answer: clientT.value?.Faq.questions[24].body,
      },
    ],
    the_certification: [
      {
        question: clientT.value?.Faq.questions[25].title,
        answer: clientT.value?.Faq.questions[25].body,
      },
    ],
    blockchain: [],
    advantages: [],
  };

  const handleSwitchTopic = (topic: Topics) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="absolute left-0 top-0 min-h-full w-screen flex flex-col overflow-hidden">
      <header className="absolute left-0 top-0 h-[5.375rem] w-full">
        <h2 className="{text-[0.9375rem] px-4 font-semibold">
          {clientT.value?.Faq.title}
        </h2>
        <Slider freeMode className="mt-2 w-full">
          {Object.keys(topicsFaqs).map((topic, index) => (
            <button
              type="button"
              key={topic}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                selectedTopic === topic
                  ? "bg-[#4164B0]"
                  : "bg-transparent border-1 border-[#285ED4]"
              } ${index === 0 ? "ml-4" : "ml-2"} ${
                index === Object.keys(topicsFaqs).length - 1 ? "mr-4" : "mr-2"
              }`}
              onClick={() => handleSwitchTopic(topic as Topics)}
            >
              {clientT.value?.Faq.topics[topic as Topics]}
            </button>
          ))}
        </Slider>
      </header>
      <section className="absolute left-0 top-[5.375rem] h-[calc(100%-5.375rem)] w-full overflow-y-scroll px-4 py-8">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col space-y-2"
        >
          {topicsFaqs[selectedTopic as Topics].map(
            ({ question, answer }, index) => (
              <AccordionItem
                key={`${selectedTopic}-question-${index}`}
                value={`${selectedTopic}-question-${index}`}
              >
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      </section>
    </div>
  );
};

export default Faq;
