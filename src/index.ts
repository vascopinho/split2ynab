import "dotenv/config";
import { appConfig } from "./config/AppConfig";
import { Scheduler } from "./services/SchedulerService";
import logger from "./utils/Logger";

logger.info(
  `Split2YNAB app started. Scheduled to run every ${appConfig.CRON_FREQUENCY} minutes`
);

const scheduler = new Scheduler();
scheduler.initScheduler();
