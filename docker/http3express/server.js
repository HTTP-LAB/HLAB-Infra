// server/app.js
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 4000

app.use(cors())

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/api', async (req, res)=>{
  res.send("hello, I am http3 server")
})

app.get('/api/data', async (req, res) => {

  console.log("/api/data 호출됨");
  

  const delayMs = Number(req.query.delay || 0) // ?delay=2000 같이 사용 가능
  if (delayMs > 0) await delay(delayMs)

  res.json([
    '헤이즐 아메리카노',
    '페퍼민트',
    '소프트 아이스크림',
    '노이즈 데이터',
    '노이즈 데이터 4',
    '노이즈 데이터 10'
  ])

  
})

app.listen(PORT, () => {
  console.log(`Express API 서버가 http://localhost:${PORT} 에서 실행 중입니다.`)
})
