import { Command } from "commander";
import os from "os";
import InfoCommand from "../commands/info.cmd.js";
import InfoAction from "../actions/info.action.js";

export default class LoaderService {
    public static load(cmd: Command) {
        new InfoCommand(new InfoAction()).load(cmd);
    }
}
