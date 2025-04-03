import { expect } from "@playwright/test";
import { test } from "../fixtures/init.fixture";

import BranchDetailComponent from "../page-components/branch-detail.component";
import BranchListComponent from "../page-components/branch-list.component";
import FilterComponent from "../page-components/filter.component";
import SearchComponent from "../page-components/search.component";

test.describe("in Prague 9", () => {
  test("there should be at least one wheelchair accessible z-box", async ({
    page,
  }) => {
    const search = new SearchComponent(page);
    const filter = new FilterComponent(page);
    const branchList = new BranchListComponent(page);

    await branchList.setTopListItem();
    // we have to wait until list is ready
    await branchList.topListItem!.self.waitFor({ state: "visible" });

    await search.input.fillInput("Prague 9");
    await search.filter.click();
    await filter.otherServices.click();
    await filter.otherServices.checkWheelchair();
    await filter.submit();

    const branchName = await branchList.topListItem!.getBranchName();
    await branchList.topListItem!.click();

    const branchDetail = new BranchDetailComponent(
      page,
      new RegExp(branchName, "i"),
    );
    await expect(branchDetail.self).toBeAttached();
    await expect(branchDetail.branchName).toBeVisible();

    await branchDetail.clickTabOther();
    await branchDetail.tabOtherPointInfoRows
      .last()
      .waitFor({ state: "attached" });

    // this is brittle, but since there are no test ids or roles
    // I cannot do better
    const wheelchairRow = branchDetail.tabOtherPointInfoRows.nth(2);

    // not possible to verify the state, since it is marked only by svg icon
    // with no attribute, or something I can use
    await expect(wheelchairRow).toHaveText(/wheelchair access/i);
  });
});
