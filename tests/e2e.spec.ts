import { test, expect } from "@playwright/test";

test.describe("Bubble Paws E2E", () => {
  test("page loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Bubble Paws/i);
  });

  test("hero section is visible", async ({ page }) => {
    await page.goto("/");
    const headline = page.locator("#home").getByText("Grooming without");
    await expect(headline).toBeVisible();
  });

  test("navigation links scroll to correct sections", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "About" }).first().click();
    await expect(page.locator("#about")).toBeVisible();

    await page.getByRole("link", { name: "Services" }).first().click();
    await expect(page.locator("#services")).toBeVisible();

    await page.getByRole("link", { name: "Contact" }).first().click();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("mobile hamburger menu opens sheet", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Open menu" });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    await expect(page.getByRole("link", { name: "Bubble Paws" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Gallery" }).first()).toBeVisible();
  });

  test("contact form shows validation errors on empty submit", async ({ page }) => {
    await page.goto("/");

    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "Book My Pup" }).click();

    await expect(page.getByText("Name must be at least 2 characters")).toBeVisible();
    await expect(page.getByText("Enter a valid phone number")).toBeVisible();
    await expect(page.getByText("Enter a valid email address")).toBeVisible();
    await expect(page.getByText("Dog breed must be at least 2 characters")).toBeVisible();
    await expect(page.getByText("Please select a dog size")).toBeVisible();
  });

  test("contact form submits successfully in demo mode", async ({ page }) => {
    await page.goto("/");

    await page.locator("#contact").scrollIntoViewIfNeeded();

    await page.fill('input[id="name"]', "Jane Doe");
    await page.fill('input[id="phone"]', "5125550123");
    await page.fill('input[id="email"]', "jane@example.com");
    await page.fill('input[id="dogBreed"]', "Golden Retriever");

    await page.getByRole("combobox", { name: "Service Package" }).click();
    await page.getByRole("option", { name: "Full Groom (~90 min)" }).click();

    await page.getByRole("combobox", { name: "Dog Size" }).click();
    await page.getByRole("option", { name: "Medium (20-50 lbs)" }).click();

    await page.getByRole("button", { name: "Book My Pup" }).click();

    await expect(page.getByText("You're in!")).toBeVisible({ timeout: 10000 });
  });

  test("gallery renders before/after pairs", async ({ page }) => {
    await page.goto("/");

    await page.locator("#gallery").scrollIntoViewIfNeeded();

    const beforeLabels = page.locator("#gallery span").filter({ hasText: /^Before$/ });
    const afterLabels = page.locator("#gallery span").filter({ hasText: /^After$/ });
    await expect(beforeLabels).toHaveCount(12);
    await expect(afterLabels).toHaveCount(12);
  });

  test("404 page shows for nonexistent routes", async ({ page }) => {
    const response = await page.goto("/nonexistent-page");
    expect(response?.status()).toBe(404);

    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByText("Page not found")).toBeVisible();
    await expect(page.getByRole("link", { name: "Go Home" })).toBeVisible();
  });
});
