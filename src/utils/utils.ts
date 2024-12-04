
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: 'numeric', month: 'short', day: 'numeric'
  });
}

export function truncateString(str: string, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}