import webpack from 'webpack';
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import proxyMiddleware from 'http-proxy-middleware';
import clean from './common/clean';
import webpackDevConfig from '../webpack.dev.config';
import config from '../config.json';

/**
 * Start development server with build
 *
 * @return {Promise}
 */
function serve() {
  const compiler = webpack(webpackDevConfig);
  const bs = browserSync.create();
  const proxies = Object.keys(webpackDevConfig.proxy).map(key => proxyMiddleware(
    key, webpackDevConfig.proxy[key]
  ));
  bs.init({
    open: false,
    server: {
      baseDir: `./${config.buildDir}`,
      middleware: [
        historyApiFallback(),
        ...proxies,
        webpackDevMiddleware(compiler, {
          publicPath: webpackDevConfig.output.publicPath,
          stats: { chunks: false, colors: true }
        }),
        webpackHotMiddleware(compiler)
      ]
    },
    files: [
      './src/index.ejs'
    ]
  });

  return Promise.resolve({ skip: true });
}

export default function start() {
  return clean().then(serve);
}
