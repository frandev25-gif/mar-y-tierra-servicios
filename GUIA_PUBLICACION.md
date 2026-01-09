# 🚜 Guía Completa de Publicación: Mar & Tierra Servicios

Esta guía detalla los pasos para adquirir tu dominio propio y poner tu sitio web online para todo el mundo utilizando **GitHub Pages** (Hosting Gratuito) y un dominio personalizado (**.com.ar** o **.com**).

---

## 💎 Parte 1: Adquisición del Dominio

El dominio es la dirección de tu empresa en internet (ej: `marytierraservicios.com.ar`).

### ¿Dónde comprar?
1. **Para dominios `.com.ar` (Recomendado para Argentina):** 
   - Sitio oficial: [NIC Argentina](https://nic.ar).
   - Es el registro oficial administrado por el gobierno.
2. **Para dominios `.com` (Internacional):**
   - Sitios: [DonWeb](https://donweb.com), [GoDaddy](https://godaddy.com), [Hostinger](https://hostinger.com.ar).

### Precios Estimados (Anual)
*Precios aproximados a Enero 2026:*
* **.com.ar:** Entre **$25.000 y $35.000 ARS** (+ impuestos).
* **.com:** Entre **$15 y $20 USD** (aprox. $20.000 a $30.000 ARS dependiendo del tipo de cambio).

### ¿Cómo comprar en NIC.ar?
1. Ingresá a [nic.ar](https://nic.ar) con tu **CUIL/CUIT y Clave Fiscal** (vía AFIP).
2. Buscá el nombre: `marytierraservicios`.
3. Si está disponible, hacé clic en **Registrar**.
4. Confirmá los datos y generá el cupón de pago (vía PagoMisCuentas, VEP o Rapipago).
5. Una vez pagado, el dominio será tuyo por 1 año.

---

## 🚀 Parte 2: Publicación en GitHub Pages (Gratis)

Como ya subimos el código a tu cuenta de GitHub, el "almacenamiento" de la web es **gratuito**.

1. Entrá a tu repositorio: `https://github.com/frandev25-gif/mar-y-tierra-servicios`.
2. Andá a la pestaña **Settings** (Configuración).
3. En el menú lateral izquierdo, buscá **Pages**.
4. En **Build and deployment**, verificá que esté seleccionado:
   - Branch: `master`
   - Folder: `/(root)`
5. Hacé clic en **Save**.

---

## 🛠️ Parte 3: Conectar el Dominio (Configuración DNS)

Este es el paso técnico para que cuando alguien escriba tu dominio, se abra la web de GitHub.

### Paso A: Verificación de Propiedad (Lo que te pide GitHub ahora)
1. En la misma pantalla de **Pages** de GitHub, buscá la sección **Custom Domain**.
2. Escribí tu dominio: `marytierraservicios.com.ar`.
3. GitHub te pedirá "Verificar el dominio". Te dará un **Registro TXT**.
4. Entrá a tu panel de NIC.ar (o donde compraste el dominio).
5. Buscá "Configuración de DNS" o "Delegación".
6. Agregá un registro tipo **TXT** con el nombre y el valor que te dio GitHub.
7. Esperá unos minutos y dale a **Verificar** en GitHub.

### Paso B: Apuntar el Dominio
Una vez verificado, debés agregar los siguientes registros en tu panel de control de dominio (Zonas DNS):

1. **Registros tipo A (Agregá estos 4):**
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. **Registro tipo CNAME:**
   - Nombre: `www`
   - Valor: `frandev25-gif.github.io`

---

## ✅ Parte 4: Toques Finales

1. **HTTPS (Seguridad):** En la configuración de GitHub Pages, una vez que el dominio esté conectado, marcá la opción **"Enforce HTTPS"**. Esto pondrá el candado de seguridad al lado de tu dirección.
2. **Propagación:** Los cambios de dominio pueden tardar entre **1 y 24 horas** en funcionar en todo el mundo. ¡Tené un poco de paciencia!

---

### 💡 Recomendación de Oro
Si no querés complicarte con las configuraciones técnicas de DNS de NIC.ar directamente (que a veces es limitado), podés usar **Cloudflare** (Gratis). Actúa como un escudo para tu web, la hace más rápida y es mucho más fácil de configurar que otros paneles.

¡Éxitos con el gran lanzamiento de Mar & Tierra Servicios! 🚜💨
