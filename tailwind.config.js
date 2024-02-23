/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        date: "#FF0000",
        login: "#5E5400",
        acount: "#595959",
        register: "#0092A6",
        body: "#cecece",
      },
    },
  },
  plugins: [],
};
