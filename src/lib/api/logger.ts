import { ENV } from "@/config";
import pino, {
    LogDescriptor,
    LogEvent,
    LoggerOptions,
    SerializedError,
} from "pino";

interface Log extends LogDescriptor {
    component?: string;
    method?: string;
    path?: string;
    requestId?: string;
    status?: number;
    duration?: number;
}

const redactPaths = ["token", "req.headers.authorization"];
const isDev = ENV.NODE_ENV === "development";

const loggerOptions: LoggerOptions = {
    level: ENV.LOG_LEVEL || "info",
    base: { env: ENV.NODE_ENV },
    serializers: {
        err: err =>
            isDev
                ? pino.stdSerializers.err(err)
                : ({ type: err.name, message: err.message } as SerializedError),
    },

    redact: { paths: redactPaths, censor: "[REDACTED]", remove: false },
    timestamp: pino.stdTimeFunctions.isoTime,

    transport: isDev
        ? {
              target: "pino-pretty",
              options: {
                  colorize: true,
                  ignore: "pid,hostname,component,method,path,status,duration",
                  translateTime: "yyyy-mm-dd HH:MM:ss.l",
                  singleLine: false,

                  messageFormat: (
                      log: LogEvent,
                      messageKey: keyof LogEvent
                  ) => {
                      const l = log as Log;
                      const msg = l[messageKey];

                      const component = l.component
                          ? `\x1b[35m[${l.component}]\x1b[0m`
                          : "\x1b[90m[SYSTEM]\x1b[0m";
                      const method = l.method && ` \x1b[36m${l.method}\x1b[0m`;
                      const path = l.path && ` \x1b[32m${l.path}\x1b[0m`;
                      const requestId =
                          l.requestId && ` \x1b[90m[${l.requestId}]\x1b[0m`;
                      let statusStr = "";
                      if (l.status) {
                          const color =
                              l.status >= 500
                                  ? "\x1b[31m"
                                  : l.status >= 400
                                    ? "\x1b[33m"
                                    : "\x1b[32m";
                          statusStr = ` ${color}${l.status}\x1b[0m`;
                      }
                      const durationStr =
                          l.duration && ` \x1b[90m(${l.duration})\x1b[0m`;

                      return `${component}${method}${path}${requestId}${statusStr}${durationStr} --> ${msg}`;
                  },
              },
          }
        : undefined,
};

export const logger = pino(loggerOptions);
