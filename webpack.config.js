module.exports = function getWebpackConfig(env) {  
  // eslint-disable-next-line global-require, import/no-dynamic-require  
  const config = require(`./config/webpack.${env.config}.js`);  
  
  // Ensure the devServer configuration exists  
  if (!config.devServer) {  
    config.devServer = {};  
  }  
  
  // Set the host to '0.0.0.0'  
  config.devServer.host = '0.0.0.0';  
  
  return config;  
};  
