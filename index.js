#!/usr/bin/env node

const tarun = require('./tarun');

const command = process.argv[2];

switch (command) {
  case 'tarun':
    tarun();
    break;
  default:
    console.error('name not available');
    process.exit(1);
}
