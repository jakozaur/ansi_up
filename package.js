Package.describe({
  name: 'jakozaur:ansi-up',
  summary: 'Convert ANSI color escape codes to HTML',
  version: '1.1.2_1',
  git: 'https://github.com/jakozaur/ansi_up'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.addFiles('meteor/pre_package.js');
  api.addFiles('ansi_up.js');
  api.addFiles('meteor/post_package.js')

  api.export('ansi_up');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jakozaur:ansi-up');
  api.addFiles('meteor/test.js');
});
