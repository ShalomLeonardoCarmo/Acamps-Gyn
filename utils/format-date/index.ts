export function formatDate(date: string): string {
  const handdledDate = date.split('T')
  const splittedDate = handdledDate[0].split('-')

  return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
}
