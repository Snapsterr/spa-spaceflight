export const stringToArray = (str: string) => str?.trim().replace(/[!.,]/g, "").split(" ")

export const trimmedString = (str: string) => str?.substring(0, 100) + '...'