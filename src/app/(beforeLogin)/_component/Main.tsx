// tailwind -> 호불호 심하고, 가독성 떨어짐
// Styled Component -> Server Component SSR 문제
// vanilla extract -> Windows와 문제
// Sass
// Css module

import Link from "next/link";
import Image from "next/image";
import zLogo from "../../../../public/zlogo.png";
import styles from "@/app/(beforeLogin)/_component/main.module.css";

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        {/* 이미지를 받아올 때 Image 태그 사용하면 자동 최적화 */}
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>

        {/* a 태그를 사용하면 페이지가 새로고침되면서 넘어감 */}
        {/* Link 태그를 사용하면 페이지가 새로고침 안 됨 */}
        <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>로그인</Link>
      </div>
    </>
  )
}
