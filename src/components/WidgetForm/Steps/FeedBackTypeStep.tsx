import { FeedbackType } from '..'
import { CloseButton } from '../../CloseButton'
import { feedbackTypes } from '../FeedbackTypes'

type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe se feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full-width">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            type="button"
          >
            <img src={value.image.source} alt={value.image.source} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  )
}
