interface FQAItem {
  question: string
  answer: string
}

export interface FAQProps {
  title: string
  content: FQAItem[]
}
