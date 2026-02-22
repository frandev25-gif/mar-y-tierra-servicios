# Configuración de Supabase para Mar y Tierra Servicios

## Información de Conexión
- **URL del Proyecto**: https://ihndsfunllexpaaiyhsd.supabase.co
- **Clave Anónima**: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlobmRzZnVubGxleHBhYWl5aHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzcwODIsImV4cCI6MjA4NDc1MzA4Mn0.haZOIRdBJZevJZWSEZUGZY15J8YMluagKaCT1jwR4qY

## Pasos de Configuración

### 1. Crear el Bucket de Almacenamiento

1. Ve a tu proyecto de Supabase: https://supabase.com/dashboard/project/ihndsfunllexpaaiyhsd
2. En el menú lateral, haz clic en **Storage**
3. Haz clic en **"New bucket"**
4. Configura el bucket con los siguientes datos:
   - **Name**: `talento`
   - **Public bucket**: ✅ Activado (para que los CVs sean accesibles públicamente)
5. Haz clic en **"Create bucket"**

### 2. Crear la Tabla de Postulantes

1. En el menú lateral, haz clic en **SQL Editor**
2. Haz clic en **"New query"**
3. Copia y pega el siguiente código SQL:

```sql
-- Crear tabla de postulantes
CREATE TABLE IF NOT EXISTS public.postulantes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    telefono TEXT NOT NULL,
    puesto TEXT,
    cv_url TEXT NOT NULL
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.postulantes ENABLE ROW LEVEL SECURITY;

-- Crear política para permitir inserciones públicas (cualquiera puede postularse)
CREATE POLICY "Permitir inserciones públicas" ON public.postulantes
    FOR INSERT
    WITH CHECK (true);

-- Crear política para permitir lecturas autenticadas (solo administradores pueden ver)
CREATE POLICY "Permitir lecturas autenticadas" ON public.postulantes
    FOR SELECT
    USING (auth.role() = 'authenticated');

-- Crear índice para mejorar el rendimiento de las consultas
CREATE INDEX IF NOT EXISTS idx_postulantes_created_at ON public.postulantes(created_at DESC);
```

4. Haz clic en **"Run"** para ejecutar la consulta

### 3. Configurar Políticas de Storage

1. Ve a **Storage** > **Policies**
2. Selecciona el bucket `talento`
3. Crea las siguientes políticas:

#### Política de Inserción (Upload)
```sql
-- Permitir a cualquiera subir archivos
CREATE POLICY "Permitir uploads públicos"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'talento');
```

#### Política de Lectura (Download)
```sql
-- Permitir a cualquiera leer archivos
CREATE POLICY "Permitir lecturas públicas"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'talento');
```

### 4. Verificar la Configuración

1. Ve a **Table Editor** y verifica que la tabla `postulantes` existe
2. Ve a **Storage** y verifica que el bucket `talento` existe
3. Prueba el formulario en tu sitio web local

## Estructura de la Tabla `postulantes`

| Campo      | Tipo      | Descripción                           |
|------------|-----------|---------------------------------------|
| id         | UUID      | Identificador único (auto-generado)  |
| created_at | TIMESTAMP | Fecha y hora de creación             |
| nombre     | TEXT      | Nombre completo del postulante       |
| email      | TEXT      | Email del postulante                 |
| telefono   | TEXT      | Teléfono del postulante              |
| puesto     | TEXT      | Puesto de interés (opcional)         |
| cv_url     | TEXT      | URL pública del CV en Storage        |

## Consultas Útiles

### Ver todos los postulantes
```sql
SELECT * FROM postulantes ORDER BY created_at DESC;
```

### Contar postulantes
```sql
SELECT COUNT(*) FROM postulantes;
```

### Buscar por nombre
```sql
SELECT * FROM postulantes WHERE nombre ILIKE '%nombre%';
```

### Eliminar un postulante
```sql
DELETE FROM postulantes WHERE id = 'uuid-aqui';
```

## Notas Importantes

- Los CVs se almacenan en el bucket `talento` con la ruta: `cvs/timestamp_nombre.extension`
- Los archivos aceptados son: PDF, DOC, DOCX
- El tamaño máximo de archivo está limitado por Supabase (por defecto 50MB)
- La contraseña de administrador actual es `admin123` (cambiar en producción)
- Para ver los postulantes en el sitio web, usa el botón "Ver Postulantes" (solo visible para administradores)
