import express, { Request, Response } from 'express';

import DateUtils from '../../utils/DateUtils';

const loginRouter = express.Router();

const loginResultData = {
  code: 'SUC_PROC_0000',
  message: '요청이 정상적으로 처리되었습니다.',
  responseTime: DateUtils.getDateByTime('yyyyMMddhhmmss', ''),
  response: {
    osType: 'M',
    profileName: 'DAEPANG',
    token: 'token',
    loginId: 'testAdmin',
  },
};

const idEmptyRes = {
  code: 'FAIL_ID_EMPTY',
  message: '아이디를 입력해주세요.',
  responseTime: DateUtils.getDateByTime('yyyyMMddhhmmss', ''),
};

const passwordEmptyRes = {
  code: 'FAIL_PASSWORD_EMPTY',
  message: '비밀번호를 입력해주세요.',
  responseTime: DateUtils.getDateByTime('yyyyMMddhhmmss', ''),
};

loginRouter.post('/proc', async (req: Request, res: Response): Promise<any> => {
  console.log('login req.params: ', req.params);
  console.log('login req.query: ', req.query);
  console.log('login req.body: ', req.body);

  const response = { ...loginResultData.response, loginId: req.query.id };
  const result = { ...loginResultData, response: response };

  if (req.query.id && req.query.password) {
    res.json(result);
  } else if (!req.query.id) {
    res.json(idEmptyRes);
  } else if (!req.query.password) {
    res.json(passwordEmptyRes);
  }
});

export { loginRouter };
