Package.describe({
  summary: 'Simple Zoho integrations for Meteor'
});

Package.on_use(function(api) {
  api.add_files(['lib/zoho.js'], 'server');

  if (typeof api.export !== 'undefined') {
    api.export('Zoho', 'server');
  }
});

Npm.depends({ 'node-zoho': '0.0.8' });
