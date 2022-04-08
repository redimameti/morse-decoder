module.exports = {
	presets: [["@babel/preset-env", {targets: {node: "current"}}]],
};

// Babel > JavaScript compiler > javascript -> ES6

// Browser Runtime
// import {something} from "./file.js"
// export const something

// Node.js (V8 fork)
// const {something} = require("./file.js")
// module.exports = {something}
