// import { Command } from "https://deno.land/x/cliffy/command.ts";
import { Command } from "https://raw.githubusercontent.com/sanihaq/deno-cliffy/master/command.ts";
import { email } from "./handlers/getEmail.ts";
import { User } from "./commands/user.ts";
import { Clean } from "./commands/clean.ts";

type Options = {
  /**
   * show extra debug information
   */
  debug?: boolean;
};

const commands = await new Command()
  .version("0.0.1")
  .description("i'm zuko!")
  .type("email", email(), { global: true })
  .option("-d, --debug", "show debug info", { global: true })
  .command("user", new User())
  .command("clean <name:string> [args...:string]", new Clean())
  .parse();

export const options: Options = commands.options;
