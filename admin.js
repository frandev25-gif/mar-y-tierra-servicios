// ============================================
// ADMIN PANEL JS - MAR & TIERRA SERVICIOS
// ============================================

const SUPABASE_URL = 'https://ihndsfunllexpaaiyhsd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlobmRzZnVubGxleHBhYWl5aHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzcwODIsImV4cCI6MjA4NDc1MzA4Mn0.haZOIRdBJZevJZWSEZUGZY15J8YMluagKaCT9jwR4qY';

let supabaseAdmin = null;
if (typeof window.supabase !== 'undefined') {
    supabaseAdmin = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// === DOM ELEMENTS ===
const loginSection = document.getElementById('loginSection');
const dashboardSection = document.getElementById('dashboardSection');
const loginForm = document.getElementById('loginForm');
const userProfile = document.getElementById('userProfile');
const userEmail = document.getElementById('userEmail');
const loginError = document.getElementById('loginError');

// === AUTH SESSION ===
async function checkSession() {
    const { data: { session } } = await supabaseAdmin.auth.getSession();
    if (session) {
        showDashboard(session.user);
    } else {
        loginSection.style.display = 'block';
        dashboardSection.style.display = 'none';
    }
}

// === LOGIN HANDLER ===
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    loginError.style.display = 'none';
    const btn = loginForm.querySelector('button');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Ingresando...';

    const { data, error } = await supabaseAdmin.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        loginError.textContent = 'Error: ' + error.message;
        loginError.style.display = 'block';
        btn.disabled = false;
        btn.textContent = 'Ingresar';
    } else {
        showDashboard(data.user);
    }
});

function showDashboard(user) {
    loginSection.style.display = 'none';
    dashboardSection.style.display = 'block';
    userProfile.style.display = 'flex';
    userEmail.textContent = user.email;
    loadAds();
    loadPostulantes();
}

async function handleLogout() {
    await supabaseAdmin.auth.signOut();
    window.location.reload();
}

// === TAB NAVIGATION ===
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const tab = item.dataset.tab;

        // UI Menu change
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Tab content change
        document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
        document.getElementById(`tab-${tab}`).style.display = 'block';
    });
});

// === ADS MANAGEMENT ===
async function loadAds() {
    const { data: ads, error } = await supabaseAdmin
        .from('anuncios')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error loading ads:', error);
        return;
    }

    const tbody = document.getElementById('adsTableBody');
    tbody.innerHTML = '';

    let activeCount = 0;
    ads.forEach(ad => {
        if (ad.activo) activeCount++;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${ad.imagen_url}" class="ad-preview-img"></td>
            <td>${ad.titulo}</td>
            <td style="text-transform: capitalize;">${ad.posicion}</td>
            <td>
                <span class="status-badge ${ad.activo ? 'status-active' : 'status-inactive'}">
                    ${ad.activo ? 'Activo' : 'Pausado'}
                </span>
            </td>
            <td>
                <button onclick="toggleAdStatus('${ad.id}', ${ad.activo})" class="btn-sm" style="background:#eee; color:#333;">
                    <i class="fas ${ad.activo ? 'fa-pause' : 'fa-play'}"></i>
                </button>
                <button onclick="deleteAd('${ad.id}', '${ad.imagen_url}')" class="btn btn-sm btn-delete">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById('countActiveAds').textContent = activeCount;
}

// New Ad Modal
function showNewAdModal() { document.getElementById('modalNewAd').style.display = 'flex'; }
function closeNewAdModal() { document.getElementById('modalNewAd').style.display = 'none'; }

document.getElementById('adForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Guardando...';

    const title = document.getElementById('adTitle').value;
    const link = document.getElementById('adLink').value;
    const pos = document.getElementById('adPosition').value;
    const file = document.getElementById('adFile').files[0];

    try {
        // 1. Upload to Storage (Cambiado a bucket 'anuncios')
        const fileExt = file.name.split('.').pop();
        const fileName = `ad_${Date.now()}.${fileExt}`;

        const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
            .from('anuncios')
            .upload(fileName, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (uploadError) throw new Error(uploadError.message || 'Error de conexión con Storage');

        // 2. Get URL
        const { data: { publicUrl } } = supabaseAdmin.storage
            .from('anuncios')
            .getPublicUrl(fileName);

        // 3. Insert into DB
        const { error: dbError } = await supabaseAdmin
            .from('anuncios')
            .insert([{
                titulo: title,
                imagen_url: publicUrl,
                enlace: link,
                posicion: pos,
                activo: true
            }]);

        if (dbError) throw dbError;

        alert('Anuncio guardado con éxito');
        closeNewAdModal();
        e.target.reset();
        loadAds();
    } catch (err) {
        alert('Error: ' + err.message);
    } finally {
        btn.disabled = false;
        btn.textContent = 'Guardar';
    }
});

async function toggleAdStatus(id, currentStatus) {
    const { error } = await supabaseAdmin
        .from('anuncios')
        .update({ activo: !currentStatus })
        .eq('id', id);

    if (error) alert('Error al actualizar');
    else loadAds();
}

async function deleteAd(id, imageUrl) {
    if (!confirm('¿Estás seguro de eliminar este anuncio?')) return;

    // 1. Delete DB record
    const { error: dbError } = await supabaseAdmin
        .from('anuncios')
        .delete()
        .eq('id', id);

    if (dbError) {
        alert('Error al borrar de base de datos');
        return;
    }

    // 2. Delete file from storage (attempt)
    try {
        const fileName = imageUrl.split('/').pop();
        await supabaseAdmin.storage.from('publicidad').remove([`anuncios/${fileName}`]);
    } catch (e) { console.warn("Could not delete physical file"); }

    loadAds();
}

// === POSTULANTES MANAGEMENT ===
async function loadPostulantes() {
    const { data: postulantes, error } = await supabaseAdmin
        .from('postulantes')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error loading postulantes:', error);
        return;
    }

    const tbody = document.getElementById('postulantesTableBody');
    tbody.innerHTML = '';

    postulantes.forEach(p => {
        const date = new Date(p.created_at).toLocaleDateString();
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="font-size: 0.8rem; opacity: 0.7;">${date}</td>
            <td>${p.nombre}</td>
            <td>${p.email}</td>
            <td>
                <a href="${p.cv_url}" target="_blank" class="btn-sm" style="background:rgba(255,255,255,0.1); color: white; display: inline-flex; align-items: center; gap: 5px;">
                    <i class="fas fa-file-pdf"></i> Ver CV
                </a>
            </td>
            <td>
                <button onclick="deletePostulante('${p.id}')" class="btn-sm btn-delete">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

async function deletePostulante(id) {
    if (!confirm('¿Borrar registro de postulante?')) return;
    const { error } = await supabaseAdmin.from('postulantes').delete().eq('id', id);
    if (error) alert('Error al borrar');
    else loadPostulantes();
}

// Initialize
checkSession();
