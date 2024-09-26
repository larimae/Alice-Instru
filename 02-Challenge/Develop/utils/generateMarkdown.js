// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';

  // Use a mapping for license names
  const licenseMap = {
    'MIT': 'MIT',
    'GPL-3.0': 'GPLv3',
    'Apache-2.0': 'Apache%202.0',
    'BSD-3-Clause': 'BSD%203-Clause'
  };

  const badgeLicense = licenseMap[license];
  if (!badgeLicense) return '';

  return `[![License](https://img.shields.io/badge/license-${badgeLicense}-blue.svg)](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  return `[License](#license)\n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `
## License
This project is licensed under the ${license} license.` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
  ${data.description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- ${renderLicenseLink(data.license)}

  
## Installation
  To install the dependencies needed to run the program, run the command below:
  \`\`\`
  npm install
  \`\`\`
  ${data.installation || 'Installation instructions found here.'}
  
## Usage
  ${data.usage || 'Usage instructions found here.'}

## Contributing
  ${data.contributing || 'Contribution guidelines found here.'}

## Tests
  To run the tests for this program, run the command below:
  \`\`\`
  npm test
  \`\`\`
  ${data.tests || 'Test instructions found here.'}
  
## Questions
  If you have any questions or concerns, please don't hesitate to reach out to me  at ${data.email || 'email address'}. Or you can visit my GitHub profile at [${data.githubUsername}](https://github.com/${data.githubUsername}).

## License
This project is licensed under the ${renderLicenseBadge(data.license)} license.


`;
}

export default generateMarkdown;
