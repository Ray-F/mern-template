class Logger {
  logInfo(message: string) {
    console.log(Logger.generateLogString(message));
  }

  logWarn(message: string) {
    console.log(Logger.generateLogString(message));
  }

  logError(message?: string) {
    console.error(
      Logger.generateLogString(message || 'An unknown error occurred')
    );
  }

  private static generateLogString(message: string): string {
    return `[Server] ${message}`;
  }
}

const logger = new Logger();

export { logger };
