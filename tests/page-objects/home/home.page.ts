import BasePage from "../base.page";
import type { Page } from "@playwright/test";

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
