import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt.jsx";
import { s } from "./BooksList.style.js";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import { BookCard } from "../../components/BookCard/BookCard.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Loading } from "../../components/Loading/Loading.jsx";

export function BooksList({}) {
  const { params } = useRoute();
  const nav = useNavigation();
  const { loading } = params.loading;

  console.log(params);

  // console.log(params.search);
  // console.log(params.books);

  const backButton = (
    <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.headerTxt}>
        <Txt> Vos résultats de recherche pour "{params.search}" </Txt>
        <Txt style={s.subtitle}> Prévisions sur les prochains jours</Txt>
      </View>
    </View>
  );
  const bookCards = (
    <ScrollView>
      {params.books?.map((book) => {
        const author = book.volumeInfo.authors?.join(", ");
        return (
          <BookCard
            key={book.id}
            title={book.volumeInfo.title}
            author={author}
            image={book.volumeInfo.imageLinks.thumbnail}
          />
        );
      })}
    </ScrollView>
  );

  return (
    <Container>
      <View>
        {backButton}
        {loading ? <Loading /> : bookCards}
      </View>
    </Container>
  );
}
