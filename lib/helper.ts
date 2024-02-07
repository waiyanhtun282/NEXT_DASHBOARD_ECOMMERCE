export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString();
}

export function inputFormatDate(inputValue: string) {
  const inputDate = new Date(inputValue);
  const formattedDate = inputDate.toISOString().split("T")[0];
  return formattedDate;
}
