import React from "react"
import { StyleSheet, Text, View } from "react-native"
import PropTypes from "prop-Types"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

export default function Weather({ temp }) {
    return (
    <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.container}
    >
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="black" />
            <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={styles.halfContainer}>
        </View>
    </LinearGradient>
    )
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})