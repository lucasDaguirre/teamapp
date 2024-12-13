/* NOTE: This is a helper script intended to create a module folder, along with it's corresponding tsx and scss file in the modules directory
To run it, in console type: node mkcmp.js "ModuleName"
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Required for ES modules to get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Get the module name from the command line arguments
const moduleName = process.argv[2];

if (!moduleName) {
  console.error('❌ Please provide a module name.');
  process.exit(1);
}

// Define the paths for the new module
const moduleDir = path.join(__dirname, 'src', 'modules', moduleName);
const moduleFile = path.join(moduleDir, `${moduleName}.tsx`);
const styleFile = path.join(moduleDir, `${moduleName}.scss`);

// Check if the module directory already exists
if (fs.existsSync(moduleDir)) {
  console.error('❌ Module already exists.');
  process.exit(1);
}

// Utility function to convert camelCase or PascalCase to kebab-case
const toKebabCase = (str) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Insert dashes between lowercase and uppercase letters
    .toLowerCase();


// Convert module name to kebab-case for className
const kebabCaseName = toKebabCase(moduleName);

// Create the module directory
fs.mkdirSync(moduleDir, { recursive: true });

// Write the Module.tsx file
const moduleTemplate = 

`import React from 'react';
import './${moduleName}.scss';

const ${moduleName} = () => {
  return (
    <div className="${kebabCaseName}">
      This is the ${moduleName} module :)
    </div>
  )
}

export default ${moduleName};`
;

fs.writeFileSync(moduleFile, moduleTemplate, 'utf8');

// Write the Module.scss file
const styleTemplate = 

`/* ${moduleName.toLowerCase()}.scss */

// IMPORTS

// STYLING
.${kebabCaseName}{
  color: red;
}`
;

fs.writeFileSync(styleFile, styleTemplate, 'utf8');

console.log(`✅ Module ${moduleName} created successfully!`);