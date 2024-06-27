"use client";

import {ReactNode} from "react";
import style from './post.module.css';
import {useRouter} from "next/navigation";

type Props = {
  children: ReactNode,
  post: {
    postId: number;
    content: string,
    User: {
      id: string,
      nickname: string,
      image: string,
    },
    createdAt: Date,
    Images: any[],
  }
}

export default function PostArticle({ children, post}: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  }

  return (
    // Click 이벤트가 겹쳤을 때 사용 방법,
    // 이벤트 타겟에 도달하기 전에 부모 요소에서 캡처링 단계에서 이벤트를 처리
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}