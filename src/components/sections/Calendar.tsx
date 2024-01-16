import classnames from 'classnames/bind'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import Section from '../shared/Section'
import style from './Calendar.module.scss'

import 'react-day-picker/dist/style.css'
import { DayPicker } from 'react-day-picker'
const cx = classnames.bind(style)

const css = `
  .rdp-caption {
    display: none;
  }
  .rdp-cell{
    cursor: default;
  }
  .rdp-head_cell{
    font-size: 14px;
    font-weight: bold;
  }
  .rdp-day_selected{
    background-color: var(--red);
    font-weight: bold;
    color:#fff;
  }
  .rdp-day_selected:hover{
    background-color: var(--red);
  }
`
function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
