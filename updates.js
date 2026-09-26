// Only verified portfolio content. Missing photographs remain explicit placeholders.
const caseMedia={dilly:['dilly.png','서비스 이용 장면 · AI 재구성'],lg:['lg-art.png','포트폴리오 수록 레퍼런스 이미지'],noroo:['noroo-art.png','포트폴리오 수록 공개 화면'],kaist:['kaist-portfolio.png','이동형 음압병동 시각정보체계']};
caseMedia.toolkit=['toolkit-cover.png','친환경식품 코디자인 툴킷 · 워크시트와 카드 구성'];
function caseImages(id){const m=caseMedia[id];return m?`<figure class="case-image media-${id}"><img src="assets/${m[0]}" alt="${m[1]}"><figcaption>${m[1]}</figcaption></figure>`:`<div class="image-pending">${lang==='ko'?'프로젝트 이미지 준비 중':'Project image pending'}</div>`}
const additions={
 dilly:[['발견한 신호','시간 민감도와 공항에서의 경험을 중시하는 정도, 짐과 동행인 유무에 따라 행동이 달라졌습니다. 현장 관찰과 리뷰·VoC 분석을 연결해 4가지 사용자 유형을 정의했습니다.'],['판단에서 접점으로','퍼소나별 이동 동선을 바탕으로 QR 발견 위치, 픽업포인트 선정 기준과 현장 안내를 설계했습니다. 앱 회원과 비회원의 주문 흐름도 구분했습니다.'],['적용','포트폴리오에는 퍼소나와 QR 접점, 주문 흐름이 프로모션 영상·QR 안내물·서비스 이용 흐름에 반영된 내용이 담겨 있습니다.']],
 lg:[['프로젝트에서 맡은 일','8인 참여 프로젝트의 UX Lead로 리서치 방법과 프로세스를 설계하고, 사용자 경험과 서비스·브랜드 적합성을 고려한 의사결정과 가이드 개발을 주도했습니다.'],['경험 기준의 구조','시장·사용자·브랜드·윤리를 종합해 코어 페르소나, 대화 스타일, AI 윤리, 퍼소나 적합성 검증으로 이어지는 체계를 구성했습니다.'],['공개 범위','실제 페르소나·다이얼로그·검증 도구의 세부 내용은 대외비입니다. 이 페이지는 제공된 포트폴리오의 문제 정의와 리서치·설계 과정 중심으로 구성했습니다.']],
 noroo:[['핵심 사용자와 과업','주 사용자인 대리점 사장님에게는 새로운 상품을 탐색하는 일보다 익숙한 제품을 빠르게 다시 주문하는 일이 중요했습니다. 비교적 높은 연령대의 사용자와 내부 운영자의 요구를 함께 고려했습니다.'],['설계 판단','주문 단계를 줄이고 정보의 우선순위를 재정립했습니다. 대리점의 FO뿐 아니라 상품·콘텐츠·주문 정보를 관리하는 BO와 관리자 화면을 함께 설계했습니다.'],['구축과 운영','반응형 화면 설계와 문서화, 디자인·퍼블리싱·개발 협업, 단위·통합 테스트, FO·BO 운영 매뉴얼 제작까지 참여했습니다. 상세 UI와 화면설계서는 공개하지 않습니다.']],
 kaist:[['공간의 정보를 읽는 기준','의료진·환자·유지보수팀의 Route, Journey, Task, Action, Safety Risk Level, Needs Info를 기준으로 이동 경험을 분석했습니다.'],['접점별 우선순위','사용자가 어디로 이동하고 어떤 절차를 수행하며 어느 순간에 위험이나 불안을 느끼는지 정리해, 필요한 정보와 안내의 우선순위를 정의했습니다.'],['설계 범위','구역 구분과 사이니지, 보호복 착탈의 아이콘, 안내 영상 시나리오와 디자인 가이드라인으로 연결했습니다.']],
 toolkit:[['연구와 실무의 연결','친환경 소비자에 대한 연구를 중소기업의 제품 기획에 활용할 수 있도록 코디자인 툴킷으로 구체화한 석사학위 연구입니다.'],['함께 사용하는 도구','소비자 유형과 맥락을 함께 이해하고 아이디어를 논의할 수 있는 도구를 만들고, 기업 대상 워크숍을 진행했습니다.']],
 nrc:[['참여 이력','HCI Korea 2020 공식 행사 공지에 홍익대학교 강지희로 참여 이력이 기재되어 있습니다.']]
};
function caseExtra(id){if(id==='toolkit')return toolkitExtra();const rows=additions[id]||[];const content=lang==='en'?(id==='nrc'?'<section class="case-section"><h3>Participation</h3><p>The HCI Korea 2020 workshop announcement lists Jihee Kang as a participant from Hongik University.</p></section>':''):rows.map(([h,p])=>`<section class="case-section"><h3>${h}</h3><p>${p}</p></section>`).join('');return content+(id==='nrc'?`<a class="case-source" href="https://conference.hcikorea.org/hcik2020/community/news_view.asp?notice_seq=41" target="_blank" rel="noopener">${lang==='ko'?'HCI Korea 공식 워크숍 안내':'Official HCI Korea workshop announcement'} ↗</a>`:'')}
function toolkitExtra(){const rows=lang==='ko'?[
 ['연구 배경','친환경을 표방하는 제품과 소비자가 실제로 원하는 경험 사이의 간극에 주목했습니다. 기업이 소비자의 생활과 소비 맥락에 기반해 제품을 기획할 수 있도록 연구를 공동 기획 도구로 연결했습니다.'],
 ['소비자의 전 과정을 이해하기','MZ세대 소비자를 대상으로 심층 인터뷰, 행동기록 다이어리(컬처럴 프로브), 사후 인터뷰를 진행했습니다. LDA 토픽 모델링·Word2Vec과 근거이론의 개방·축·선택 코딩을 활용해 자료를 분석했습니다.'],
 ['연구를 함께 쓰는 도구로','세 가지 친환경식품 소비자 퍼소나와 소비 패러다임을 도출했습니다. 라이프스타일, 소비 계기와 목표, 정보 습득부터 구매·사용·보관·처분·정보 공유까지 논의할 수 있는 워크시트와 카드로 구체화했습니다.'],
 ['기업 워크숍에 적용','친환경 기업을 대상으로 툴킷을 활용한 워크숍을 운영했습니다. 참여자 설문과 인터뷰에서는 브랜드의 현 상태와 개선점 도출, 팀원의 생각 공유와 의견 정리, 제품·서비스 아이디어 발상에 도움이 되었다는 평가가 나왔습니다. 이는 워크숍 참여자의 평가이며 사업 성과 지표를 의미하지 않습니다.']
 ]:[
 ['Research context','Bridged the gap between products marketed as sustainable and consumers’ everyday needs, helping businesses ground product planning in real consumption contexts.'],
 ['Understanding consumption end to end','Conducted in-depth interviews, behavioral diaries (cultural probes) and follow-up interviews with millennial and Gen Z consumers. Analyzed the material through LDA topic modeling, Word2Vec and grounded-theory coding.'],
 ['From findings to a shared tool','Developed three consumer personas and a sustainable-food consumption paradigm. Translated findings into worksheets and cards spanning lifestyle, motivations, information gathering, purchase, use, storage, disposal and sharing.'],
 ['Application in company workshops','Ran toolkit-based workshops with sustainability-focused businesses. Participant surveys and interviews described benefits for identifying improvements, sharing perspectives and developing product and service ideas. These are participant assessments, not business-performance metrics.']
 ];return rows.map(([h,p],i)=>`<section class="case-section"><h3>${h}</h3><p>${p}</p>${i===2?`<figure class="case-image media-toolkit"><img src="assets/toolkit-workshop.png" alt="${lang==='ko'?'워크숍에서 카드와 메모를 활용해 작성한 코디자인 워크시트':'Co-design worksheets completed with cards and notes during a workshop'}" loading="lazy"><figcaption>${lang==='ko'?'워크숍 적용 · 카드와 메모로 소비 맥락과 시나리오 구체화':'Workshop application · mapping consumption contexts and scenarios'}</figcaption></figure>`:''}</section>`).join('')}
