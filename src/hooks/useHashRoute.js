import { useCallback, useEffect, useState } from 'react';

/** Enrutador mínimo basado en el hash (#/alertas, #/diagnostico/ID). */
function parse() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [page = '', ...rest] = raw.split('/').filter(Boolean);
  return { page: page || 'monitoreo', param: rest.length ? decodeURIComponent(rest.join('/')) : null };
}

export function useHashRoute() {
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  const navigate = useCallback((page, param) => {
    window.location.hash = param ? `/${page}/${encodeURIComponent(param)}` : `/${page}`;
  }, []);
  return { ...route, navigate };
}
