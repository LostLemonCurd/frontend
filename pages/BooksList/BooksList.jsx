import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt.jsx";
import { s } from "./BooksList.style.js";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { BookCard } from "../../components/BookCard/BookCard.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Loading } from "../../components/Loading/Loading.jsx";

export function BooksList({}) {

    const { params } = useRoute();
    const nav = useNavigation();

    // console.log("BAAAAAAAAAAAAAAMAMAMAMA" + params.books[0].volumeInfo.title);
    // console.log("BAAAAAAAAAAAAAAMAMAMAMA" + params.search);

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
console.log(params.search)
    const bookCards = 
    <ScrollView>{
    params.books?.map((book) => {
      return (
        <BookCard
          key={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks.thumbnail}
        />
      );
    })}
    </ScrollView>;

  return (
    <Container>
      <View>
        {backButton}
        {
            params.loading ? bookCards : <Loading />
        }
      </View>
    </Container>
  );
}
