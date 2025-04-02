import { type Page, Locator } from "@playwright/test";
import BranchListItemComponent from "./branch-list-item.component";

export default class BranchListComponent {
  public readonly page: Page;
  public readonly self: Locator;
  public readonly branchListItems: Locator;

  public topListItem?: BranchListItemComponent;

  constructor(page: Page) {
    this.page = page;
    this.self = this.page.locator("branch-list");
    this.branchListItems = this.self.getByTestId("branch_results_list");
    this.topListItem = undefined;
  }

  public async setTopListItem() {
    await this.branchListItems.first().waitFor({ state: "attached" });

    this.topListItem = new BranchListItemComponent(
      this.page,
      this.branchListItems.first(),
    );
  }
}
