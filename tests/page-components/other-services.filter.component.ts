import { type Page, Locator } from "@playwright/test";

export default class OtherServicesFilterComponent {
  public readonly page: Page;

  public readonly dropdownTrigger: Locator;
  public readonly checkboxWheelchair: Locator;

  constructor(page: Page) {
    this.page = page;

    this.dropdownTrigger = this.page.getByTestId("filter_other_section");
    this.checkboxWheelchair = this.page.getByTestId("wheelChair");
  }

  public async click() {
    await this.dropdownTrigger.click();
  }

  public async checkWheelchair() {
    await this.checkboxWheelchair.click();
  }
}
