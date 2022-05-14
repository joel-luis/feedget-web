import { useState } from 'react'

import { FeedbackTypeStep } from './Steps/FeedBackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { feedbackTypes } from './FeedbackTypes'
import { FeedbackSuccesstStep } from './Steps/FeedbackSuccessStep'

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false), setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccesstStep restartFeedback={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              restartFeedback={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{' '}
        <a
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/joel-luiss/"
          target="_blank"
          rel="noreferrer"
        >
          Joel Luis
        </a>
      </footer>
    </div>
  )
}
