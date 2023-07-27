'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    prember: {
      urls: ['/'],
    },

    'ember-bootstrap': {
      bootstrapVersion: 4,
      importBootstrapCSS: false,
    },

    'ember-cli-terser': {
      enabled: true,
    },

    'responsive-image': {
      images: [
        {
          include: [
            'assets/images/projects/barn/**/*',
            'assets/images/projects/industrial-engineering/**/*',
            'assets/images/projects/milking-complex/**/*',
            'assets/images/projects/kolo/**/*',
          ],
          widths: [600],
        },
      ],
    },
  });

  return app.toTree();
};
