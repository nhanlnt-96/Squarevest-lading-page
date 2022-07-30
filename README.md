# Squarevest

## Build project

```
npm run build
```

## Serve project

```
npm run serve
```

## How to add pages

To add a new html page, you also have to add it to the plugins in the webpack.config.js

```
new HtmlWebpackPlugin({
	filename: 'title.html',
	template: 'title.html'
})
```
