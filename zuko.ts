#!/usr/bin/env -S deno install --allow-net --allow-read -allow-write --allow-env
import { red } from "https://deno.land/std/fmt/colors.ts";
import { options } from "./src/commands.ts";
if (import.meta.main && Deno.args.length > 0) {
  if (options.debug) {
    console.log(`${Deno.args[0]}:`, options, Deno.args);
  }
} else console.log(red("Please pass an argument!"));
