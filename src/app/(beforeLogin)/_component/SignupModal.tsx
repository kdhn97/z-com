"use client";

import style from './signup.module.css'; // CSS 모듈을 가져옴
import { useRouter } from "next/navigation"; // useRouter 훅을 가져옴
import { ChangeEventHandler, FormEventHandler, useState } from "react"; // 필요한 타입과 훅을 가져옴

export default function SignupModal() {
  // 상태 변수 설정
  const [id, setId] = useState(''); // 아이디 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const [nickname, setNickname] = useState(''); // 닉네임 상태
  const [image, setImage] = useState(''); // 이미지 상태
  const [imageFile, setImageFile] = useState<File>(); // 이미지 파일 상태

  const router = useRouter(); // 라우터 훅 초기화
  const onClickClose = () => { // 닫기 버튼 클릭 시 실행되는 함수
    router.back();
    // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
  }

  // 입력 값이 변경될 때 실행되는 함수들
  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => { setId(e.target.value) };
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => { setPassword(e.target.value) };
  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => { setNickname(e.target.value) };
  const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    // 입력된 파일이 있을 경우 상태를 업데이트
    e.target.files && setImageFile(e.target.files[0]);
  };
  

  // 폼 제출 시 실행되는 함수
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    fetch('http://localhost:9090/api/users', {
      method: 'post',
      body: JSON.stringify({
        id,
        nickname,
        image,
        password,
      }),
      credentials: 'include',
    }).then((response: Response) => {
      console.log(response.status); // 응답 상태 코드 출력
      if (response.status === 200) {
        router.replace('/home'); // 응답이 성공적이면 /home으로 이동
      }
    }).catch((err) => {
      console.error(err); // 에러 발생 시 콘솔에 출력
    });
  }

  return (
    <>
      <div className={style.modalBackground}> {/* 모달 배경 스타일 */}
        <div className={style.modal}> {/* 모달 스타일 */}
          <div className={style.modalHeader}> {/* 모달 헤더 스타일 */}
            <button className={style.closeButton} onClick={onClickClose}> {/* 닫기 버튼 */}
              <svg width={24} viewBox="0 0 24 24" aria-hidden="true"
                   className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                <g>
                  <path
                    d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                </g>
              </svg>
            </button>
            <div>계정을 생성하세요.</div> {/* 모달 제목 */}
          </div>
          <form onSubmit={onSubmit}> {/* 폼 제출 이벤트 핸들러 연결 */}
            <div className={style.modalBody}> {/* 모달 본문 스타일 */}
              <div className={style.inputDiv}> {/* 입력 필드 스타일 */}
                <label className={style.inputLabel} htmlFor="id">아이디</label> {/* 아이디 라벨 */}
                <input id="id" className={style.input} type="text" placeholder=""
                       value={id}
                       onChange={onChangeId}
                />
              </div>
              <div className={style.inputDiv}> {/* 닉네임 입력 필드 */}
                <label className={style.inputLabel} htmlFor="name">닉네임</label>
                <input id="name" className={style.input} type="text" placeholder=""
                       value={nickname}
                       onChange={onChangeNickname}
                />
              </div>
              <div className={style.inputDiv}> {/* 비밀번호 입력 필드 */}
                <label className={style.inputLabel} htmlFor="password">비밀번호</label>
                <input id="password" className={style.input} type="password" placeholder=""
                       value={password}
                       onChange={onChangePassword}
                />
              </div>
              <div className={style.inputDiv}> {/* 프로필 이미지 업로드 필드 */}
                <label className={style.inputLabel} htmlFor="image">프로필</label>
                <input id="image" className={style.input} type="file" accept="image/*"
                       onChange={onChangeImageFile}
                />
              </div>
            </div>
            <div className={style.modalFooter}> {/* 모달 하단 스타일 */}
              <button className={style.actionButton} disabled>가입하기</button> {/* 가입 버튼 */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
