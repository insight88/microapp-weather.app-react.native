import React from 'react';
import { Alert } from "react-native"
import Loading from "./Loading"
import * as Location from "expo-location"
import axios from "axios"

const API_KEY = "f7af4e43dc6cd5644e1da1cab4dd175b"

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
    console.log(data)
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync()
      // * expo-location
      const { 
        coords: { latitude, longitude } 
      } = await Location.getCurrentPositionAsync()
      // * expo-location
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false })
    } catch {
      Alert.alert("Can't find your location")
    }

  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state
    return isLoading ? <Loading /> : null;
  }
}

