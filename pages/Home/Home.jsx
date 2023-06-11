import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { s } from "./Home.style.js";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../../components/BookCard/BookCard.jsx";
import { Txt } from "../../components/Txt/Txt.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Searchbar } from "../../components/Searchbar/Searchbar.jsx";
import { Loading } from "../../components/Loading/Loading.jsx";


export function Home() {
    const nav = useNavigation();

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      console.log("UseEffect");
      getBooks();
    }, []);


    const APIKey = "AIzaSyDZ2-8fYAfYH2lrN6AoUWCi5vV1_z4nHuQ";
    const APIurl = `https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&maxResults=10&download=epub&key=${APIKey}`;
    
    async function getBooks(){
      try {
        let {data: { items }} = await axios.get(APIurl);
        setBooks(items);
      } catch (error) {
        console.error(error);
      }
    };

    console.log("BAAAAAAAAMAMAMAMAMAMAMAMAMA ",books);

    async function searchBook(search){
      try {
        setLoading(true);
        let {data: { items }} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=10&download=epub&key=${APIKey}`);
        setBooks(items);
        nav.navigate("BooksList", {books, search, loading});
        
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }


  return (
    <Container>
        <Txt>Search for a book</Txt>
        <View style={s.search}>
          <Searchbar onSubmit={searchBook}/>
          <Loading />
        </View>
    </Container>
  );
}
