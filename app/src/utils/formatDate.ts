export const formatDate = (date: Date) =>
  date.toLocaleDateString().slice(0, 10);
