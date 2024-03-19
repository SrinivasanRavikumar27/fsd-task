// import logger js
const {Info,Error} = require('./logger.js');
// import date and time
const dateAndTime = require('./dateAndTime.js');

// request logger
const requestLogger = (request,response,next) => {
    Info('Method : ',request.method);
    Info('Path   : ',request.path);
    Info( 'Body   : ', JSON.stringify(request.body));
    Info('Requested Time   : ',dateAndTime);
    Info('........................')
    next();
};

module.exports=requestLogger;