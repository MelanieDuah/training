# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

// End of React Day 1 Lab

// Idea of components:
// Header, Menu, TransactionList,Transaction, Search (example on the board)

// export type Transaction = {
//   id: number;
//   amount: number;
//   country: string;
//   currency: string;
//   date: string;
//   orderId: string;
//   taxCode: number;
//   taxRate: number;
//   type: string;
// };

// const data: Transaction[] = [
//   {
//     id: 139235,
//     amount: 60,
//     country: "usa",
//     currency: "usd",
//     date: "2018-12-30",
//     orderId: "21213627",
//     taxCode: 0,
//     taxRate: 0,
//     type: "VISA",
//   },
//   {
//     id: 139236,
//     amount: 35,
//     country: "usa",
//     currency: "usd",
//     date: "2018-12-30",
//     orderId: "21213448",
//     taxCode: 0,
//     taxRate: 0,
//     type: "VISA",
//   },
// ];
