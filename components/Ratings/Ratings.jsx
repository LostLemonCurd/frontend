import { ScrollView, View, Image, Linking, Text } from "react-native";
import { Txt } from "../../components/Txt/Txt.jsx";
import { s } from "./Ratings.style.js";
import { getRatingImage } from "../../services/ratings.js";

export function Ratings({ rating, ratingsCount }) {
  return (
    <View style={s.rating}>
      <Image source={rating?.image} />
      <Txt style={s.ratingText}>({ratingsCount})</Txt>
    </View>
  );
}
