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

console.log('\n');
console.log('\x1b[37mCreated by Tarun Gupta');
console.log('\x1b[37mDM me at \x1b[38;5;39mhttps://twitter.com/messages/compose?recipient_id=maybetarun \x1b[37mto make ur own. \x1b[37m');
console.log('\n');