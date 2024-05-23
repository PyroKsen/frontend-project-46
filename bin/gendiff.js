const { program } = require('commander');
const { parseData } = require('../src/index.js')

program
    .arguments('<filepath1> <filepath2>')
    .version('1.0.0', '-V, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference')
    .option('-f, --format <type>', 'output format')
    .option('-h, --help', 'output usage information')
    .help()
program.parse();

const [filepath1, filepath2] = program.arguments;

const data1 = parseData(filepath1);
const data2 = parseData(filepath2);

const absoluteFilepath1 = path.resolve(process.cwd(), filepath1);
const absoluteFilepath2 = path.resolve(process.cwd(), filepath2);

console.log('Данные из file1.json:', data1);
console.log('Данные из file2.json:', data2); 