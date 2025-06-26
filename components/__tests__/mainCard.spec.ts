import { test, expect } from "@playwright/test";

const Card = {
  title: "Vice Awakens",
  participating: 3,
  imgUrl: "../assets/images/dragon.webp",
  name: "Vice, The Shadow Wyrm",
  hp: 1224,
  damageDone: 21,
};

//npx playwright test

test.describe("MainCard – E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renderiza todos os dados visíveis", async ({ page }) => {
    await expect(page.locator('[data-testid="maincard-title"]')).toHaveText(
      Card.title
    );

    await expect(
      page.locator('[data-testid="maincard-participating"]')
    ).toHaveText(`${Card.participating}/10 Participating`);

    await expect(page.locator('[data-testid="maincard-name"]')).toHaveText(
      Card.name
    );

    await expect(page.locator('[data-testid="image"]')).toBeTruthy();

    await expect(page.locator('[data-testid="maincard-hp"]')).toHaveText(
      `${Card.hp} / 1500 HP`
    );

    await expect(page.locator('[data-testid="maincard-damage"]')).toHaveText(
      `${Card.damageDone} Damage Done`
    );
  });

  test("hp exibido zero", async ({ page }) => {
    const hpText = await page
      .locator('[data-testid="maincard-hp"]')
      .innerText();

    const currentHp = parseInt(hpText.split(" ")[0], 10);
    expect(currentHp).toBeGreaterThan(0);
  });

  test
});
