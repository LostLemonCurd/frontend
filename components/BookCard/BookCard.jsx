import { View, Text, TouchableOpacity, Image } from "react-native";
import { s } from "./BookCard.style.js";
import { Txt } from "../Txt/Txt.jsx";
import { Ratings } from "../Ratings/Ratings.jsx";

export function BookCard({
  title,
  author,
  image,
  rating,
  ratingsCount,
  onPress,
}) {
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={s.image} source={{ uri: image }} />
      </TouchableOpacity>
      {rating || ratingsCount ? (
        <Ratings rating={rating} ratingsCount={ratingsCount} />
      ) : null}
      <Txt style={s.title}>{title}</Txt>
      <Txt style={s.author}>{author}</Txt>
    </View>
  );
}
