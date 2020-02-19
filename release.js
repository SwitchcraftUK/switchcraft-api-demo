const ghpages = require('gh-pages');

ghpages.publish('build', function(err) {
    console.log('failed to publish');
});
