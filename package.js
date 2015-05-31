Package.describe({
  name: 'warehouseman:meteor-node-trello',
  version: '0.0.1',
  summary: 'Enables a Meteor server to act as a client to the Trello REST API.  A simple wrapper for [node-trello](https://github.com/adunkman/node-trello) ',
  git: 'https://github.com/warehouseman/meteor-node-trello',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('client/meteor-node-trello.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('warehouseman:meteor-node-trello');
  api.addFiles('tests/meteor-node-trello-tests.js');
});
