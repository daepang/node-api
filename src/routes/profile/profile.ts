import express, {Request, Response} from 'express'
import FriendListJson from '../../raw/profile/friendList.json'

const profileRouter = express.Router();

const friendListData = {
    code: "SUC_PROC_0000",
    message: "요청이 정상적으로 처리되었습니다.",
    responseTime: "20230112111359",
    response: {
        result: FriendListJson,
        status: "success"
    }
}

profileRouter.get('/friendList', async (req: Request, res: Response): Promise<any> => {
    res.json(friendListData);
})

export { profileRouter }