import eventHandlerInst, { EventHandler } from "./EventHandler";
import { CronJob } from "cron";
import logger from "../utils/Logger";

export class Scheduler {
  private cronJob: CronJob;

  constructor(private readonly eventHandler: EventHandler = eventHandlerInst) {
    this.cronJob = new CronJob("*/1 * * * *", async () => {
      try {
        logger.info(`Running cron`);
        await this.eventHandler.runHandler();
      } catch (e) {
        logger.error(e);
      }
    });
  }

  public async initScheduler() {
    // Start job
    if (!this.cronJob.running) {
      this.cronJob.start();
    }
  }
}

export default new Scheduler();
