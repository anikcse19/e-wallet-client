//Example= Input: "2025-08-06T05:47:11.215Z" → Output: "11:47am 06/08/25"

export function formatTransactionDate(isoString) {
  const date = new Date(isoString);

  // Get hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // Determine am/pm
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  // Day, Month, Year (2-digit)
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);

  return `${hours}:${minutes}${ampm} ${day}/${month}/${year}`;
}
