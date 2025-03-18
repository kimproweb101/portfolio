// src/boot/aos.js
import AOS from 'aos'
import 'aos/dist/aos.css' // AOS 스타일시트 임포트

export default ({ app }) => {
  app.AOS = AOS
  AOS.init({
    duration: 500, // 애니메이션 지속 시간 (ms)
    easing: 'ease-in-out', // 애니메이션 이징
    once: false, // 애니메이션을 한 번만 실행
  })
}
