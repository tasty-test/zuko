import { CommonCommands } from "./commonCommands.ts";
import { main } from "../actions/file_server.ts";

export class Serve extends CommonCommands {
  constructor() {
    super();
    this.version("0.1.0");
    this.description("serve local files.");
    this.option("-p --port [value:number]", "Port for serving file", {
      default: 8000,
    });
    this.action(({ port, debug }, dir: string, args: string[]) => {
      if (!debug) main();
    });
  }
}
