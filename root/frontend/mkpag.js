/* NOTE: This is a helper script intended to create a page folder, along with it's corresponding tsx and scss file in the pages directory
To run it, in console type: node mkcmp.js "PageName"
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Required for ES modules to get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Get the page name from the command line arguments
const pageName = process.argv[2];

if (!pageName) {
  console.error('❌ Please provide a page name.');
  process.exit(1);
}

// Define the paths for the new page
const pageDir = path.join(__dirname, 'src', 'pages', pageName);
const pageFile = path.join(pageDir, `${pageName}.tsx`);
const styleFile = path.join(pageDir, `${pageName}.scss`);

// Check if the page directory already exists
if (fs.existsSync(pageDir)) {
  console.error('❌ page already exists.');
  process.exit(1);
}

// Utility function to convert camelCase or PascalCase to kebab-case
const toKebabCase = (str) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Insert dashes between lowercase and uppercase letters
    .toLowerCase();


// Convert page name to kebab-case for className
const kebabCaseName = toKebabCase(pageName);

// Create the page directory
fs.mkdirSync(pageDir, { recursive: true });

// Write the page.tsx file
const pageTemplate = 

`import React from 'react';
import './${pageName}.scss';

const ${pageName} = () => {
  return (
    <div className="${kebabCaseName}">
      This is the ${pageName} page :)
    </div>
  )
}

export default ${pageName};`
;

fs.writeFileSync(pageFile, pageTemplate, 'utf8');

// Write the page.scss file
const styleTemplate = 

`/* ${pageName.toLowerCase()}.scss */

// IMPORTS

// STYLING
.${kebabCaseName}{
  color: red;
}`
;

fs.writeFileSync(styleFile, styleTemplate, 'utf8');

console.log(`✅ page ${pageName} created successfully!`);