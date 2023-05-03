// Import av FS paket
// Fs paket är inbyggt i Node
const fs = require(`fs`);

const filepath = `./data.text`;

fs.existsSync(filepath)

fs.readFile('./data.text', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    // Skriv ut filens innehåll
    console.log(data);
  });

  



