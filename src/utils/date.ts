import moment from 'moment'

export const getTimeString = ():string[] => {
  const momentDate = moment()
  const dayString = momentDate.format('dddd')
  const dateString = momentDate.format('MMM DD,YYYY')
  return [dayString, dateString]
}