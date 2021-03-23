# Building Markdown base static blog with Next.js

## 초기 설정

`create-next-app`을 사용하지 않고, 필요한 요소들을 하나씩 manual setup을 해보기로 했습니다.



### npm 패키지 설치

Next 공식 홈페이지에 나온 대로 React와 Next를 설치합니다.

``` bash
npm install next react react-dom
```

프로젝트 폴더에는 `node-modules`폴더와 두 개의 기본적인 json 파일이 생성되었습니다.

![image-20210323185727305](README.assets/image-20210323185727305.png)

`package.json`파일에서 `"scripts"` 를 작성하여 next 명령어를 등록해줍니다.

``` json
// package.json
{
  "dependencies": {
    "next": "^10.0.9",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
  }
}
```



### 기본 폴더 구조 설정

Next에서 각 url 주소는 `pages` 폴더 아래의 경로 및 파일과 상응합니다. `pages`폴더를 생성하고, 그 안에 `index.js` 파일을 생성해줍니다.

``` bash
mkdir pages
touch pages/index.js
```

`pages/index.js`는 기본 경로에서 표시할 컴포넌트입니다. 간단한 함수 컴포넌트를 정의하여 제대로 렌더링되는지 확인해보겠습니다.

``` js
// pages/index.js
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
```

위에서 `package.json`에 작성한 npm 명령어를 통해 개발 버전으로 확인해보겠습니다.

``` bash
npm run dev
```

터미널에 ready 표시와 함께 출력되는 url을 통해 작성한 Next 앱을 확인할 수 있습니다.

![image-20210323190826926](README.assets/image-20210323190826926.png)

브라우저에서 해당 주소로 접속하면 `build page: /` 가 출력되고, 해당 컴포넌트를 컴파일해 화면에 보여줍니다. 

![image-20210323205841804](README.assets/image-20210323205841804.png)