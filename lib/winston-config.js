var winston = require('winston');

winston.loggers.add('app', require('../config/app-log-config'));
winston.loggers.add('hello', require('../config/hello-log-config'));
