import { Command } from "commander";
import Cmd from "./abstract.cmd.js";
import { Input } from "../actions/abstract.action.js";
import { TEZX } from "../ui/prefixes.js";

export default class InfoCommand extends Cmd {
    public load(cmd: Command) {
        cmd.command("info [command]")
            .alias("i")
            .description(`display ${TEZX} project details.`)
            .action((info) => {
                const input: Input[] = [];
                input.push({
                    name: "info",
                    value: info,
                });
                this.action.run();
            });
    }
}
