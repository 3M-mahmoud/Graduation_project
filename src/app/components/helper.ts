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

export const formatDateTime = (time: string) => {
  return new Date(time).toLocaleString("ar-EG", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatDateYear = (time: string) => {
  return new Date(time).toLocaleString("en-EG", {
    year: "numeric",
  });
};
