import express, {Request, Response} from 'express'

import DateUtils from "../../utils/DateUtils";

const loginRouter = express.Router();

const loginResultData = {
    code: "SUC_PROC_0000",
    message: "요청이 정상적으로 처리되었습니다.",
    responseTime: DateUtils.getDateByTime('yyyyMMddhhmmss', '', ''),
    response: {
        status: "success"
    }
}
loginRouter.get('/info', async (req: Request, res: Response): Promise<any> => {
    console.log("login req.params: ", req.params);
    console.log("login req.query: ", req.query);
    console.log("login req.body: ", req.body);
    res.json(loginResultData);
})

export { loginRouter }