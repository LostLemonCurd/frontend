export const RATINGS = [
  {
    rating: 1,
    image: require("../assets/1.png"),
  },
  {
    rating: 2,
    image: require("../assets/2.png"),
  },
  {
    rating: 3,
    image: require("../assets/3.png"),
  },
  {
    rating: 4,
    image: require("../assets/4.png"),
  },
  {
    rating: 5,
    image: require("../assets/5.png"),
  },
  {
    rating: 0.5,
    image: require("../assets/05.png"),
  },
  {
    rating: 1.5,
    image: require("../assets/15.png"),
  },
  {
    rating: 2.5,
    image: require("../assets/25.png"),
  },
  {
    rating: 3.5,
    image: require("../assets/35.png"),
  },
  {
    rating: 4.5,
    image: require("../assets/45.png"),
  },
];

export function getRatingImage(rating) {
  return RATINGS.find((item) => item.rating === rating);
}
