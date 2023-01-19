export const stringToArray = (str: string): string[] => str?.trim().replace(/[!.,]/g, "").split(" ")

export const trimmedString = (str: string): string => str?.substring(0, 100) + '...'