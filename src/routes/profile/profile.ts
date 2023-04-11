import express, { Request, Response } from 'express';

import DateUtils from '../../utils/DateUtils';

import profileDatailJson from '../../raw/profile/profileDetail.json';
import FriendListJson from '../../raw/profile/friendList.json';

const profileRouter = express.Router();

const profileDetailData = {
  code: 'SUC_PROC_0000',
  message: '요청이 정상적으로 처리되었습니다.',
  responseTime: DateUtils.getDateByTime('yyyyMMddhhmmss', ''),
  response: {
    result: profileDatailJson,
    status: 'success',
  },
};

const friendListData = {
  code: 'SUC_PROC_0000',
  message: '요청이 정상적으로 처리되었습니다.',
  responseTime: DateUtils.getDateByTime('yyyyMMddhhmmss', ''),
  response: {
    result: FriendListJson,
    status: 'success',
  },
};

profileRouter.get('/detail', async (req: Request, res: Response): Promise<any> => {
  res.json(profileDetailData);
});

profileRouter.get('/friendList', async (req: Request, res: Response): Promise<any> => {
  res.json(friendListData);
});

export { profileRouter };
