// import { Command } from "https://deno.land/x/cliffy/command.ts";
import { Command } from "https://raw.githubusercontent.com/sanihaq/deno-cliffy/master/command.ts";
import { email } from "./handlers/getEmail.ts";
import { User } from "./commands/user.ts";
import { Clean } from "./commands/clean.ts";
import { Serve } from "./commands/serve.ts";

export class Zuko extends Command {
  constructor() {
    super({ name: "zuko" });
    this.version("0.0.1");
    this.description("i'm zuko!");
    this.type("email", email(), { global: true });
    this.option("-d, --debug", "show debug info", { global: true });
    this.command("user", new User());
    this.command("clean <name:string> [args...:string]", new Clean());
    this.command("serve [dir:string] [args...:string]", new Serve());
  }
}
