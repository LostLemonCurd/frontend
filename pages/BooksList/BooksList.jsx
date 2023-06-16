import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt.jsx";
import { s } from "./BooksList.style.js";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { BookCard } from "../../components/BookCard/BookCard.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Loading } from "../../components/Loading/Loading.jsx";
import { LoadingContext } from "../../contexts/LoadingContext.jsx";
import { getRatingImage } from "../../services/ratings.js";

export function BooksList() {
  const { params } = useRoute();
  const nav = useNavigation();
  // Access the loading state from the context
  const { loading } = useContext(LoadingContext);
  // console.log("BOOKSLIST params", params);

  const backButton = (
    <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.headerTxt}>
        <Txt style={s.subtitle}> Vos résultats de recherche pour :</Txt>
        <Txt style={s.title}>{params.search}</Txt>
      </View>
    </View>
  );

  const bookCards = (
    <ScrollView>
      {params.books?.map((book) => {
        const averageRatings = book.volumeInfo.averageRating;
        let rating;
        if (averageRatings) {
          rating = getRatingImage(averageRatings);
        } else {
          rating = null;
        }
        let ratingsCount;
        if (book.volumeInfo.ratingsCount) {
          ratingsCount = book.volumeInfo.ratingsCount;
        } else {
          ratingsCount = null;
        }
        const author = book.volumeInfo.authors?.join(", ");
        return (
          <BookCard
            key={book.id}
            title={book.volumeInfo.title}
            author={author}
            rating={rating}
            ratingsCount={ratingsCount}
            image={book.volumeInfo.imageLinks.thumbnail}
            onPress={() => goToDetails(book)}
          />
        );
      })}
    </ScrollView>
  );

  function goToDetails(book) {
    nav.navigate("BookDetails", { book });
  }

  return (
    <Container>
      {header}
      <View style={s.loading}>{loading ? <Loading /> : bookCards}</View>
    </Container>
  );
}
