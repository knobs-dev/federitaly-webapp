import { useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import FaqDesktop from "containers/faq/desktop";
import FaqMobile from "containers/faq/mobile";
import { useTranslation } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Slider,
} from "@components";

type Topics = "generic" | "the_certification" | "blockchain" | "advantages";

const Faq = () => {
  const { t } = useTranslation();
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [selectedTopic, setSelectedTopic] = useState<Topics>("generic");

  const topicsFaqs = {
    generic: [
      {
        question: t("Faq.questions.0.title"),
        answer: t("Faq.questions.0.body"),
      },
      {
        question: t("Faq.questions.1.title"),
        answer: t("Faq.questions.1.body"),
      },
      {
        question: t("Faq.questions.2.title"),
        answer: t("Faq.questions.2.body"),
      },
      {
        question: t("Faq.questions.3.title"),
        answer: t("Faq.questions.3.body"),
      },
      {
        question: t("Faq.questions.4.title"),
        answer: t("Faq.questions.4.body"),
      },
      {
        question: t("Faq.questions.5.title"),
        answer: t("Faq.questions.5.body"),
      },
      {
        question: t("Faq.questions.6.title"),
        answer: t("Faq.questions.6.body"),
      },
      {
        question: t("Faq.questions.7.title"),
        answer: t("Faq.questions.7.body"),
      },
      {
        question: t("Faq.questions.8.title"),
        answer: t("Faq.questions.8.body"),
      },
      {
        question: t("Faq.questions.9.title"),
        answer: t("Faq.questions.9.body"),
      },
      {
        question: t("Faq.questions.10.title"),
        answer: t("Faq.questions.10.body"),
      },
      {
        question: t("Faq.questions.11.title"),
        answer: t("Faq.questions.11.body"),
      },
      {
        question: t("Faq.questions.12.title"),
        answer: t("Faq.questions.12.body"),
      },
      {
        question: t("Faq.questions.13.title"),
        answer: t("Faq.questions.13.body"),
      },
      {
        question: t("Faq.questions.14.title"),
        answer: t("Faq.questions.14.body"),
      },
      {
        question: t("Faq.questions.15.title"),
        answer: t("Faq.questions.15.body"),
      },
      {
        question: t("Faq.questions.16.title"),
        answer: t("Faq.questions.16.body"),
      },
      {
        question: t("Faq.questions.17.title"),
        answer: t("Faq.questions.17.body"),
      },
      {
        question: t("Faq.questions.18.title"),
        answer: t("Faq.questions.18.body"),
      },
      {
        question: t("Faq.questions.19.title"),
        answer: t("Faq.questions.19.body"),
      },
      {
        question: t("Faq.questions.20.title"),
        answer: t("Faq.questions.20.body"),
      },
      {
        question: t("Faq.questions.21.title"),
        answer: t("Faq.questions.21.body"),
      },
      {
        question: t("Faq.questions.22.title"),
        answer: t("Faq.questions.22.body"),
      },
      {
        question: t("Faq.questions.23.title"),
        answer: t("Faq.questions.23.body"),
      },
      {
        question: t("Faq.questions.24.title"),
        answer: t("Faq.questions.24.body"),
      },
    ],
    the_certification: [
      {
        question: t("Faq.questions.25.title"),
        answer: t("Faq.questions.25.body"),
      },
    ],
    blockchain: [],
    advantages: [],
  };

  const handleSwitchTopic = (topic: Topics) => {
    setSelectedTopic(topic);
  };

  return isTablet ? (
    <FaqMobile
      selectedTopic={selectedTopic}
      topicsFaqs={topicsFaqs}
      handleSwitchTopic={handleSwitchTopic}
    />
  ) : (
    <FaqDesktop
      selectedTopic={selectedTopic}
      topicsFaqs={topicsFaqs}
      handleSwitchTopic={handleSwitchTopic}
    />
  );
};

export default Faq;
