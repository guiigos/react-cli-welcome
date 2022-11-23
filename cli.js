#!/usr/bin/env node
'use strict';

const React = require('react');
const importJsx = require('import-jsx');
const { render } = require('ink');
const meow = require('meow');

const ui = importJsx('./src/ui');

const cli = meow(`
	Usage
	  $ react-cli-welcome

	Options
		--user  Your GitHub user

	Example
	  $ react-cli-welcome --user=guiigos
`);

render(React.createElement(ui, cli.flags));
