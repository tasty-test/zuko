import { CommonCommands } from "./commonCommands.ts";

export class Clean extends CommonCommands {
  constructor() {
    super();
    this.version("0.1.0");
    this.description("register or retrieve user.");
    this.option("-r --recursive [value:boolean]", "Remove recursively");
    this.action(({ recursive }, name: string, args: string[]) => {
      if (name === "file") console.log(`cleaning file ${args ? args : ""}`);
      if (name === "folder") console.log(`cleaning folder ${args ? args : ""}`);
      if (name === "browser")
        console.log(`cleaning browser ${args ? args : ""}`);
    });
  }
}
