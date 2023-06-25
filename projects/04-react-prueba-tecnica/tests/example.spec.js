// @ts-check
// const { test, expect } = require('@playwright/test')
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173'
const PREFIX_URL_IMAGE = 'https://cataas.com'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(PREFIX_URL_IMAGE)).toBeTruthy()
})

test('app shows random fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')

  const textContent = await text.textContent()

  await expect(textContent?.length).toBeGreaterThan(0)
})

test('app shows random image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const image = await page.getByRole('img')

  const imageSrc = await image.getAttribute('src')

  await expect(imageSrc?.startsWith(PREFIX_URL_IMAGE)).toBeTruthy()
})
