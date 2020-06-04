import {
  IFlagArgument,
  IFlagOptions,
  ITypeHandler,
} from "https://deno.land/x/cliffy/flags.ts";

export const email = (): ITypeHandler<string | undefined> => {
  const emailRegex: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    option: IFlagOptions,
    arg: IFlagArgument,
    value: string | false,
  ): string | undefined => {
    if (value) {
      if (!emailRegex.test(value.toLowerCase())) {
        throw new Error(
          `Option --${option.name} must be a valid email but got: ${value}`,
        );
      }
    }

    return value || undefined;
  };
};
