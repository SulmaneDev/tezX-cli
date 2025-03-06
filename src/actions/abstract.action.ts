/**
 * Input type
 * ---------------------------------------------------------------------------------------------------------------------
 * Represents a key-value pair input, typically used to represent command-line arguments
 * or flags passed to a command. Both the key (`name`) and the value (`value`) are
 * represented as strings.
 * 
 * @typedef {Object} Input
 * @property {string} name The name or key of the input (e.g., the name of the argument or flag).
 * @property {string} value The value associated with the input (e.g., the argument value or flag option).
 */
export type Input = {
    name: string;
    value: string;
};

/**
 * Action
 * ---------------------------------------------------------------------------------------------------------------------
 * This is an abstract class that represents a command action. All specific actions
 * should extend this class and implement the `run` method.
 * 
 * The `run` method is intended to perform the logic for the command, utilizing the
 * provided inputs (command arguments, flags, or extra inputs).
 * 
 * @abstract
 * @class Action
 */
export default abstract class Action {
    /**
     * Executes the logic for the command. This method should be implemented by subclasses
     * to handle the action's behavior.
     * 
     * @param cmd An optional array of `Input` objects representing the main command arguments.
     * @param flags An optional array of `Input` objects representing any flags passed with the command.
     * @param extra An optional array of `Input` objects for any additional data that may be provided.
     * 
     * @returns A promise that resolves with the result of the command execution.
     * 
     * @abstract
     */
    abstract run(cmd?: Input[], flags?: Input[], extra?: Input[]): Promise<any>;
};
