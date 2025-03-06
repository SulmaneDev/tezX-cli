import { Command } from "commander";
import Action from "../actions/abstract.action.js";

/**
 * Cmd
 * ---------------------------------------------------------------------------------------------------------------------
 * This is an abstract class that serves as a base for all CLI commands.
 * All specific CLI commands should extend this class.
 * The class ensures that each command will be associated with an Action
 * and have a load method to define the logic for loading the command.
 * 
 * @abstract
 * @class Cmd
 */
export default abstract class Cmd {
    /**
     * Creates an instance of the Cmd class.
     * 
     * @param action An instance of the Action class that will be associated with the command.
     * 
     * @protected
     */
    constructor(protected action: Action) {}

    /**
     * This method should be implemented by subclasses to define the logic
     * for loading a specific command. This can include setting up the command
     * options, arguments, and any behavior associated with that command.
     * 
     * @param cmd An instance of the Command class from the Commander.js library.
     * @returns any The result of loading the command. This can be any type of return value,
     *         depending on the specific implementation of the `load` method.
     * 
     * @abstract
     */
    abstract load(cmd: Command): any;
};
