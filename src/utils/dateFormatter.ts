const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daySuffix = (d: number): string => {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
  }
} 

export const dateFormatter = (str: string): string => {
  const date = new Date(str)

  const year = date.getUTCFullYear()
  const month = monthNames[date.getUTCMonth()]
  const day = date.getUTCDate()
  
  const formattedDate: string = `${month} ${day}${daySuffix(day)}, ${year}`
  return formattedDate
}