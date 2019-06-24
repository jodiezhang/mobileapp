const path = require('path');

const appData = require('./data.json');

const { seller } = appData;
const { goods } = appData;
const { ratings } = appData;

function resolve(dir) {
  // eslint-disable-next-line no-undef
  return path.join(__dirname, dir);// __dirname 是当前目录，也就是vue.config.js目录
  // 拼接路径
}


module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme',
        ],
      },
    },
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true,
    },
  },
  devServer: {// all options in webpack devSever can be configured here
    // https://cli.vuejs.org/config/#css-loaderoptions
    //  https://webpack.js.org/configuration/dev-server/
    before(app) {
      app.get('/api/seller', (req, res) => {
        const id=req.query.id
        res.json({
          errno: 0,
          data: Object.assign({},seller,{id}),
        });
      });

      app.get('/api/goods', (req, res) => {
        res.json({
          errno: 0,
          data: goods,
        });
      });

      app.get('/api/ratings', (req, res) => {
        res.json({
          errno: 0,
          data: ratings,
        });
      });
    },


  },

  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'));
  },


};
