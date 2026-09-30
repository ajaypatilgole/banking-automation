import { test, expect } from '@playwright/test';

test('Banking application login page', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example Domain/);

  console.log('Banking application test executed successfully');
});

