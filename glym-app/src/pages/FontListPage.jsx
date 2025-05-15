import FontListItem from "../features/fontcreation/components/FontListItem";
export default function FontListPage() {
    return(
        <div>
            <h1>서비스 이용 내역</h1>
            <div>
                <FontListItem />
                <FontListItem />
                <FontListItem />
                <FontListItem />
            </div>
            <div>
                <p>✨삭제하거나 다운로드할 폰트를 선택해주세요.</p>
                <button>삭제</button>
                <button>다운로드</button>
            </div>
        </div>
    );
}