# 📝 Guía de Actualización del Sitio - Mar & Tierra Servicios

Sigue estos pasos cada vez que quieras realizar un cambio en tu página web y que se vea reflejado en internet.

---

### Paso 1: Realizar los cambios
Modifica los archivos (`index.html`, `styles.css` o `script.js`) según lo necesites desde tu editor de código.

### Paso 2: Abrir la Terminal
Asegúrate de estar en la carpeta de tu proyecto (`Mar y Tierra Servicios`) en la terminal (PowerShell o CMD).

### Paso 3: Guardar los cambios en Git (Preparación)
Escribe el siguiente comando para decirle a Git que quieres incluir todos los archivos modificados:

```powershell
git add .
```

### Paso 4: Crear el Commit (Etiquetar el cambio)
Dale un nombre a tu cambio para saber qué hiciste. Intenta ser descriptivo:

```powershell
git commit -m "Descripción breve del cambio realizado"
```
*Ejemplo: `git commit -m "cambio de ubicación a Mar del Plata en el footer"`*

### Paso 5: Subir los cambios a la nube (Publicación)
Envía tus cambios a GitHub. Este es el paso que "dispara" la actualización de la página:

```powershell
git push origin master
```

---

### ✅ ¿Cómo verificar que funcionó?

1. **GitHub Pages**: GitHub tarda entre **1 y 3 minutos** en procesar los cambios.
2. **Refrescar la web**: Entra a [marytierraservicios.com.ar](https://marytierraservicios.com.ar) y refresca (puedes usar `Ctrl + F5` para forzar la limpieza de memoria y ver lo nuevo).
3. **Pestaña de "Actions"**: Si entras a tu repositorio en GitHub, verás un círculo (amarillo si está procesando, verde si terminó) en la pestaña **Actions**. Cuando esté verde, el cambio ya es público.

---

### 💡 Tips Útiles

* **¿Qué pasa si me da error al hacer `push`?**
  A veces, si hubo cambios en la nube que no tienes en tu PC, Git te pedirá que primero descargues lo nuevo. Debes hacer:
  ```powershell
  git pull origin master
  ```
  Y luego reintentar el `push`.

* **Nubes de Cloudflare**:
  Recuerda que si el cambio no se ve después de 5 minutos, puede ser que **Cloudflare** tenga guardada la versión vieja. Puedes entrar a tu panel de Cloudflare y hacer un "Purge Cache" (Limpiar Caché).
