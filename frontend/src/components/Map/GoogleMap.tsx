import { getGoogleMapStore } from "@/store/googleMapStore";
import { useQueryClient } from "@tanstack/react-query";
import { useExternalValue } from "external-state";
import { useEffect } from "react";

// 구글 지도 객체가 store에 담겨 전역적으로 접근할 수 있으므로 , useExternalValue훅으로 호출합니다.

function GoogleMap() {
    const googleMap = useExternalValue(getGoogleMapStore());
    const queryClient = useQueryClient();

    // idle 상태에 이벤트를 걸어 쿼리 무효화를 날리기
    useEffect(() => {
        googleMap.addListener('idle', () => {
            queryClient.invalidateQueries({ queryKey: ['places'] });
        });

    }, [googleMap]);
    return <></>
}

export default GoogleMap;