import { ReactNode } from "react"; // ReactNode 타입을 가져옴
import style from '@/app/(beforeLogin)/_component/main.module.css'; // CSS 모듈을 가져옴

// Props 타입 정의: children과 modal을 포함
type Props = { 
  children: ReactNode, 
  modal: ReactNode 
};

// Layout 컴포넌트 정의
export default function Layout({ children, modal }: Props) {
  return (
    <div className={style.container}> {/* CSS 모듈의 container 클래스 적용 */}
      {children} {/* 자식 컴포넌트 렌더링 */}
      {modal} {/* 모달 컴포넌트 렌더링 */}
    </div>
  )
}

// 주소가 localhost:3001일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3001/i/flow/login 때는 chldren->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx
