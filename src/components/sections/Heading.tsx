import Section from '@shared/Section'
import classNames from 'classnames/bind'
import { format, getDay, parseISO } from 'date-fns'
import styles from './Heading.module.scss'

const cx = classNames.bind(styles)

const DAYS = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
]
function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  )
}

export default Heading
