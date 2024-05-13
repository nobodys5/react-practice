import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [a, b] = useState('필터로 검색');
  
  return (
    <div className="App">
      
       
        <div className='high'>
          <div className='high-left'>
        <img className='logo' src={require('./img/logo.PNG')}/>
        <h1>계약직</h1>
        <h1>정규직</h1>
        <h1>Talent</h1>
        <h1>좋은회사/나쁜회사</h1>
          </div>
          <div className='high-right'>
            <div>
        <button>열람권 구매</button>
        <button>등록권 구매</button>
            </div>
            <div className='high-right-button'>
        <img className='job' src={require('./img/joboffice.PNG')}/>
        <img className='login' src={require('./img/login.PNG')}/>
            </div>
          </div>
        </div>
        <div className='category'>
          
          
         <div className='category-button'> 
            <div>
              <div className='filter-main'>
                 <span className='filter'>포지션을 쉽게 찾는 스마트 필터</span>
                 <img className='position' src={require('./img/list.PNG')}/>
              </div>
              <div className='position-main'>
              <button>포지션</button>
              <img className='position' src={require('./img/submit.PNG')}/>
              </div>
              <div className='area'>
              <button>근무지역</button>
              <img className='' src={require('./img/submit.PNG')}/>
              </div>
              <div className='money'>
              <button>희망급여</button>
              <img className='' src={require('./img/submit.PNG')}/>
              </div>
              <div className='jobway'>
              <button>업무방식</button>
              <img className='' src={require('./img/submit.PNG')}/>
              </div>
              <div className='skill'>
              <button>보유기술</button>
              <img className='' src={require('./img/submit.PNG')}/>
              </div>
              <div className='career'>
              <button>전체경력</button>
              <img className='' src={require('./img/submit.PNG')}/>
              </div>
              <div className='start'>
              <button>근무시작일</button>
              <img className='' src={require('./img/submit.PNG')}/>
              </div>
              <div className='way'>
              <button>근무방식</button>
              <img className='' src={require('./img/submit.PNG')}/>
              </div>
              <div className='save'>
                <div className='save1'>
                <input type='checkbox'></input>
                <input className='saveinput' placeholder='저장'></input>
                </div>
                <div className='questionimg'>
                <img className='question' src={require('./img/question.PNG')}/>
                </div>
                <div className='reset'>
                  <input type='button' className='reset1'></input>
                </div>
                <img className='resetimg' src={require('./img/reset.png')}/>
                <div className='reset'>
                  <input type='button' className='reset2'></input>
                </div>
                  <span className='filtersearch'>필터로 검색</span>
              </div>
            </div>
         </div>
        </div>
       <div>
      <div className='main-bar'> 
        <div>
            <img className='backg' src={require('./img/backg2.png')}/>
        </div>
        <div className='textall'>
        <div className='text1'>
          <span>OKKY Jobs는 국내 최대'최고의 개발자 전문 Job Platfom입니다</span>
        </div>
        <div className='text2'>
          <span>Yes!클린일자리 체크리스트,스마트필터,바로지원,무료 법률상담 서비스</span>
        </div>
        <div className='text3'>
          <span>NO!허위 구인 게시물</span>
        </div>
        </div>
        <div className='input-bar'>
          <div className='input-search'>
            <img className='job' src={require('./img/opserver.PNG')}/>
            <input type='text' className='textsearch' placeholder='구인/정규직/회사검색'></input>
          </div>
          <div className='input-search2'>
            <img className='xbutton' src={require('./img/xbutton.PNG')}/>
            <button type='button'>찾기</button>
          </div>
        </div>
      </div>
       </div>

          <div className='middle'>
            <div>
              <h2>154개의 포지션</h2>
            </div>
            <div>
              <input type='button'></input>
              <input type='button'></input>
            </div>
              
          </div>
          <div className='gred'>
            <h2>그리드</h2>
          </div>
          <div className='update'>
            <h2>최신순</h2>
          </div>
          <div>
            <img className='gredicon' src={require('./img/grid.PNG')}/>
          </div>
          <div>
            <img className='updateicon' src={require('./img/list2.PNG')}/>
          </div>
    </div>
  );
}

export default App;
