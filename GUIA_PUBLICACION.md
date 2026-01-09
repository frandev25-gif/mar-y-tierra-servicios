# 🚜 Guía Definitiva de Publicación: Mar & Tierra Servicios

Esta guía contiene los pasos exactos y obligatorios para poner tu sitio web online. Sigue el orden estrictamente para evitar errores de conexión.

---

## �️ Requisitos Previos
1. Tener el dominio abonado en **NIC.ar**.
2. Una cuenta gratuita en **[Cloudflare](https://dash.cloudflare.com/sign-up)** (necesaria para conectar NIC.ar con GitHub).
3. Acceso a tu cuenta de **GitHub**.

---

## 💎 Paso 1: Configurar el "Puente" (Cloudflare)
*NIC.ar no permite poner las IPs de GitHub directamente. Usaremos Cloudflare como traductor.*

1. Entra a [Cloudflare](https://dash.cloudflare.com/sign-up) y crea una cuenta.
2. Haz clic en **"Add a Site"** (Agregar un sitio).
3. Escribe tu dominio: `marytierraservicios.com.ar`.
4. Elige el **Plan Gratuito** (Free $0) que aparece abajo de todo.
5. Cloudflare escaneará registros viejos. Dale a **Continue**.
6. **IMPORTANTE:** Cloudflare te mostrará dos "Nameservers". Anótalos. Se ven algo así:
   - `ara.ns.cloudflare.com`
   - `kellen.ns.cloudflare.com`

---

## 🇦🇷 Paso 2: Delegar en NIC.ar
*Aquí es donde usas la pantalla que me mostraste en la foto.*

1. Entra a [NIC.ar](https://nic.ar) > **Mis Dominios** > **Delegar**.
2. Haz clic en **"+ Agregar una nueva delegación"**.
3. En el campo **Host**, pega el **primer** Nameserver de Cloudflare (ej: `ara.ns.cloudflare.com`).
4. Dale al icono del **Disquito (Guardar)**.
5. Haz clic de nuevo en **"+ Agregar una nueva delegación"**.
6. En el campo **Host**, pega el **segundo** Nameserver de Cloudflare (ej: `kellen.ns.cloudflare.com`).
7. Dale al icono del **Disquito (Guardar)**.
8. Haz clic en **Aplicar Cambios**. 

> ⏳ **Nota:** NIC.ar tarda de 1 a 4 horas en avisarle a Cloudflare que ya tiene el control. Mientras tanto, puedes seguir con el siguiente paso.

---

## 🚀 Paso 3: Configurar los registros en Cloudflare
*Ahora sí, pondremos las direcciones técnicas para que el dominio encuentre tu web en GitHub.*

En el panel de Cloudflare, ve a la pestaña **DNS** > **Records** y agrega estos 5 registros uno por uno:

1. **Registro Tipo A:** Name: `@` | IPv4: `185.199.108.153` | Proxy: **On**
2. **Registro Tipo A:** Name: `@` | IPv4: `185.199.109.153` | Proxy: **On**
3. **Registro Tipo A:** Name: `@` | IPv4: `185.199.110.153` | Proxy: **On**
4. **Registro Tipo A:** Name: `@` | IPv4: `185.199.111.153` | Proxy: **On**
5. **Registro CNAME:** Name: `www` | Target: `frandev25-gif.github.io` | Proxy: **On**

---

## 🐙 Paso 4: Enlazar en GitHub
1. Ve a tu repositorio en GitHub: `mar-y-tierra-servicios`.
2. Entra a **Settings** > **Pages**.
3. En **Custom Domain**, escribe: `marytierraservicios.com.ar` y dale a **Save**.
4. GitHub hará un chequeo DNS. Si los pasos anteriores están bien, dirá "DNS check successful".
5. **CRÍTICO:** Marca la casilla **"Enforce HTTPS"** (puede tardar unos minutos en habilitarse mientras se genera el certificado).

---

## ✅ Resumen de éxito
Si hiciste todo bien:
1. **NIC.ar** apunta a **Cloudflare**.
2. **Cloudflare** apunta a **GitHub**.
3. **GitHub** muestra tu web con seguridad **HTTPS**.

¡Tu sitio debería estar funcionando en las próximas 24 horas! 🚜💨
