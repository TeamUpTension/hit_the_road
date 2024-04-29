import { store } from 'external-state';

// 클로저를 활용하여 구글 지도 객체를 단 한번만 생성할 수 있도록 합니다. 단, 생성된 객체는 store 객체에 담깁니다.

export const MAP_ID: string = import.meta.env.VITE_GOOGLE_MAP_ID;
export const DEFAULT_CENTER = { lat: 37.5, lng: 127.0 };
export const DEFAULT_ZOOM = 16;

export const getGoogleMapStore = (() => {
    let map: google.maps.Map;

    const container = document.createElement('div');
    container.id = 'map';
    container.style.minHeight = '100vh'
    document.body.appendChild(container);

    return () => {
        if (!map) {
            map = new window.google.maps.Map(container, {
                center: DEFAULT_CENTER,
                zoom: DEFAULT_ZOOM,
                disableDefaultUI: true,
                mapId: MAP_ID,
            });
        }
        return store<google.maps.Map>(map);
    }
})();