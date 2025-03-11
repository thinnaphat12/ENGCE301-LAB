const wbconfig = {
    development: {
        hosturl  : 'https://192.168.3.5:4000/api',
        wsurl    : 'wss://192.168.3.5:4000',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    },
    production: {
        hosturl  : 'https://lab-parse-server.se-rmutl.net/api',
        wsurl    : 'wss://lab-parse-server.se-rmutl.net',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    }
};
export default wbconfig;
