# async-executer
[![NPM version](https://img.shields.io/npm/v/async-executer.svg)](https://www.npmjs.com/package/async-excuter)
[![Build Status](https://travis-ci.org/MarcoVela/async-executer.svg?branch=master)](https://travis-ci.org/MarcoVela/async-executer)

Module that executes a function in sequence with parameters given by the result of an iterator, it accepts an optional
parameter timeout in milliseconds that makes the module wait that amount of time between executions.
If the function returns a Promise, the timeout starts after the Promise resolves or rejects;
## Installing
### In Node.js
The preferred way to install this module for Node.js is to use the [npm](http://npmjs.org) package manager for Node.js.
Simply type the following into a terminal window:

```sh
npm install async-executer
```
## License
This module is distributed under the [MIT License](https://mit-license.org), see LICENSE for more information.