const toolkit=projects.find(p=>p.id==='toolkit');
toolkit.role={ko:'2021.07–2022.07 · 개인 연구 · UX 기획·리서치 · 툴킷 및 워크숍 설계·진행',en:'Jul 2021–Jul 2022 · Individual research · UX planning and research · Toolkit and workshop design'};
toolkit.summary={ko:'MZ세대의 친환경식품 소비 행태를 연구하고, 기업이 소비자 관점에서 제품을 기획할 수 있도록 코디자인 툴킷을 개발했습니다. 연구 결과를 워크시트와 카드로 구체화하고 기업 대상 워크숍에 적용했습니다.',en:'Researched sustainable-food consumption among millennial and Gen Z consumers and developed a co-design toolkit to support consumer-centered product planning, then applied the worksheets and cards in company workshops.'};
toolkit.details.ko=[['연구','심층 인터뷰·행동기록 다이어리·사후 인터뷰로 소비 맥락을 수집하고 분석했습니다.'],['도구','세 가지 소비자 퍼소나와 소비 패러다임을 툴킷 및 워크숍으로 연결했습니다.'],['적용','친환경 기업 워크숍에서 활용하고 설문·인터뷰로 참여자의 평가를 확인했습니다.']];
toolkit.details.en=[['Research','Gathered consumption contexts through interviews, behavioral diaries and follow-up interviews.'],['Toolkit','Translated three consumer personas and a consumption paradigm into a toolkit and workshop.'],['Application','Applied the tools in company workshops and collected participant feedback through surveys and interviews.']];
// Stable text width prevents repeated line-wrap jumps as the panels expand.
function sizeServiceText(){const panel=document.querySelector('.service-panels');if(!panel)return;const padding=innerWidth>1050?64:48;panel.style.setProperty('--detail-width',`${Math.max(180,(panel.clientWidth-3*padding)*1.7/3.7)}px`)}
new ResizeObserver(sizeServiceText).observe(document.querySelector('#services'));
addEventListener('resize',sizeServiceText);
renderWorks();sizeServiceText();

