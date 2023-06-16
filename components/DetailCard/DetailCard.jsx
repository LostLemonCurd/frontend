import { ScrollView, View, Image, Linking, Text } from "react-native";
import { Txt } from "../../components/Txt/Txt.jsx";
import { s } from "./DetailCard.style.js";
import { getRatingImage } from "../../services/ratings.js";

export function DetailCard({ book }) {
  const { volumeInfo } = book;
  const { accessInfo } = book;
  const { webReaderLink } = accessInfo;
  const author = book.volumeInfo.authors?.join(", ");
  const {
    title,
    publisher,
    publishedDate: date,
    imageLinks,
    pageCount,
    description,
    categories,
  } = volumeInfo;

  console.log("averageRating", book.volumeInfo.averageRating);
  console.log("ratingsCount", book.volumeInfo.ratingsCount);

  let rating;
  if (book.volumeInfo.averageRating) {
    rating = getRatingImage(book.volumeInfo.averageRating);
  } else {
    rating = null;
  }
  console.log("rating", rating);
  const ratingComponent = (
    <View style={s.ratingContainer}>
      <Image source={rating?.image} />
      <Txt style={s.ratingText}>({book.volumeInfo.ratingsCount})</Txt>
    </View>
  );

  return (
    <ScrollView>
      <View style={s.detailContainer}>
        <Image style={s.image} source={{ uri: imageLinks.thumbnail }} />
        <View style={s.detail}>
          <Txt style={s.category}>{categories}</Txt>
          <Txt style={s.title}>{title}</Txt>
          {book.volumeInfo.averageRating ? ratingComponent : null}
          <Txt style={s.author}>Author: {author}</Txt>
          <Txt style={s.text}>
            {publisher} | {date}
          </Txt>
          <Txt style={s.text}>{pageCount} pages</Txt>
        </View>
      </View>
      <View style={s.online}>
        <Text onPress={() => Linking.openURL(`${webReaderLink}`)}>
          Lire en ligne
        </Text>
      </View>
      <Txt style={s.description}>
        {description ? description : "Ce livre ne contient pas de description"}
      </Txt>
    </ScrollView>
  );
}
