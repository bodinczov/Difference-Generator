#!/usr/bin/env node
import { Command } from "commander";
import parser from "../src/parser.js";

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2, option) => {
    const parsedFile1 = parser(filepath1);
    const parsedFile2 = parser(filepath2);
    if (parsedFile1 && parsedFile2) {
      console.log(`File 1: ${parsedFile1}`);
      console.log(`File 2: ${parsedFile2}`);
    }
    if (option.format) {
      console.log(`Output format: ${options.format}`);
    }
  })

program.parse(process.argv);
