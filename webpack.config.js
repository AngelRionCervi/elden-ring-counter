const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var nodeExternals = require("webpack-node-externals");

module.exports = [
    {
        name: "client",
        mode: "development",
        entry: "./src/main.ts",
        target: "web",
        output: {
            filename: "js/main.js",
        },
        devServer: {
            port: 8088,
            contentBase: path.join(__dirname, "dist"),
            proxy: {
                "/incgood": "http://localhost:4000",
                "/incpoor": "http://localhost:4000",
                "/getMsgScore": "http://localhost:4000",
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                template: "./dist/index.html",
            }),
        ],
    },
    {
        name: "server",
        entry: "./src/server/main.ts",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        target: "node",
        externals: [nodeExternals()],
        output: {
            filename: "server.js",
        },
    },
];
