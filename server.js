const express = require('express');
const app = express();

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const path = require('path')

// cross 오류를 해결하기 위한 모듈
const cors = require('cors');

// cross 오류를 해결하기 위한 미들웨어 실행
app.use(cors());

// body-parser 미들웨어를 대체하는 express의 내장모듈 (urlencoded, json)
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// 정적인 파일 관리
app.use(express.static(path.join(__dirname, 'react-project', 'build')));

app.set('port', process.env.PORT || 3001);

// 라우터 미들웨어
app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(app.get('port'), () => {
    console.log('Server is Running...')
});