import axios from "axios";

const baseUrl = 'http://test-backend.itdelta.agency/api'

export const instance = axios.create({
    baseURL: baseUrl,
  });