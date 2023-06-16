import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt.jsx";
import { s } from "./BookDetails.style.js";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container/Container";
import { DetailCard } from "../../components/DetailCard/DetailCard";

export function BookDetails() {
  const { params } = useRoute();
  const nav = useNavigation();
  // Access the loading state from the context
  const { book } = params;
  const author = book.volumeInfo.authors?.join(", ");

  const backButton = (
    <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.headerTxt}>
        <Txt style={s.title}>{book?.volumeInfo.title}</Txt>
        <Txt style={s.subtitle}>{author}</Txt>
      </View>
    </View>
  );

  return (
    <Container>
      {header}
      <DetailCard book={book} />
    </Container>
  );
}
