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

export function Home() {
    // const nav = useNavigation();

    // function goToForecast(){
    //     nav.navigate("Forecast", {city, ...weather.daily})
    // }
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
      console.log("UseEffect");
      getBooks();
    }, []);

    async function getUsers(){
      await axios.get("http://localhost:4000/users", {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        console.log("request completed");
      });
    }

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

    async function searchBook(search){
      try {
        let {data: { items }} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=10&download=epub&key=${APIKey}`);
        setBooks(items);
      } catch (error) {
        console.error(error);
      }
    }

    const bookCards = books.map((book) => {
      return (
        <BookCard
          key={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks.thumbnail}
        />
      );
    });

  return (
    <Container>
      <View>
        <Txt>Hello World</Txt>
        <View>
          <Searchbar onSubmit={searchBook}/>
        </View>
        <ScrollView>
          {bookCards}
        </ScrollView>
      </View>
    </Container>
  );
}
