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
                <div className='resetbox'>
                  <input type='button' className='reset1'></input>
                </div>
                <div>
                <img className='resetimg' src={require('./img/reset.png')}/>
                </div>
                <div className='reset'>
                  <input type='button' className='reset2'></input>
                </div>
                <div className='filterbox'>
                  <span className='filtersearch'>필터로 검색</span>
                </div>
                <div>
                <img className='filterimg' src={require('./img/filterobserver.png')}/>

                </div>
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
          <div className='main-img'>
            <div>
              <img className='' src={require('./img/main.png')}/>
            </div>
            <div>
              <img className='' src={require('./img/main2.png')}/>
            </div>
            <div>

              <img className='' src={require('./img/main3.png')}/>
              
            </div>
          </div>
            <div className='pagebutton'>
              <div className='line-page'>
                <button type='button'></button>
              </div>
              <div className='paging'>
                <button type='button'>1</button>
                <button type='button'>2</button>
                <button type='button'>3</button>
                <button type='button'>4</button>
                <button type='button'>5</button>
                <button type='button'>...</button>
                <button type='button'>9</button>
              </div>
            </div>
              
              <div className='bottom-left'>
                <div className='left-move'>
                <img className='left-moveimg' src={require('./img/pagemove2.png')}/>
                </div>
                <div className='left-button'>
                  <span>previous</span>
                </div>
              </div>
              <div className='right-button'>
                <div className='right-page'>
                  <span>next</span>
                </div>
                <div>
                  <img className='rightmove' src={require('./img/pagemove.png')}/>
                </div>
              </div>
              
              <div className='footer'>
                <div className='cat'>
                    <img className='footer-cat' src={require('./img/cat.png')}/>
                </div>
                <div className='footer-bar'>
                    <button type='button'>1</button>
                </div>
              </div>

              <div className='footer2'>
                <div className='footer-logo'>
                    <img className='ok-logo' src={require('./img/okkylogo.png')}/>
                    <h2>All That Developer</h2>
                    <div>
                    <img className='facebook' src={require('./img/facebook.png')}/>
                    </div>
                    <div>
                    <img className='youtube' src={require('./img/youtube.png')}/>
                    </div>
                    <div>
                    <img className='email' src={require('./img/email.png')}/>
                    </div>

                </div>
              </div>
              <div className='footer-middle'>
                <div className='footer-btn'>
                  <div className='button-one'>
                  <button>회사소개</button>
                  </div>
                  <div className='button-two'>
                  <button>공지사항</button>
                  </div>
                  <div className='button-three'>
                  <button>FAQ</button>
                  </div>
                  <div className='button-four'>
                  <button>통합 서비스 이용약관</button>
                  </div>
                  <div className='button-five'>
                  <button>개인정보 처리방침</button>
                  </div>
                </div>
              </div>


                <div className='footer-text'>
                <div className='text-one'>
                <div>상호명:(주)오키코리아|대표명:노상범, 장기진</div>
                </div>
                <div className='text-two'>
                <div>사업자등록번호: 592-87-02037 | 통신판매업신고번호: 제 2022-서울강남-04742호 | 직업정보 제공사업 신고번호: J1200020230009</div>
                </div>
                <div className='text-three'>
                <div>주소: 서울 강남구 봉은사로 303 TGL경복빌딩 502호 (06103) | 고객센터 : jobs@okky.kr (영업시간 평일 10:00~17:00) 주말 · 공휴일 휴무</div>
                </div>
                <div className='text-four'>
                <div>© 2024 (주)오키코리아, Inc. All rights reserved.</div>
                </div>
                </div>

                <div className='last-footer'>
                <div className='sponse'>
                  <h2>SPONSORED BY</h2>
                </div>
                <div>
                <img className='iname' src={require('./img/inames.png')}/>
                </div>
                <div>
                <img className='ncloud' src={require('./img/ncloud.png')}/>
                </div>
                </div>
    </div>
  );
}

export default App;