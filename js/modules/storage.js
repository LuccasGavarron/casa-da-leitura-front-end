const KEY = 'casa-da-leitura-interesses-v1';
export function readInterests() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(value) ? value.filter(item => typeof item === 'string') : [];
  } catch { return []; }
}
export function saveInterests(interests) {
  localStorage.setItem(KEY, JSON.stringify(interests));
}
