
const message = '%cHappy %cDebugging!';

const defaultStyle = [
  'font-size: 30px',
];

const redBlackStyle = [
  'color: black',
  'background: red',
].concat(defaultStyle).join(';');

const blackRedStyle = [
  'color: red',
  'background: black',
  'font-size: 30px',
].concat(defaultStyle).join(';');

console.log(message, redBlackStyle, blackRedStyle);
