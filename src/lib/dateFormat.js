/**
 * 
 * @param {string} date 
 * @param {object} options Intl.DateTimeFormat options
 * 
 * @link https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */
export default function dateFormat(date, options = { dateStyle: 'medium' }) {
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
}