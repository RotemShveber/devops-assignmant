const fs = require('fs');

async function run() {
  // 1. Get input
  const apiUrl = process.env.INPUT_API_URL;


  const response = await fetch(apiUrl);
  const data = await response.json();


  if (!data.status || !data.service || !data.timestamp) {
    console.log('::error::Invalid response');
    process.exit(1);
  }


  const markdown = `## API Status

- **Status:** ${data.status}
- **Service:** ${data.service}
- **Timestamp:** ${data.timestamp}
`;


  console.log(markdown);


  const readme = fs.readFileSync('README.md', 'utf8');
  fs.writeFileSync('README.md', readme + '\n' + markdown);
}

run();