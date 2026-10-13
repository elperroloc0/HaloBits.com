import { test, expect } from '@playwright/test';

// The EN / ES / RU switcher in the nav should take you to the SAME page in the
// other language, and the page should actually be in that language.
const nav = (page: import('@playwright/test').Page) =>
  page.getByRole('navigation').first();

test('switches /about/ between EN, ES and RU', async ({ page }) => {
  await page.goto('/about/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(nav(page).locator('a.lang-link[hreflang="en"]')).toHaveAttribute(
    'aria-current',
    'true',
  );

  await nav(page).locator('a.lang-link[hreflang="es"]').click();
  await expect(page).toHaveURL(/\/es\/about\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(nav(page).locator('a.lang-link[hreflang="es"]')).toHaveAttribute(
    'aria-current',
    'true',
  );

  await nav(page).locator('a.lang-link[hreflang="ru"]').click();
  await expect(page).toHaveURL(/\/ru\/about\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru');

  await nav(page).locator('a.lang-link[hreflang="en"]').click();
  await expect(page).toHaveURL(/\/about\/$/);
  await expect(page).not.toHaveURL(/\/(es|ru)\//);
});

test('home page links to each language root', async ({ page }) => {
  await page.goto('/');
  for (const [code, path] of [
    ['en', '/'],
    ['es', '/es/'],
    ['ru', '/ru/'],
  ]) {
    await expect(nav(page).locator(`a.lang-link[hreflang="${code}"]`)).toHaveAttribute(
      'href',
      path,
    );
  }
});
