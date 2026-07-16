/**
 * Attendance Register API — Vercel Serverless Function
 * In-memory storage (resets on cold start).
 * Frontend falls back to localStorage if API is unavailable.
 */

let students = [];

function json(res, status, data) {
    const body = JSON.stringify(data);
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(body);
}

function readBody(req) {
    return new Promise((resolve) => {
        let body = '';
        req.on('data', c => { body += c; });
        req.on('end', () => {
            try { resolve(JSON.parse(body || '{}')); }
            catch { resolve({}); }
        });
    });
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const url = req.url || '';
    const method = req.method;

    try {
        // GET /api/students — list all students
        if (method === 'GET' && url === '/api/students') {
            return json(res, 200, { students });
        }

        // POST /api/students — add a student
        if (method === 'POST' && url === '/api/students') {
            const body = await readBody(req);
            const id = String(body.id || '').trim();
            const name = String(body.name || '').trim();
            if (!id || !name) return json(res, 400, { error: 'ID and name required.' });
            if (students.some(s => s.id === id)) return json(res, 409, { error: 'ID already exists.' });
            students.push({ id, name, dates: {} });
            return json(res, 200, { success: true });
        }

        // DELETE /api/students/:id — remove a student
        const deleteMatch = url.match(/^\/api\/students\/(.+)$/);
        if (method === 'DELETE' && deleteMatch) {
            const id = decodeURIComponent(deleteMatch[1]);
            students = students.filter(s => s.id !== id);
            return json(res, 200, { success: true });
        }

        // DELETE /api/students — clear all
        if (method === 'DELETE' && url === '/api/students') {
            students = [];
            return json(res, 200, { success: true });
        }

        // POST /api/mark — mark attendance for one student
        if (method === 'POST' && url === '/api/mark') {
            const body = await readBody(req);
            const s = students.find(s => s.id === String(body.id));
            if (!s) return json(res, 404, { error: 'Student not found.' });
            if (!s.dates) s.dates = {};
            s.dates[body.date] = body.present ? 1 : 0;
            return json(res, 200, { success: true });
        }

        // POST /api/mark-all — mark all present for a date
        if (method === 'POST' && url === '/api/mark-all') {
            const body = await readBody(req);
            students.forEach(s => {
                if (!s.dates) s.dates = {};
                s.dates[body.date] = body.present ? 1 : 0;
            });
            return json(res, 200, { success: true });
        }

        return json(res, 404, { error: 'Not found.' });

    } catch (err) {
        console.error('API Error:', err);
        return json(res, 500, { error: 'Internal server error.' });
    }
};
