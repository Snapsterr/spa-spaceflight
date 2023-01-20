export const stringToArray = (str: string): string[] => str?.trim().replace(/[!.,]/g, "").split(" ")

export const trimmedString = (str: string): string => {
  if (str.length < 100) {
    return str
  }
  return str?.substring(0, 100).trim() + '...'
}