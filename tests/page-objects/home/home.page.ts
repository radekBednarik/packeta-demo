import type { Page } from "@playwright/test";
import BasePage from "../base.page";

export default class HomePage extends BasePage {
  public readonly url: string;

  constructor(page: Page) {
    super(page);

    this.url = "/v6/";
  }

  public async visit() {
    await super.visit(this.url);
  }
}