// Configure a same-origin contact backend before enabling delivery.
// The backend must set both recipients itself, validate attachments and prevent abuse.
const CONTACT_ENDPOINT='';
const contactDialog=document.querySelector('#contact-dialog');
const contactForm=document.querySelector('#contact-form');
const status=document.querySelector('#contact-status');
const files=document.querySelector('#inquiry-files');
let inquiryOrigin=null;
document.addEventListener('click',e=>{const trigger=e.target.closest('[data-inquiry],a.email');if(!trigger)return;e.preventDefault();inquiryOrigin=trigger;if(dialog.open)dialog.close();const subject=document.querySelector('#inquiry-subject');if(!subject.value)subject.value=trigger.dataset.inquiry?`${trigger.dataset.inquiry} 관련 문의`:'';contactDialog.showModal();contactDialog.scrollTop=0;document.body.style.overflow='hidden';document.querySelector('#inquiry-name').focus();});
document.querySelector('#contact-close').addEventListener('click',()=>contactDialog.close());
contactDialog.addEventListener('close',()=>{document.body.style.overflow='';if(inquiryOrigin?.isConnected&&!inquiryOrigin.closest('dialog:not([open])'))inquiryOrigin.focus();else document.querySelector('a.email').focus()});
files.addEventListener('change',()=>{const list=[...files.files];const valid=list.length<=5&&list.every(f=>/\.(png|jpe?g|webp|gif|pdf)$/i.test(f.name))&&list.reduce((n,f)=>n+f.size,0)<=10*1024*1024;files.setCustomValidity(valid?'':'이미지·PDF 최대 5개, 합계 10MB 이하로 첨부해 주세요.');document.querySelector('#file-summary').textContent=valid?list.map(f=>f.name).join(', '):files.validationMessage;files.reportValidity()});
if(!CONTACT_ENDPOINT){status.textContent='현재 시안은 전송 서비스 연결 전입니다. 작성·첨부는 가능하지만 이메일은 발송되지 않습니다.';document.querySelector('#send-inquiry').disabled=true;}
contactForm.addEventListener('submit',async e=>{e.preventDefault();if(!CONTACT_ENDPOINT||!contactForm.reportValidity())return;const button=document.querySelector('#send-inquiry');button.disabled=true;status.textContent='전송 중…';try{const response=await fetch(CONTACT_ENDPOINT,{method:'POST',body:new FormData(contactForm)});if(!response.ok)throw new Error('send');status.textContent='문의가 접수되었습니다.';contactForm.reset();document.querySelector('#file-summary').textContent='';}catch{status.textContent='전송하지 못했습니다. 작성한 내용은 유지됩니다. 잠시 후 다시 시도해 주세요.';}finally{button.disabled=false;}});
