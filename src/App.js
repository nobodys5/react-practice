import logo from './logo.svg';
import './App.css';

function App() {
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
        
        <div className='top-main'>
          <div className='top-bar'>
            <h2>1</h2>
          </div>
          <div className='top-text'>
            <h2>계약직</h2>
          </div>
        </div>
        
        <div className='header'>
          <div>
            <img className='' src={require('./img/bluecom.png')}/>
          </div>
          <div className='header-div'>
            <h2 className='bluecom'>블루컴</h2>
            <h2 className='header-text'>2024년 5월 17일 오후 7시 17분 등록 ·</h2>
          </div>
          <div>
            <img className='view' src={require('./img/view.png')}/>
          </div>
          <div className='header-right'>
            <div>
              <img className='share' src={require('./img/share.png')}/>
            </div>
            <div>
              <img className='scrap' src={require('./img/scrap.png')}/>
            </div>  
          </div>
        </div>

          <div className='header-title'>
            <div className='title-top'>
              <div className='title-si'>SI</div>
              <div className='title-money'>금융</div>
            </div>
            
            <div className='title-middle'>
              <h2>카드사 법인카드 이용성 개선 프로젝트</h2>
            </div>
            <div className='title-bottom'>
              <div className='title-img'>
              <img className='' src={require('./img/calender.png')}/>
              </div>
              <div className='close-day'>
                24.06.16
              </div>
              <div className='close-text'>
                마감29일 전
              </div>
            </div>

            <div className='middle-border'>
              <div className='job-day'>
                근무시작일
                <h2>2024-06-10(8개월)</h2>
                <div className='jobday-img'> 
               <img className='' src={require('./img/calender.png')}/>
                </div>
              </div>
              <div className='job-pay'>
                급여
                <h2>650~700만원</h2>
                <div>
               <img className='jobpay-img' src={require('./img/pay.png')}/>
                </div>
              </div>
              <div className='job-area'>
                근무지역
                <h2>서울 종로구 종로1가</h2>
              <div>
               <img className='jobarea-img' src={require('./img/area.png')}/>
              </div>
              </div>
            </div>
            
            <div className='category'>
              <div className='position-text'>
                <h2>포지션</h2>
                <h2 className='position-h1'>기타개발,팀원</h2>
              </div>
              <div className='position-text2'>
                  <h2>계약형태</h2>
                  <h2 className='position-h2'>계약직</h2>
              </div>
            </div>

            <div className='category2'>
              <div className='career-text'>
                <h2>필요경력</h2>
                <h2 className='career-h1'>10년이상~무관</h2>
              </div>
                <div className='school-text'>
                  <h2>학력사항</h2>
                  <h2 className='school-h2'>무관</h2>
                </div>
            </div>

            <div className='category3'>
              <div className='job-style-text'>
                <h2>근무방식</h2>
                <h2 className='job-h1'>상근</h2>
              </div>
              <div className='payday-text'>
                  <h2>급여지급일</h2>
                  <h2 className='payday-h2'>익월 15일</h2>
              </div>
            </div>
              
            <div className='category4'>
              <div className='skill-text'>
                <h2>보유스킬</h2>
                <h2 className='skill-h2'>java</h2>
              </div>
            </div>

          <div className='fixed'>
            <div className='fixed-box'>
                <div className='fixed-name'>
                 <img className='' src={require('./img/login.PNG')}/>
                  <h2 className='fixed-h1'>김필</h2>
                </div>
                <div className='fixed-resume'>
                 <img className='' src={require('./img/clip.png')}/>
                  <h2>이력서 없음</h2>
                </div>
                <div className='fixed-input'>
                  <button type='button'>이력서 등록하기</button>
                </div>
              </div>
          </div>
            
          <div className='fixed2'>
            <div className='fixed-box2'>
                <div className='fixed-name2'>
                  <h2 className='fixed-h3'>포지션을 찾고 계신가요?</h2>
                </div>
                <div className='fixed-resume2'>
                 <img className='' src={require('./img/person.png')}/>
                  <h2>Talent에 이력서를 등록하면 더 
                    많은 포지션 제안을 받을 수 있습
                    니다.</h2>
                </div>
                <div className='fixed-input2'>
                  <button type='button'>Talent 바로가기</button>
                </div>
              </div>
          </div>

          </div>

          <div>
            <div className='project'>프로젝트 소개</div>
            <div className='card'>
              <p>카드사 법인카드 이용성 개선 프로젝트</p>
            </div>
            <div className='text-blue'>
              <p>안녕하세요.(주)블루컴입니다.</p>
            </div>
            <div className='text-developer'>
              <p>아래와 같은 프로젝트 함께 참여할 프리랜서 개발자분을 모집하오니 검토 부탁 드립니다.</p>
            </div>
          </div>

          <div className='middle-text'>
            <div>
              <p>-프로젝트:카드사 법인카드 이용성 개선 프로젝트</p>
            </div>
            <div>
              <p>-기간:6월 10일~7개월 또는 8개월(인원마다 상이)</p>
            </div>
            <div>
              <p>-등급:고급</p>
            </div>
            <div>
              <p>-스킬:JAVA</p>
            </div>
            <div>
              <p>-업무:</p>
            </div>
          </div>

          <div className='middle-text2'>
            <div>
              <p>1.TA 1명:투입 후 7개월</p>
            </div>
            <div>
              <p>2.DBA 1명:투입후 7개월</p>
            </div>
            <div>
              <p>3. 공통 개발자 1명:투입 후 8개월</p>
            </div>
            <div>
              <p>4.관리자(admin)1명:투입후 8개월</p>
            </div>
            <div>
              <p>5.개발 PL 1명:투입 후 8개월</p>
            </div>
            <div>
              <p>6. 계정계 개발 시스템 연계 1명:투입후 7.5개월</p>
            </div>
          </div>

          <div className='middle-text3'>
            <div>
              <p>- 장소 : 광화문</p>
            </div>
            <div>
              <p>- 기타 : 경력증빙 가능자 (KOSA)</p>
            </div>
            <div>
              <p>- 접수 : 담당자 (김세희 전무) / k1331g@gamil.com</p>
            </div>
            <div>
              <p>(대표메일) / bluecom2016@daum.net</p>
            </div>
          </div>

          <div className='middle-text4'>
            <div>
              <p>※ 이외에도 많은 T/O를 보유중이므로 연락 주시면 적합한 포지션 다시 안내 드리도록 하겠습니다.</p>
            </div>
            <div>
              <p>※ 지원 시 스킬인벤토리 포함한 양식의 이력서와 함께 프로젝트명과 희망급여 및 투입 날짜 기재 부탁드립니다.</p>
            </div>
            <div>
              <p>※ 근무가능하신 개발자분들 많은 지원바랍니다.</p>
            </div>
          </div>

          <div className='like'>
            <div className='likes'>
            <img className='' src={require('./img/like.png')}/>
            </div>
            <div className='like-count'>
            <p>0</p>
            </div>
            <div className='unlike'>
                <img className='' src={require('./img/unlike.png')}/>
            </div>
              <div className='unlike-count'>
               <p>0</p>
              </div>
          </div>

            <div className='main-border'>
              0
            </div>

          <div className='main'>
            <div className='manager'>
              <p>담당자</p>
            </div>
            <div className='maneger-info'>
              <p className='main-people'>김세희전무</p>
              <p className='main-hp'>02-830-7185</p>
              <p className='main-email'>bluecom2016@daum.net</p>
            </div>
            <div className='person-img'>
                <img className='' src={require('./img/person.png')}/>
            </div>
            <div className='call-img'>
                <img className='' src={require('./img/call.png')}/>
            </div>
            <div className='email-img'>
                <img className='' src={require('./img/email2.png')}/>
            </div>
          </div>

          <div className='bottom'>
            <div className='bottom-main'>
              <div className='bottom-img'> 
                <img className='' src={require('./img/bluecom.png')}/>
                <h2>블루컴</h2>
              </div>
              <div className='office-type'>
                이 기업의 다른공고
              </div>  
            </div>
            
            <div className='bottom-text'>
              <div>
                <h2>회사소개</h2>
              </div>
              <div>
                <h2>(주)블루컴은 오랜기간 IT업계에서 일을 해온 멤버들이 모여서 설립한 회사로 IT서비스/스마트재난안전관리시스템/스마트빌딩관리시스템/웹페
                  이지구축 등 사업영역을 확장하고 적극적인 인재채용으로 성장하는 회사 입니다.</h2>
              </div>
            </div>
          </div>

          <div className='text-footer'>
            <div className='footer-img'>
              <img className='' src={require('./img/login.PNG')}/>
            </div>
            <div className='text-box'>
              <div>
                <h2>궁금한 점이나 질문을 댓글로 남겨주세요 함께 답을 찾아볼 수 있는 시간이 있어요</h2>
              </div>
            </div>
          </div>

            <div className='last-footer'>
              <div>
                <button type='button'>댓글 쓰기</button>
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
