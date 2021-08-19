const ENGLISH_DAY = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const ENGLISH_MONTH = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const getTime = ():Date => {
  return new Date()
}

const getFormat = (date:Date):number[]=> {
  const Y = date.getFullYear()
  const M = date.getMonth() + 1
  const D = date.getDate()
  const d = date.getDay()
  return [Y,M,D,d]
}

export const getTimeString = ():string[] => {
  const date = getTime()
  const [ Y, M, D, d ] = getFormat(date)
  const dayString = `${ENGLISH_DAY[d]}`
  const dateString = `${ENGLISH_MONTH[M-1]} ${D}, ${Y}`
  return [dayString, dateString]
}