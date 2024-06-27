// 인터셉팅 파일(Intercepting Routes)은 Next.js 13 버전에서 도입된 기능으로, 
// 경로의 특정 부분을 가로채고 해당 부분에 대해 특정 컴포넌트를 렌더링하는 방법

// (.): URL 경로에서 동일한 수준의 하나의 세그먼트를 매칭합니다.
// (..): URL 경로에서 현재 동적 경로보다 한 단계 위의 하나의 세그먼트를 매칭합니다.

// 다른 페이지에서 <Link>를 통하여 접근했을 때 실행됨
import LoginModal from "@/app/(beforeLogin)/_component/LoginModal";

export default function Page() {
  return (
    <>
      난 가로채기지롱 ㅋㅋ
      <LoginModal />
    </>
  );
}
