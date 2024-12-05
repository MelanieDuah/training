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
  post:(url:string,body:{})=>instance.post(url,body).then(responseBody)

};
 const paymentTransaction = {
	getAllPayments: (): Promise<Transaction[]> => requests.get('payment'),
  getAllPaymentByCountry: ({country:string}): Promise<Transaction[]> => requests.get(`payment?country={country}`),
  getCountry: (): Promise<Transaction[]> => requests.get('country'),
  getById: ({country:string}): Promise<Transaction[]> => requests.get(`payment?id={id}`),
  getAllPaymentsForOrderId: ({orderId:string}): Promise<Transaction[]> => requests.get('payment?orderId'),
  addPayment: ({Transaction}): Promise<Transaction[]> => requests.post('payment',post),
};
export default paymentTransaction;    