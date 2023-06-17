import { View, Image, Alert } from "react-native";
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
  const [inError, setInError] = useState(null);

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
      if (search !== "") {
        books = await getBooks(search);
      } else {
        throw new Error("Vous devez entrer un titre de livre");
      }
      if (books === undefined) {
        throw new Error("Aucun livre ne correspond à votre recherche");
      }
    } catch (error) {
      setInError(error.message);
    } finally {
      if (books?.length !== 0 && books !== undefined) {
        setLoading(false);
        setInError(null);
        nav.navigate("BooksList", { books, search });
      } else {
        console.log("ain't nothing in the books mate", search);
      }
    }
  }

  return (
    <Container style={s.container}>
      <View style={s.title}>
        <Txt style={{ fontSize: 40 }}>Search for a book</Txt>
        <Image source={B} />
      </View>
      <View style={s.search}>
        <Searchbar onSubmit={searchBook} />
        {inError ? <Txt style={s.error}>{inError}</Txt> : null}
      </View>
    </Container>
  );
}
