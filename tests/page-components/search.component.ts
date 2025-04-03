import { type Page, Locator } from "@playwright/test";
import InputFilterComponent from "./input.filter.component";
import InputSearchComponent from "./input.search.component";

export default class SearchComponent {
  public readonly page: Page;
  public readonly input: InputSearchComponent;
  public readonly filter: InputFilterComponent;

  public readonly self: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = new InputSearchComponent(page);
    this.filter = new InputFilterComponent(page);

    this.self = this.page.locator("[class ^= 'branchSearchContainer'");
  }
}
