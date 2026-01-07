const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Mar & Tierra Servicios Website', () => {
    test.beforeEach(async ({ page }) => {
        // Load the local index.html file
        const filePath = path.resolve(__dirname, '../index.html');
        const fileUrl = `file://${filePath}`;
        await page.goto(fileUrl);
    });

    test('should have the correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/Mar & Tierra Servicios/);
    });

    test('should display the logo', async ({ page }) => {
        const logo = page.locator('.logo');
        await expect(logo).toBeVisible();
    });

    test('should have all main navigation links', async ({ page }) => {
        const navLinks = page.locator('.nav-link');
        const expectedLinks = ['Inicio', 'Servicios', 'Maquinaria', 'Zona de Trabajo', 'Nosotros', 'Contacto'];

        for (const linkText of expectedLinks) {
            await expect(navLinks.filter({ hasText: linkText })).toBeVisible();
        }
    });

    test('should have a working WhatsApp link in hero', async ({ page }) => {
        const whatsappBtn = page.locator('.hero .btn-whatsapp');
        await expect(whatsappBtn).toBeVisible();
        const href = await whatsappBtn.getAttribute('href');
        expect(href).toContain('wa.me');
    });

    test('should display the services section', async ({ page }) => {
        const servicesSection = page.locator('#servicios');
        await expect(servicesSection).toBeVisible();
        const serviceCards = page.locator('.service-card');
        await expect(serviceCards).toHaveCount(4);
    });

    test('should display the machinery section', async ({ page }) => {
        const machinerySection = page.locator('#maquinaria');
        await expect(machinerySection).toBeVisible();
        // Wait for dynamic content to load
        const machineryCards = page.locator('.machinery-card');
        await expect(machineryCards).toHaveCount(4);
    });

    test('should show contact form', async ({ page }) => {
        const contactForm = page.locator('#contactForm');
        await expect(contactForm).toBeVisible();
        await expect(page.locator('#name')).toBeVisible();
        await expect(page.locator('#phone')).toBeVisible();
        await expect(page.locator('#message')).toBeVisible();
    });
});
