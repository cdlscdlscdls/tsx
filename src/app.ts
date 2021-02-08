import "reflect-metadata"
import {createExpressServer} from "routing-controllers"
import {UserController} from "./controllers/UserController"

// express appの作成。ここでオプションに登録するコントローラーを渡す
const app = createExpressServer({
   controllers: [UserController]
});

// express を port 3000 で起動
app.listen(3000);

