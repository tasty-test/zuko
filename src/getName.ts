import {
  IFlagArgument,
  IFlagOptions,
  ITypeHandler,
} from "https://deno.land/x/cliffy/flags.ts";

export const name = (): ITypeHandler<string | undefined> => {
  const nameRegex: RegExp = /^[a-z ,.'-]+$/i;

  return (
    option: IFlagOptions,
    arg: IFlagArgument,
    value: string | false,
  ): string | undefined => {
    if (value) {
      if (!nameRegex.test(value.toLowerCase())) {
        throw new Error(
          `Option --${option.name} must be a valid name but got: ${value}`,
        );
      }
    }

    return value || undefined;
  };
};
