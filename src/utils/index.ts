export function extractIdNumber(inputString: string): string {
  const parts = inputString.split("-"); // Split the string by '-'
  const lastPart = parts[parts.length - 1]; // Get the last element

  if (!isNaN(Number(lastPart))) {
    return lastPart; // Return the last part if it's a number
  } else {
    return "1"; // Return null if the last part is not a number
  }
}
