//"I implemented error handling using Axios interceptors in the frontend and proper API response management in the backend. 
//For example, in the frontend, I used toast notifications to inform users about errors like 400 (bad requests due to invalid input), 401 (when the user is unauthorized), and 500 (server issues). 
//The interceptors would catch errors globally and provide users with clear feedback.
// On the backend, I ensured that the API returned appropriate HTTP status codes with meaningful error messages, like detailed validation errors in case of form submission issues."

import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../Router/Routes";

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    sleep().then
    return response
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
           if(data.errors[key]) {
            modelStateErrors.push(data.errors[key])
          }
        }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 404:
        toast.error(data.title)
        break;
      case 500:
        router.navigate('/server-error',{state: {error: data}});
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
})

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
  list: () => requests.get("products"),
  details: (id: number) => requests.get(`products/${id}`),
  fetchFilters: () => requests.get("products/filters"),
};

const TestErrors = {
  get400Error: () => requests.get("buggy/bad-request"),
  get401Error: () => requests.get("buggy/unauthorized"),
  get404Error: () => requests.get("buggy/not-found"),
  get500Error: () => requests.get("buggy/server-error"),
  getValidationError: () => requests.get("buggy/validation-error"),
};

const agent = {
    Catalog,
    TestErrors
}

export default agent;