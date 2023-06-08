import { View, Text, TouchableOpacity, Image } from "react-native";
import { s } from "./BookCard.style.js";
import { Txt } from "../Txt/Txt.jsx";

export function BookCard({ title, author, image, onPress }) {
    return (
        <View style={s.container}>
            <TouchableOpacity>
                <Image style={s.image} source={{ uri: image }} />
            </TouchableOpacity>
            <Txt style={s.info}>{title}</Txt>
            <Txt style={s.info}>{author}</Txt>
        </View>
    );
}