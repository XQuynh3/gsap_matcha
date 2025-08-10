// URL gốc của API (lấy từ biến môi trường hoặc mặc định dùng proxy khi dev)
export const API_BASE =
    import.meta.env.VITE_API_BASE_URL || '/api/v1'

// Hàm GET dữ liệu
export async function apiGet(path) {
    const res = await fetch(`${API_BASE}${path}`, {
        method: 'GET',
        credentials: 'include', // gửi cookie JWT nếu có
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!res.ok) throw new Error(`GET ${path} failed`)
    return res.json()
}

// Hàm POST dữ liệu
export async function apiPost(path, data) {
    const res = await fetch(`${API_BASE}${path}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(`POST ${path} failed`)
    return res.json()
}

// Hàm PUT dữ liệu
export async function apiPut(path, data) {
    const res = await fetch(`${API_BASE}${path}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(`PUT ${path} failed`)
    return res.json()
}

// Hàm DELETE dữ liệu
export async function apiDelete(path) {
    const res = await fetch(`${API_BASE}${path}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!res.ok) throw new Error(`DELETE ${path} failed`)
    return res.json()
}
