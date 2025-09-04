/* eslint-disable no-console */
export class Logger {
  private static environment: string = process.env.REACT_APP_ENV ?? "dev";

  // private static environment: string = environment.environment;

  public static log(message?: any, data?: any) {
    switch (Logger.environment) {
      case "development":
      case "dev":
      case "local":
      case "qa":
        console.log(message, data ?? "");
        break;
      default:
        break;
    }
  }

  public static warning(message?: any, data?: any) {
    switch (Logger.environment) {
      case "local":
      case "dev":
      case "development":
      case "qa":
        console.warn(message, data ?? "");
        break;
      default:
        break;
    }
  }

  public static debug(message?: any, data?: any) {
    console.debug(message, data ?? "");
  }

  public static error(message?: any, data?: any) {
    console.error(message, data ?? "");
  }
}
