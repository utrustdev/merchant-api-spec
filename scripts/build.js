#!/usr/bin/env node
'use strict';
var Path = require('path');

require('shelljs/global');
set('-e');

mkdir('-p', 'docs')

cp('-R', 'web/*', 'docs/');

exec('npm run swagger bundle --        -o docs/swagger.json');
exec('npm run swagger bundle -- --yaml -o docs/swagger.yaml');

var SWAGGER_UI_DIST = Path.dirname(require.resolve('swagger-ui'));
rm('-rf', 'docs/swagger-ui/')
cp('-R', SWAGGER_UI_DIST, 'docs/swagger-ui/')
sed('-i', 'http://petstore.swagger.io/v2/swagger.json', '../swagger.json', 'docs/swagger-ui/index.html')

