// rc가 붙은파일은 구성파일을 의미
// 이름앞에 .이 하나가붙음 

// ESM 이크마 스크립트 모듈 , nodejs 지원 X 
// 가져오기 내보내기 improt export

// CommonJS 지원(node js)

// import
// require: 자바스크립트 파일을 외부에서 가져옴

// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')

// export
// 어떠한 내용들을 내보내기를 할 수 있음

// exprot {
//   plugins: [
//     autoprefixer
//   ]
// }
// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }




// const autoprefixer = require('autoprefixer')

// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }



// 자바스크립트 문법으로 간소화

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}