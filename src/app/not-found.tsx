import Link from "next/link"; // Link 컴포넌트를 next/link에서 가져옴
import { NextPage } from "next"; // NextPage 타입을 next에서 가져옴

// NotFound 컴포넌트 정의
const NotFound: NextPage = () => {
  return (
    <div>
      <div>이 페이지는 존재하지 않습니다</div> {/* 에러 메시지 */}
      <Link href="/search">검색</Link> {/* 검색 페이지로 이동하는 링크 */}
    </div>
  );
};

export default NotFound; // NotFound 컴포넌트를 기본으로 내보냄
