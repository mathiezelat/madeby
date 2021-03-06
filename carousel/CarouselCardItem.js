import React from "react";
import { StyleSheet, Text, Dimensions, ImageBackground, TouchableWithoutFeedback } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const CarouselCardItem = ({ item, index, onSelected }) => {
    return (
    <TouchableWithoutFeedback onPress={() => onSelected(item)}>
        <ImageBackground source={{ uri: item.image }} style={styles.container} key={index}>
            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.body}>{item.description}</Text>
        </ImageBackground>
    </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: "white",
        borderRadius: 10,
        width: ITEM_WIDTH,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        overflow: 'hidden',
        marginVertical: 15,
    },
    header: {
        color: "#eee",
        fontSize: 24,
        paddingLeft: 20,
        paddingTop: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1
    },
    body: {
        color: "#eee",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1
    },
});

export default CarouselCardItem;
