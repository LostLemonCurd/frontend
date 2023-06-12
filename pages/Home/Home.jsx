import { View } from "react-native";
import { s } from "./Home.style.js";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Txt } from "../../components/Txt/Txt.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Searchbar } from "../../components/Searchbar/Searchbar.jsx";
import { LoadingContext } from "../../contexts/LoadingContext.jsx";

export function Home() {
  const nav = useNavigation();

  const { loading, setLoading } = useContext(LoadingContext);
  const [books, setBooks] = useState([]);
  console.log("HOOOOOOOOME boooooooooks", books);

  // useEffect(() => {
  //   // console.log("UseEffect");
  //   getBooks();
  // }, []);

  // useEffect(() => {
  //   if (books.length !== 0) {
  //     setLoading(false);
  //   }
  // }, [books]);

  const APIKey = "AIzaSyDZ2-8fYAfYH2lrN6AoUWCi5vV1_z4nHuQ";
  // const APIurl = `https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&maxResults=10&download=epub&key=${APIKey}`;

  async function getBooks(search) {
    try {
      let {
        data: { items },
      } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=1&download=epub&key=${APIKey}`
      );
      setBooks(items);
    } catch (error) {
      console.error(error);
    }
  }

  async function searchBook(search) {
    try {
      setLoading(true);
      console.log("SEAAAARCH", search);
      await getBooks(search);
    } catch (error) {
      console.error(error);
    } finally {
      if (books.length !== 0) {
        setLoading(false);
        console.log("NAVUGATE", books);
        nav.navigate("BooksList", { books, search });
      } else {
        console.log("ain't nothing in the books mate", search);
      }
    }
  }

  return (
    <Container>
      <View style={s.title}>
        <Txt style={{ fontSize: 40 }}>Search for a book</Txt>
      </View>
      <View style={s.search}>
        <Searchbar onSubmit={searchBook} />
      </View>
    </Container>
  );
}
