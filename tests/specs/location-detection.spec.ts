import { test } from "../fixtures/init.fixture";
import { expect } from "@playwright/test";
import BranchListComponent from "../page-components/branch-list.component";
import BranchDetailComponent from "../page-components/branch-detail.component";

test.use({
  geolocation: { longitude: 15.132087639379195, latitude: 50.14229720673398 },
});

test.describe("location detection in app", () => {
  const branchName = /z-box poděbrady, kunštátská 1239/i;

  test("should offer closest box to my location via bottom bar widget", async ({
    page,
  }) => {
    const branchDetail = new BranchDetailComponent(page, branchName);

    await expect(branchDetail.self).toBeAttached();
    await expect(branchDetail.branchNameText).toContainText(branchName);
    await expect(branchDetail.btnChoose).toBeVisible();
  });

  test("should offer closest box to my location as top item in the box list", async ({
    page,
  }) => {
    const branchList = new BranchListComponent(page);

    await branchList.setTopListItem();

    await expect(branchList.topListItem!.self).toBeVisible();
    await expect(branchList.topListItem!.branchNameText).toContainText(
      branchName,
    );
  });
});
