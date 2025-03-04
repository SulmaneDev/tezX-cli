export type Input = {
    name:string;
    value:string;
};

export default abstract class Action {
    abstract run(cmd?:Input[],flags?:Input[],extra?:Input[]): Promise<any>;
};