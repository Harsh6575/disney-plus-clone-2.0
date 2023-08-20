const Navlinks = [
  {
    linkText: "HOME",
    to: "/",
    iconName: "home-icon.svg",
  },
  {
    linkText: "SEARCH",
    to: "/",
    iconName: "search-icon.svg",
  },
  {
    linkText: "WATCHLIST",
    to: "/",
    iconName: "watchlist-icon.svg",
  },
  {
    linkText: "ORIGINALS",
    to: "/",
    iconName: "original-icon.svg",
  },
  {
    linkText: "MOVIES",
    to: "/",
    iconName: "movie-icon.svg",
  },
  {
    linkText: "SERIES",
    to: "/add",
    iconName: "series-icon.svg",
  },
];

const fileds = [
  {
    name: "title",
    type: "text",
    label: "Enter Title",
    required: true,
  },
  {
    name: "titleImg",
    type: "text",
    label: "Enter Title Image",
    required: true,
  },
  {
    name: "cardImg",
    type: "text",
    label: "Enter Card Image",
    required: true,
  },
  {
    name: "filter",
    type: "text",
    label: "Enter Filter",
    required: true,
  },
  {
    name: "backgroundImg",
    type: "text",
    label: "Enter Background Image",
    required: true,
  },
  {
    name: "description",
    type: "text",
    label: "Enter Description",
    required: true,
  },
  {
    name: "subTitle",
    type: "text",
    label: "Enter Sub Title",
    required: true,
  },
];

const SliderDetails = [
  {
    src: "/images/slider-badging.jpg",
    alt: "Slider Badging",
  },
  {
    src: "/images/slider-badag.jpg",
    alt: "Slider Badag",
  },
  {
    src: "/images/slider-scale.jpg",
    alt: "Slider Scale",
  },
  {
    src: "/images/slider-scales.jpg",
    alt: "Slider Scales",
  },
];

export { Navlinks, fileds, SliderDetails };
