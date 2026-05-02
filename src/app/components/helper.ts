export const formatDate = (date: string) => {
  const dateObject = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return dateObject.toLocaleString("ar-EG", options);
};
