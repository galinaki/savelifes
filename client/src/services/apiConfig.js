import axios from "axios";

const baseUrl = 'https://savelives.herokuapp.com'

export const api = axios.create({baseURL: baseUrl})