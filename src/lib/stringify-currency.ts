export function stringifyCurrency(amount: number, currency = 'ETB'): string {
  const whole = Math.floor(amount)
  const change = amount - whole

  const __paper = whole.toString()
  const _paper: string[] = []
  for (let i = __paper.length; i >= 0; i -= 3) {
    _paper.push(__paper.slice(i - 3 >= 0 ? i - 3 : 0, i))
  }
  const paper = _paper.reverse().join(',')

  const cents = change ? '.' + Math.round(change * 100).toString() : ''

  return `${currency} ${paper}${cents}`
}
