#!/usr/bin/env -S deno install --allow-net --allow-read -allow-write --allow-env
import { red } from "https://deno.land/std/fmt/colors.ts";
import { Zuko } from "./src/mod.ts";
if (import.meta.main) {
  const zuko = await new Zuko();
  if (Deno.args.length > 0) {
    const { options } = await zuko.parse();
    if (options.debug) {
      const command = ["-d", "--debug"].some((cmd) => Deno.args[0] === cmd)
        ? "zuko"
        : Deno.args[0];
      console.log(`${command}:`, options);
    }
  } else {
    console.log(red("Please pass an argument!"));
    zuko.help();
  }
}
