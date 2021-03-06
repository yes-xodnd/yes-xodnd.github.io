# Building markdown-based blog with Next.js

## 기획 배경

기술 블로그를 운영하기 위해 여러가지 서비스를 찾아다니다가, github pages를 통해 호스팅되는 개발자 블로그를 많이 보게 되었습니다. Jekyll이라는 정적 사이트 생성기를 이용하면 5분 만에 블로그를 만들 수 있다는 글들이 많아 혹했으나, 프론트엔드 개발자로서 직접 만들어보고 싶다는 생각을 하게 되었습니다. 

Next를 이용하면 마크다운 정적 블로그를 구현할 수 있다는 것을 알게 되어 이번 기회에 학습과 토이 프로젝트 진행, 기술 블로그 제작까지 세 마리 토끼를 한 번에 잡아보고자 하였습니다.

개발 과정은 [이곳](https://yes-xodnd.github.io/posts/Next-js로-마크다운-블로그-구현하기)에서 자세히 확인할 수 있습니다.

## 요구 사항

블로그 구현에 앞서 요구사항을 정리하였습니다. 우선순위에 따라 순서대로 작성하였습니다.

1. markdown 문서 기반
   - 별도의 포스트 작성 기능 없음, 로컬에서 작성
   - 파일 디렉토리를 통한 포스트 관리
2. 카테고리 없는 통합 포스트 목록
3. 모바일, PC 반응형 디자인
4. 해시태그
   - 포스트 목록에서 각 포스트별 해시태그 표시
   - 해시태그를 통한 포스트 목록 필터 기능
5. 다크모드
   - 버튼을 통해 토글 가능
   - 설정 저장하지 않고 접속할 때마다 사용자 color-scheme 설정에 따름
6. 글 제목 검색 기능



## 현재 구현 사항

1. markdown 문서 기반
   - 별도의 글 작성 기능 없음
   - 파일 디렉토리를 통한 글 관리
2. 카테고리 없는 통합 글 목록
3. 모바일, PC 반응형 디자인
4. 해시태그
   - 포스트 목록에서 각 포스트별 해시태그 표시



## 기술 스택

- Next.js
  - gh-pages 배포를 위해 정적 사이트를 구현해야 함
  - 최근 React.js에 대해 학습하고 있고, 많은 곳에서 사용하고 있어 실습해보고자 함
- React.js
- styled-components
  - CSS-in-JS에 대해 알게 되어 실습해보고자 함
  - React JSX에서 태그로 표현할 수 있다는 점이 생산성 향상에 도움이 될 것이라고 생각함
