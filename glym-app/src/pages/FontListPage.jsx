import FontListItem from "../features/fontcreation/components/FontListItem";
import React, { useState, useEffect } from "react";
import { S } from "./style";
import { URLS } from "../constants/urls";
import { get } from "../utils/requests";

export default function FontListPage() {
    const [selectedIds, setSelectedIds] = useState([]);

    const [fontList, setFontList] = useState([
        { id: 1, name: "LeeBaekByGlym 폰트" },
        { id: 2, name: "ShapeByGlym 폰트" },
        { id: 3, name: "nahyunKooByGlym 폰트" },
        { id: 4, name: "parkFeByGlym 폰트" },
        { id: 5, name: "폰트5" },
        { id: 6, name: "폰트6" },
        { id: 7, name: "폰트7" },

    ]); // 화면 렌더링할 때 폰트 목록 불러오는 api 호출 해야함.

    useEffect(() => {
        async function fetchFontList() {
            try {
                const response = await get({
                    postHeaders: {}, // 필요 시 여기에 추가 헤더
                    baseUrl: URLS.BASE.TEST,
                    endpoint: URLS.ENDPOINT.FONT_LIST,
                    data: {},
                    params: {}, // 필요시 쿼리 파라미터
                    useAuth: true, // <== 이게 핵심!
                });

                if (response.ok) {
                    console.log("폰트 목록:", response.data);
                } else {
                    console.error("폰트 목록 불러오기 실패:", response.status);
                }
            } catch (error) {
                console.error("API 호출 중 오류 발생:", error);
            }
        }

        fetchFontList();
    }, []);

    useEffect(() => {
        console.log("선택된 id(업데이트 후):", selectedIds);
    }, [selectedIds]);

    const handleSelect = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <S.FontListPage.Container>
            <S.FontListPage.Title>서비스 이용 내역</S.FontListPage.Title>
            <hr style={{ width: '850px', margin: 'auto', marginBottom: '30px' }} />
            <S.FontListPage.FontListBox>
                {fontList.map((item) => (
                    <FontListItem
                        key={item.id}
                        name={item.name}
                        selected={selectedIds.includes(item.id)}
                        onClick={() => handleSelect(item.id)}
                    />
                ))}
            </S.FontListPage.FontListBox>
            <hr style={{ width: '850px', margin: 'auto', marginBottom: '30px' }} />
            <S.FontListPage.ButtonGuideBox>
                <S.FontListPage.GuideText>✨ 삭제하거나 다운로드할 폰트를 선택해주세요.</S.FontListPage.GuideText>
                <div>
                    <S.FontListPage.DeleteButton>삭제</S.FontListPage.DeleteButton>
                    <S.FontListPage.DownloadButton>다운로드</S.FontListPage.DownloadButton>
                </div>
            </S.FontListPage.ButtonGuideBox>
        </S.FontListPage.Container>
    );
}