const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//本番環境ではESLintは使用しません
if (!mix.inProduction()) {
  mix.webpackConfig({
    module: {
      rules: [
        {
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          test: /\.(ts|tsx)?$/,
          options: {
            fix: true,
            cache: false,
          },
        },
      ],
    },
  });
}

mix.ts('resources/ts/build.ts', 'public/js/chat');
mix.sass('resources/sass/app.scss', 'public/css');
/*
mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');
*/
