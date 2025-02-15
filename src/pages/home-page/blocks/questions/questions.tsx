import { ReactNode, memo } from 'react'

import { Accordion, AccordionItem, Typography } from '@/components'

import { v1 } from 'uuid'

import s from './questions.module.scss'
import { D, Props } from '@/common/interface'

type QuestionType = {
  content: ReactNode
  id: string
  title: string
}

const getQuestions = (data: D[]): QuestionType[] => {
  const { questions, contacts } = data[0];

  const items: QuestionType[] = questions.map((question) => (
    {
      content: (
        <div>
          {question.paragraphs.map((item) => (
            <p key={v1()}>
              {item.text}
              {question.isEmail && (
                <a href={contacts.email.label} rel={'noreferrer'} target={'_blank'}>
                  {' '}{contacts.email.label}
                </a>
              )}
            </p>
          ))}

        </div>
      ),
      id: v1(),
      title: question.title,

    }));

  return items;
}

export const Questions = ({ data }: Props) => {

  const getQuestionsData = getQuestions(data);
  const leftCount = Math.floor(getQuestionsData.length / 2)
  const leftItems = [...getQuestionsData].splice(0, leftCount)
  const rightItems = [...getQuestionsData].splice(leftCount)

  return (
    <section className={'section'}>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <Typography as={'h2'} variant={'title'}>
            {data[0].questions_title}
          </Typography>
          <div className={s.items}>
            <AccordionList items={leftItems} />
            <AccordionList items={rightItems} />
          </div>
        </div>
      </div>
    </section>
  )
}

type AccordionListPropsType = {
  items: QuestionType[]
}

const AccordionList = memo(({ items }: AccordionListPropsType) => {
  // console.log(items)
  return (
    <Accordion className={s.list} type={'multiple'}>
      {items.map(item => (
        <AccordionItem key={item.id} title={item.title} value={item.id}>
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  )
})
