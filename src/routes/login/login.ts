import express, {Request, Response} from 'express'

import DateUtils from "../../utils/DateUtils";

const loginRouter = express.Router();

const loginResultData = {
    code: "SUC_PROC_0000",
    message: "요청이 정상적으로 처리되었습니다.",
    responseTime: DateUtils.getDateByTime('yyyyMMddhhmmss', ''),
    response: {
        "osType": "M",
        "profileName": "DAEPANG",
        "token": "token",
        "loginId": "testAdmin"
    }
}

loginRouter.post('/proc', async (req: Request, res: Response): Promise<any> => {
    console.log("login req.params: ", req.params);
    console.log("login req.query: ", req.query);
    console.log("login req.body: ", req.body);

    const response = {...loginResultData.response, loginId: req.query.id};
    const result = {...loginResultData, response: response};

    if ( req.query.id ) {
        res.json(result);
    } else {
        res.json({code: 'fail'});
    }
})

export { loginRouter }