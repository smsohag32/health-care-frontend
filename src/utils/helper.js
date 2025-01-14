export const getCookie = (name) => {
   if (typeof document === "undefined") {
      return null;
   }
   const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name))
      ?.split("=")[1];
   return cookieValue ? decodeURIComponent(cookieValue) : null;
};

export const setCookie = (name, value, days = 7) => {
   if (typeof document === "undefined") {
      return;
   }
   const expires = new Date();
   expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
   document.cookie = `${name}=${encodeURIComponent(
      value
   )}; expires=${expires.toUTCString()}; path=/`;
};

export const deleteCookie = (name) => {
   document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const formatName = (str) => {
   return str
      .replace(
         /([A-Z]+|[a-z]+(?:[-_][a-zA-Z]+)*)/g,
         (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
      )
      .replace(/_/g, " ");
};

export const handleBack = () => {
   window.history.back();
};
