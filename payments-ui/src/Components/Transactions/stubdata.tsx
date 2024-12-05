import axios, { AxiosResponse } from 'axios'
import {Transaction} from './transaction'

const instance = axios.create({
	baseURL: 'https://paymentsdemo.neueda.com/api/',
  headers: {
         Accept:"application/json"
      },
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
};
 const paymentTransaction = {
	getAllPayments: (): Promise<Transaction[]> => requests.get('payment'),
};
export default paymentTransaction;