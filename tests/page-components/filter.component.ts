import { type Page, Locator } from "@playwright/test";
import OtherServicesFilterComponent from "./other-services.filter.component";

export default class FilterComponent {
  public readonly page: Page;
  public readonly otherServices: OtherServicesFilterComponent;

  public readonly self: Locator;
  public readonly btnSubmit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.otherServices = new OtherServicesFilterComponent(page);

    this.self = this.page.locator("[class ^= 'moleculeSidebar']");
    this.btnSubmit = this.self.getByTestId("filter_submit");
  }

  public async submit() {
    await this.btnSubmit.click();
  }
}
