Package.describe({
  name: 'warehouseman:meteor-node-trello',
  version: '0.0.1',
  summary: 'Enables a Meteor server to act as a client to the Trello REST API.  A simple wrapper for [node-trello](https://github.com/adunkman/node-trello) ',
  git: 'https://github.com/warehouseman/meteor-node-trello',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('meteor-platform');

  api.use('meteorhacks:async', 'server');
  api.versionsFrom('1.1.0.2');

  api.addFiles(['lib/trello-creds.js'], ['server', 'client']);

  api.export('proxyTrello', 'server');
  api.addFiles(['server/meteor-node-trello.js'], 'server');

  api.use('jquery', 'client');
  api.export('wrapper', 'server');
  api.addFiles('client/trello_client.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meteorhacks:async', 'server');
  api.use('warehouseman:meteor-node-trello');
  api.addFiles('tests/meteor-node-trello-tests.js');
});

Npm.depends({
  'node-trello': '1.1.2'
});

