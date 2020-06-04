import { name } from "../handlers/getName.ts";
import { CommonCommands } from "./commonCommands.ts";

export class User extends CommonCommands {
  private username: string = "anonymous";
  constructor() {
    super();
    this.version("0.1.0");
    this.description("register or retrieve user.");
    this.type("name", name());
    this.option("-n --name <value:name>", "get or set user name");
    this.option("-e --email <value:email>", "your contact email");
    this.action(({ name, email }) => {
      if (name) this.username = name;
      console.log(this.username, `(${email ? email : "*"})`);
    });
  }
}
