const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const Provider = require('react-redux').Provider;
const getRoutes = require('./components/routes').default;
const configureStore = require('../../src/store/configure-store').default;

const isDev = process.env.NODE_ENV === 'development';

const config = {
  styles: isDev ? ['/build/client.css'] : ['/assets/client.css'],
  scripts: isDev ? ['/build/bundle.js'] : ['/bundle.js'],
};
const template = fs.readFileSync(path.join(process.cwd(), 'template', 'index.html'), 'utf8');

/**
 * base html template
 */
function getMarkup(reactElement, store, assets) {
  const markup = ReactDOMServer.renderToString(reactElement);
  const initialState = store.getState();
  const scripts = assets.scripts.reduce((str, url) => `${str}<script src="${url}"></script>\n`, '');
  const stylesheets = assets.styles.reduce((str, url) => `${str}<link rel="stylesheet" href="${url}"></link>\n`, '');

  return [
    { key: '%HEAD%', value: `<script>window.__STORE__ = ${JSON.stringify(initialState)};</script>\n${stylesheets}` },
    { key: '%MARKUP%', value: markup },
    { key: '%BODY_SCRIPT%', value: scripts },
  ].reduce((str, current) => str.replace(current.key, current.value), template);
}

function applyUserLocaleToGlobal(req) {
  global.USER_LOCALE = req.cookies.locale || req.locale;
}

module.exports = (req, res) => {
  applyUserLocaleToGlobal(req);
  const match = ReactRouter.match;
  const routerContext = React.createFactory(ReactRouter.RouterContext);
  const provider = React.createFactory(Provider);
  const routes = getRoutes();

  // XXX: prefetch
  const initialState = {
  };

  const store = configureStore(initialState);

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.send(getMarkup(provider({ store }, routerContext(renderProps)), store, config));
    } else {
      res.status(404).send('Not found');
    }
  });
};
