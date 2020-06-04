// import { Command } from "https://deno.land/x/cliffy/command.ts";
import { Command } from "https://raw.githubusercontent.com/sanihaq/deno-cliffy/master/command.ts";
import { EmailType } from "./getEmail.ts";
import { name } from "./getName.ts";

type Options = {
  /**
   * show extra debug information
   */
  debug: boolean;
};

const commands = await new Command()
  .version("0.0.1")
  .description("i'm zuko!")
  .option("-d, --debug", "show debug info")
  .parse();

export const options: Options = commands.options;
