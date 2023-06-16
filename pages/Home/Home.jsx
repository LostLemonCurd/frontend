import { View, Image } from "react-native";
import { s } from "./Home.style.js";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Txt } from "../../components/Txt/Txt.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Searchbar } from "../../components/Searchbar/Searchbar.jsx";
import { LoadingContext } from "../../contexts/LoadingContext.jsx";
import B from "../../assets/B.png";

export function Home() {
  const nav = useNavigation();

  const { loading, setLoading } = useContext(LoadingContext);
  // console.log("HOOOOOOOOME boooooooooks", books);

  const APIKey = "AIzaSyDZ2-8fYAfYH2lrN6AoUWCi5vV1_z4nHuQ";

  async function getBooks(search) {
    try {
      let {
        data: { items },
      } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=10&download=epub&key=${APIKey}`
      );
      return items;
    } catch (error) {
      console.error(error);
    }
  }

  async function searchBook(search) {
    let books = [];
    try {
      setLoading(true);
      books = await getBooks(search);
    } catch (error) {
      console.error(error);
    } finally {
      if (books.length !== 0) {
        setLoading(false);
        nav.navigate("BooksList", { books, search });
      } else {
        console.log("ain't nothing in the books mate", search);
      }
    }
  }

  return (
    <Container style={s.container}>
      <View style={s.title}>
        <Txt style={{ fontSize: 40, color: "white" }}>Search for a book</Txt>
        <Image source={B} />
      </View>
      <View style={s.search}>
        <Searchbar onSubmit={searchBook} />
      </View>
    </Container>
  );
}
