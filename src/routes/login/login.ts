import express, {Request, Response} from 'express'

const loginRouter = express.Router();

const loginResultData = {
    code: "SUC_PROC_0000",
    message: "요청이 정상적으로 처리되었습니다.",
    responseTime: "20230112111359",
    response: {
        status: "success"
    }
}
loginRouter.get('/login', async (req: Request, res: Response): Promise<any> => {
    res.json(loginResultData);
})

export { loginRouter }