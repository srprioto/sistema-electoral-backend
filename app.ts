import dotenv from "dotenv";
import Server from "./src/module/models/server";

dotenv.config();

const server = new Server();

server.listen();