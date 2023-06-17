import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://www.instagram.com", icon: "fab fa-instagram" },
  { id: 3, href: "https://www.facebook.com", icon: "fab fa-facebook" },
];

export const servicesData = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, necessitatibus. Ipsum itaque molestias deleniti, omnis velit incidunt tempora aspernatur. Officia",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, necessitatibus. Ipsum itaque molestias deleniti, omnis velit incidunt tempora aspernatur. Officia",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, necessitatibus. Ipsum itaque molestias deleniti, omnis velit incidunt tempora aspernatur. Officia",
  },
];

export const tourData = [
  {
    id: 1,
    tourImg: img1,
    tourDate: "august 26th, 2020",
    tourTitle: "Tibet Adventure",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "china",
    days: "6 days",
    cost: "from $2100",
  },
  {
    id: 2,
    tourImg: img2,
    tourDate: "october 1th, 2020",
    tourTitle: "best of java",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "indonesia",
    days: "11 days",
    cost: "from $1400",
  },
  {
    id: 3,
    tourImg: img3,
    tourDate: "september 15th, 2020",
    tourTitle: "explore hong kong",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "hong kong",
    days: "8 days",
    cost: "from $5000",
  },
  {
    id: 4,
    // tourImg: "./images/tour-4.jpeg",
    tourImg: img4,
    tourDate: "december 5th, 2019",
    tourTitle: "kenya highlights",
    tourDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "kenya",
    days: "20 days",
    cost: "from $3300",
  },
];
