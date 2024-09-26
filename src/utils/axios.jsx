import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjBlNzQzNGM2YTg0M2RhMGRlYWVkNTg0MWFkZTg2MSIsIm5iZiI6MTcyNDQzNzY2Ny4xMTE2OTIsInN1YiI6IjY2YzhjZTRiNTNlMjU4MjFmMGYyYmJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0WPQA6l1bwBe3wjJgUy1tB2TgH9BSrzFRnviP0tMg-Y'
      }
})

export default instance;

// API Key= ef0e7434c6a843da0deaed5841ade861

// API Read Access Token= eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjBlNzQzNGM2YTg0M2RhMGRlYWVkNTg0MWFkZTg2MSIsIm5iZiI6MTcyNDQzNzQxMi4yNTg0NDMsInN1YiI6IjY2YzhjZTRiNTNlMjU4MjFmMGYyYmJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P4HCJyiQV9jFi4FDVPophS21wL5kVCjMI0GOLryPVYk