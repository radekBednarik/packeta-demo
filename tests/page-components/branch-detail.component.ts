import { type Page, Locator } from "@playwright/test";

export default class BranchDetailComponent {
  public readonly page: Page;

  public readonly self: Locator;
  public readonly branchName: Locator;
  public readonly branchNameText: Locator;
  public readonly btnChoose: Locator;

  public readonly tabOther: Locator;
  public readonly tabOtherSection: Locator;
  public readonly tabOtherPointInfoRows: Locator;

  constructor(page: Page, branchName: string | RegExp) {
    this.page = page;

    this.self = this.page.getByTestId("branch_dextail");
    this.branchName = this.self.locator("[class = 'branch-name']");
    this.branchNameText = this.self.getByText(branchName);
    this.btnChoose = this.page.getByRole("button", {
      name: /choose this box/i,
    });
    this.tabOther = this.self.getByText(/other/i);
    this.tabOtherSection = this.page.locator("[class = 'tab-other']");
    this.tabOtherPointInfoRows = this.tabOtherSection
      .locator("[class = 'point-info']")
      .locator('[class = "point-row"]');
  }

  public async clickTabOther() {
    await this.tabOther.click();
  }
}
