#!/usr/bin/env node

/**
 * Module dependencies.
 */
var program = require('commander');
const spawn = require('cross-spawn');
var server = require('./server')
var template = require('./template')
var resolve = require('./resolve-slides')
var path = require('path')

program
    .version('0.0.11')

program
  .command('serve')
  .description('serve presentation slides directory')
  .action(function(cmd, options) {
    server(template(
      { 
        title: 'kc',
        slides: resolve(path.join(process.cwd(), 'slides')),
        base: 'http://localhost:3000'
      }))
  }).on('--help', function () {
  });

program.parse(process.argv);

if (!program.args.length) program.help();