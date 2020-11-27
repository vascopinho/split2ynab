import eventHandlerInst, { EventHandler } from "./EventHandler";
import { CronJob } from "cron";
import logger from "../utils/Logger";
import { appConfig } from "../config/AppConfig";

export class Scheduler {
  private cronJob: CronJob;

  constructor(private readonly eventHandler: EventHandler = eventHandlerInst) {
    this.cronJob = new CronJob(
      `*/${appConfig.CRON_FREQUENCY} * * * *`,
      async () => {
        try {
          logger.info(`Running cron`);
          await this.eventHandler.runHandler();
        } catch (e) {
          logger.error(e);
        }
      }
    );
  }

  public async initScheduler() {
    // Start job
    if (!this.cronJob.running) {
      this.cronJob.start();
    }
    // Run now!
    try {
      logger.info(`Sync now!`);
      await this.eventHandler.runHandler();
    } catch (e) {
      logger.error(e);
    }
  }
}

export default new Scheduler();
