module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jpg$/, 
                use: [{ loader: 'file-loader' }]
            }
        ]
    }
};