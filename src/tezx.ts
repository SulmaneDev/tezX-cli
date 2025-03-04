#!/usr/bin/env node

import { Command } from "commander";
import LoaderService from "./services/loader.service.js";

const bootstrap = async () => {
    const cmd = new Command("data");
    LoaderService.load(cmd);
    await cmd.parseAsync(process.argv);
};

await bootstrap();
