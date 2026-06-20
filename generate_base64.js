const fs = require('fs');
const b64 = fs.readFileSync('Source/LOGO.jpg', 'base64');
fs.writeFileSync('logo_b64.js', `const logoBase64 = "data:image/jpeg;base64,${b64}";\n`);
console.log('Done!');
