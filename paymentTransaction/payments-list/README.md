
# Steps for MFEs
## Day 1
- 0 Create the vite project using v5.2 
- 1 Install dependencies: webpack-cli  webpack-merge html-webpack-plugin ts-loader style-loader css-loader webpack webpack-dev-server
- 2 Create and configure the webpack.config.cjs file at the root of the MFE
- 3 Add start option in package.json -> webpack serve:     "start": "webpack serve",
- 4 NoEmit to false in tsconfig.json and remove     "allowImportingTsExtensions": true,
- 5 import App from './App.js' --> import App from './App' 
- 6 Rename main.tsx -> index.tsx (care about webpack config and index.html)

-------

## Day 2
- Create a mount function linked to a React Component ine a file called index[Component].tsx
- Make modification in your webpack.config.cjs

## Steps for conainter
- Day 1 steps
- Change the port (if copy past)
- Adding the remote deifnition and linked it to our MFE in webpack.config.cjs
- We want to use our remote component
 - [CONTAINER] create the *.d.ts file to make our container accepting our remote component
 - [CONTAINER] import the mount function in the component we want our mfe component to be redered
 - [CONTAINER] mounting the component with useRef, useEffect and mount
 - [CONTAINER] rename index.tsx to bootstrap.tsx.
 - [CONTAINER] create a index.tsx and import your boostrap file
 - [CONTAINER] TEST FIRST THEN
 - [CONTAINER] Wrap the mount function in a component (ex: remotecomponents/HelloWorld)
 - [CONTAINER] clean your App.tsx an use your new remote component.
``
//context/context.tsx

import { Context, createContext } from "react"

export type userType = {id: number, name:string, role:string}
export type userContextType = {user: userType, login:(user: userType) => void, logout: () => void}

export const UserContext: Context<userContextType> = createContext<userContextType>(
    {user:{id: 0, name:'', role:''}, login: () => {}, logout: () => {}} )


# Resources 
- Course website: https://bit.ly/3VdyfX1
- VM login: administrator@c0nygre
- Rest API URL: https://paymentsdemo.neueda.com/swagger-ui/#/  Base URL: https://paymentsdemo.neueda.com
- BitBicket URL with exercices solutions and resources: https://bitbucket.org/treelevel/react-mfe-tampa:
- Augie Demo Repo: https://github.com/schaua/react-mfe
- React logo is not spinning? https://stackoverflow.com/questions/66813198/react-app-localhost3000-logo-not-spinning
- Create a react app: npm create vite@5.2 project-name -- --template react-ts
- EasyRetro: https://easyretro.io/publicboard/NTDqkkm6utgJFD9cdBrdb4sI6n72/7560d5ec-b5d5-4f4e-bac3-06b7ca3793cb





