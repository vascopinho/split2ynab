import * as winston from "winston";

const myFormat = winston.format.printf(
  ({ level, message, label, timestamp }) => {
    return `[${timestamp}] ${level}: ${message}`;
  }
);

const logger: winston.Logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    myFormat
  ),
  transports: [
    new winston.transports.Console({
      level: "info",
    }),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

export default logger;
