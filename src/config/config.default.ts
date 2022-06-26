import { MidwayConfig } from '@midwayjs/core';
import path = require('path');
import { UserEntity } from '../entity/user.entity';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1656236986992_7890',
  koa: {
    port: 7001,
  },
   orm: {
    entities:[UserEntity],
    type: 'sqlite',
    database: path.join(__dirname, '../../test.sqlite'),
    synchronize: true,
    logging: true,
  },
} as MidwayConfig;
