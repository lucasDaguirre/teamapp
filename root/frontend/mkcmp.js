/* NOTE: This is a helper script intended to create a component folder, along with it's corresponding tsx and scss file in the components directory
To run it, in console type: node mkcmp.js "ComponentName"
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Required for ES modules to get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Get the component name from the command line arguments
const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Please provide a component name.');
  process.exit(1);
}

// Define the paths for the new component
const componentDir = path.join(__dirname, 'src', 'components', componentName);
const componentFile = path.join(componentDir, `${componentName}.tsx`);
const styleFile = path.join(componentDir, `${componentName}.scss`);

// Check if the component directory already exists
if (fs.existsSync(componentDir)) {
  console.error('❌ Component already exists.');
  process.exit(1);
}

// Utility function to convert camelCase or PascalCase to kebab-case
const toKebabCase = (str) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Insert dashes between lowercase and uppercase letters
    .toLowerCase();


// Convert component name to kebab-case for className
const kebabCaseName = toKebabCase(componentName);

// Create the component directory
fs.mkdirSync(componentDir, { recursive: true });

// Write the Component.tsx file
const componentTemplate = 

`import React from 'react';
import './${componentName}.scss';

const ${componentName} = () => {
  return (
    <div className="${kebabCaseName}">
      This is the ${componentName} component :)
    </div>
  )
}

export default ${componentName};`
;

fs.writeFileSync(componentFile, componentTemplate, 'utf8');

// Write the Component.scss file
const styleTemplate = 

`/* ${componentName.toLowerCase()}.scss */

// IMPORTS

// STYLING
.${kebabCaseName}{
  color: red;
}`
;

fs.writeFileSync(styleFile, styleTemplate, 'utf8');

console.log(`✅ Component ${componentName} created successfully!`);