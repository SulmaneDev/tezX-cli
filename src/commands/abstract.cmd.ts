import { Command } from "commander";
import Action from "../actions/abstract.action.js";

export default abstract class Cmd {
    constructor(protected action:Action) {}
    abstract load(cmd:Command): any;
};