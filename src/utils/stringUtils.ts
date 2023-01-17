export const stringToArray = (str: string) => str?.replace(/[!.,]/g, "").split(" ")

export const trimmedString = (str: string) => str?.substring(0, 100) + '...'