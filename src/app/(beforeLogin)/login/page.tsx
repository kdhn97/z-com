// 클라이언트에서 네비게이션을 사용하여 redirect로 하는 경우
"use client";

// useRouter : 클라이언트에서 네비게이션을 사용하는 Hook
import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/login');
  return (
    <Main/>
  );
}

// router.push
// localhost:3001/home -> localhost:3001/login -> localhost:3001/i/flow/login
// i/flow/login에서 뒤로 가기 하면 login으로 간다
// 위의 사례의 경우 뒤로 가기로 login되면 다시 자동으로 i/flow/login로 가버린다

// router.replace
// localhost:3001/home -> localhost:3001/login -> localhost:3001/i/flow/login
// i/flow/login에서 뒤로 가기 하면 home으로 간다

// ---

// 서버에서 네비게이션을 사용하여 redirect로 하는 경우
// import {redirect} from "next/navigation"
// export default function Login() {
//  redirect('i/flow/login')
// }