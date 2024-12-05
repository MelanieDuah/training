# React + TypeScript + Vite


# Steps for MFEs
Note:   npm create vite@latest my-react-app --template react-ts(to create the project)/vite@5.2
- 1 Install dependencies: webpack-cli  webpack-merge html-webpack-plugin ts-loader style-loader css-loader (npm install -D webpack-cli webpack-merge html-webpack-plugin ts-loader style-loader css-loader)
- 2 Create and configure the webpack.config.cjs file at the root of the MFE and put this {const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer : {
        port : 3009,
        historyApiFallback : {
            index : '/index.html'
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    plugins : [
        new HtmlWebpackPlugin({
            template : './index.html'
        }),
        new ModuleFederationPlugin({
            name : 'helloworld',
            filename : 'remoteEntry.js',
            exposes :
                {'./HelloWorld' : '/src/index'}
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
}
- 3 Add start option in package.json(npm install common js ("start": "webpack serve",))
- 4 Emit to true in tsconfig.json and remove     "allowImportingTsExtensions": true,
- 5 Rename maine.tsx -> index.tsx (care about webpack config and index)
-6 

``


# Resources 
- Course website: https://bit.ly/3VdyfX1
- VM login: administrator@c0nygre
- Rest API URL: https://paymentsdemo.neueda.com/swagger-ui/#/  Base URL: https://paymentsdemo.neueda.com
- BitBicket URL with exercices solutions and resources: https://bitbucket.org/treelevel/react-mfe-tampa:
- Augie Demo Repo: https://github.com/schaua/react-mfe
- React logo is not spinning? https://stackoverflow.com/questions/66813198/react-app-localhost3000-logo-not-spinning
- Create a react app: npm create vite@5.2 project-name -- --template react-ts
- EasyRetro: https://easyretro.io/publicboard/NTDqkkm6utgJFD9cdBrdb4sI6n72/7560d5ec-b5d5-4f4e-bac3-06b7ca3793cb


// End of React Day 1 Lab