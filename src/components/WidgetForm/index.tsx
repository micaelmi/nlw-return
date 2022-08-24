import { useState } from "react";
import { CloseButton } from "../CloseButton";

import Bug from "../../assets/bug.svg";
import Idea from "../../assets/idea.svg";
import Other from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: Bug,
      alt: "bug",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: Idea,
      alt: "ideia",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: Other,
      alt: "outro",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onTypeChange={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onRestart={handleRestartFeedback}
          onFeedbackSent={() => setFeedbackSent(true)}
        />
      )}

      <footer className="text-xs text-neutral-400">
        <p>Feito por Micael M.</p>
      </footer>
    </div>
  );
}
