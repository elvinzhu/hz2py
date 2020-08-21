import banner from 'rollup-plugin-banner';
import { terser } from 'rollup-plugin-terser';

const BannerStr = `<%= pkg.name %>@v<%= pkg.version %> https://github.com/elvinzhu/<%= pkg.name %>
(c) 2014-${new Date().getFullYear()} by <%= pkg.author %>
Released under the MIT License.`;

export default [
  {
    input: 'dist/index.js',
    output: [
      {
        file: 'dist/hz2py.min.js',
        format: 'umd',
        name: 'hz2py',
        plugins: [
          terser({
            output: {
              comments: function (node, comment) {
                const { value, type } = comment;
                if (type == 'comment2') {
                  return /license/i.test(value);
                }
              },
            },
          }),
          banner(BannerStr),
        ],
      },
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
      },
    ],
  },
];
