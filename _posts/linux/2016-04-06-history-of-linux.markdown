---
layout: post
title: 리눅스 소개 및 역사
date: 2016-04-06 21:58:02 +0900
description: ''
image: ''
categories: linux
published: false
comments: false
tags:
- linux
---

# 리눅스란? 

인터넷상에서 많은 사람들에 의해 개발되고 있는 리눅스는 1991년 핀란드 헬싱키대학 학생이던 리누스 토 발즈(Linus Tovals)가 비싼 대형 기종에서나 작동하던 운영체계인 유닉스를 386급 정도의 PC에서도 작동할 수 있게 만들어 인터넷을 통해 무료로 배포하고 있는 컴퓨터 기본 운영체계이다.  

우리가 흔히 GNU/리눅스라고 얘기하는 것은 리누스 토발즈가 만든 커널이 FSF의 GNU 프로젝트를 통해 개 방형 운영체계를 만들기 위한 GNU GPL을 따르고 있기 때문이다. 따라서 리눅스라는 것은 정확히 얘기하자면, "리눅스 커널을 기반으로 한 GNU 시스템"이다. 

# 리눅스의 탄생

리눅스 커널은 1991년에 "리누스 토발즈"에 의해 생긴 말이다. 일찍이 미닉스 커뮤니티가 리눅스 커널에 코드와 개념을 제공하였다. 그 당시 GNU 프로젝트는 자유 소프트웨어 운영 체제에 필요한 요소를 많이 만들어 냈지만 자체 커널 GNU 허드는 완전하지 않았고 이용성이 없었다. BSD 운영 체제는 법적 문제로부터 헤어나오지 못했다. 이는 초기 버전의 제한된 기능에도 불구하고 리눅스가 새로운 운영체제를 사용하기 위한 프로젝트로부터 코드를 채용한 개발자들과 사용자들을 빠른 속도로 모았다는 것을 말해 준다. 오늘날 리눅 스 커널은 수많은 프로그래머로부터 기여를 받고 있다.

즉, 리누즈토발즈가 개발해서 발표한 리눅스는 레드햇리눅스나 SULinux와 같은 리눅스배포판형태 개념의 리눅스가 아니라, 그 속에 들어있는 Kernel 부분만을 의미하는 것이다.

# 리눅스의 역사

### 1960년대 후반

1965년 MIT, AT&T 벨 연구소, General Electric에서는 Multics라는 실험적인 운영체제를 공동으로 개발하는 프로젝트를 진행하였다. 이 프로젝트는 멀티태스킹, 멀티유저를 지원하는 초기 형태의 시분할 운영체제를 만 들고자 했던 것이었다. 그러나, Multics는 초기의 설계 목표와는 다르게 비대해지고 쓸모없는 운영체제로 개발되어갔고, 프로젝트는 좌초되기에 이르렀다.

그러나, 이 프로젝트에 참여했던, 켄 톰슨과 몇몇 연구원들은 프로그래밍에 관한 연구를 효과적으로 수행하기에 적합한 환경을 만들어 보자는 의도에서 계속하여 운영체계 개발에 몰두하였고, 그래서 탄생한 것이 초기 형태의 UNIX였다.

당시에는 하드웨어를 운영하는 프로그램을 그 하드웨어의 어셈블러로 작성하여 사용했는데, 유닉스 역시 미니 컴퓨터인 PDP-7에서 돌아가도록 만들어진 것이었으며, 어셈블리어로 작성되어 있었다. 그러니 다른 기종에 이식하려면 그 기종에 맞는 어셈블리어로 다시 작성해야만 하는 불편을 겪어야 했다.

이렇게 초기의 UNIX는 기계 의존적이며, 기종간에 호환성이 없는 그런 운영체제였다. 그리고 UNIX를 운영체제로 사용하던 PDP-7 또한, 많은 소프트웨어를 제공하지 못하는 상황이었다.

### 1973년

이러한 상황에서 데니스 리치(Dennis Ritchie)가 C언어를 개발함으로써, 어셈블리 언어로 되어 있던 UNIX는 C언어로 제작성되어 다시 태어나게 되었다. 이제 UNIX는 이식성과 호환성있는 시스템으로서 사용자들 로부터 큰 반향을 일으켰고, 벨 연구소를 중심으로 유닉스 사용자 그룹이 형성되며 빠르게 버전업 되면서 퍼져 나가게 되었다.

UNIX는 주로 연구와 학습을 목적으로 대학이나, 연구소등에 무료로 배포되었고, 이를 이용하는 프로그래머 들 또한 자연스럽게 서로에게 필요한 프로그램을 공유하는 공동체 분위기가 조성되어 있었다.

Source 프로그램이 공개되어 있었던 UNIX는 많은 대학들과 연구원들에 의해 연구되어 마침내 상업 시장에 진출하기에 이르렀고, Berkeley Unix(BSD), SYSV와 같은 계열로 분화되고, SunOS, OSF/1,AIX, HP-UX, Solaris, IRIX, SCOUNIX등과 같은 다양한 버전의 유닉스 운영체제들을 탄생시키는 모체가 되었다. 

### 1980년 대 초반

UNIX는 당시 가장 인기있는 기종인 DEC의 PDP-11과 VAX를 주축으로 발전되고 있었다. 한편, MIT의 인공지능 연구소에서는 PDP-10에 탑재하기 위한 시분할 운영체제인 ITS를 개발하였는데, 연구내용을 상업화 하려는 움직임이 있었고, 이로 인해 분열의 조짐이 보이면서, 몇몇 핵심 연구원들은 상업적인 것을 목적으로 하는 회사로 떠났다. 때마침, DEC이 VAX와 PDP-11을 주력제품으로 삼으면서, PDP-10을 단종시킴으로써 더 이상 ITS의 개발은 이루어질 수 없었다. 

### 1984년 1월

MIT 인공지능 연구소의 연구원으로 ITS 프로젝트에 참여하였던 리차드 스톨먼(Richard Stollman)은, 소스를 공개하지 못하도록 하는 분위기와 기술을 상업화 하려는 조류에 반감을 갖게 되었다. 그래서, 그는 새로운 시스템을 구상하게 되었는데 그 모델이 된 것은 UNIX였다. 그는 C로 작성된, 그리고 모두에게 공개된 UNIX 시스템을 위해 GNU(GNU is Not Unix) 프로젝트를 시작하게 되었다. 그는 GNU 프로젝트의 결과물들 이, 자신이 몸담았던 MIT로부터 저작권과 관련한 어떤 제약을 받게 될 것을 우려하여, MIT 연구원직을 사직할 만큼, 완전히 자유로운 운영체제를 원하고 있었다.

### 1985년 

GNU 프로젝트로 개발된 에디터인 Emacs에 대한 사용자들의 관심이 높아지면서 , 스톨먼은 GNU프로젝트 운영을 위해 FSF(Free Software Foundation,자유 소프트웨어재단)을 설립하였다. 개발이 진행된 프로그램들 은 GNU프로그램들의 배포 라이센스인 GPL하에서 판매되었으며, 판매 수익은 프로젝트를 운영하는데 사용되 었다. 모든 GNU프로젝트는 FSF를 중심으로 진행되어 갔다.   

### 1990년

GNU 프로젝트는 거의 완성단계에 이르렀으나, 운영체제에서 핵심이 되는 커널이 빠져 있는 상태였다. 스톨 먼은 Mach를 기반으로 한 커널인 'Hurd'라는 이름의 커널을 개발하기 시작하였으나, 이미 공개된 프로그램 들에 대한 지원 등 여러가지 이유로 GNU 커널의 개발은 좀처럼 진척되지 않았다. 

### 1991년 

이때에 핀란드의 헬싱키라는 곳에서는 한 대학생에 의해 GNU시스템에 적합한 커널이 개발되고 있었는데, 이것이 바로 "리누스 토발즈"의 "리눅스"였다. 당시 21살의 대학생이었던 리누스는, 앤디 타넨바움(Andy Tanenbaum)교수가 학생들의 학습을 주 목적으로 개발한 미닉스(MINIX)를 사용하던 중, 유닉스와 호환되는 공개된 운영체제의 개발 계획을 MINIX사용자 모임에 발표하였다.

그는 개발 할 운영체제가 "단지 취미이며 GNU처럼 거대하거나 전문적인 것은 아니다"라고 프로젝트 초기의 의도를 밝혔다. 그래서, 초기의 리눅스는 이식성이 고려되지 않은, 다만 i386계열에서 운영되는 유닉스 호환 운영체제를 목표로 하는 프로젝트였다. 초기 버전 0.01은 가장 기본적인 커널만을 포함하고 있었으며, 실행 조차 되지 않는 수준이었다.

얼마 후 리눅스 공식 버전인 0.02가 발표 되었는데, bash(GNU Bourne Again Shell)와 gcc(GNU C 컴파일러) 정도가 실행될 수 있는 수준이었다.

### 1992년

3월 리눅스는 0.95로 버전업 되었고, 인텔 x86칩에서 사용할 수 있었고, 그래픽 사용자 인터페이스가 추가 된 것이었다.

GNU커널로 개발 중이던 Hurd의 개발이 순조롭지 않았던, 스톨먼과 FSF는 유닉스 커널과 호환 가능한 커널인 리눅스를 GNU시스템의 커널로 채택하기로 하였다.

리눅스는 강력한 GNU "C 컴파일러"인 "gcc"로 컴파일된 많은 응용프로그램들을 가지게 되었고, 둘의 결합으 로 GNU시스템은 완전한 구조를 갖추게 되었다.

리눅스의 커널부분은 리누스 주도 하에 계속 개발되었는데, 리누스는 최대한 확장 가능한, 즉 사용자에게 제어권이 있으며, 어떠한 인터페이스에도 종속되지 않도록 개발을 이끌고자 하는 의지가 있었다. 리누스는 그의 글을 통해서 리눅스의 성공의 원인을 다음과 같이 밝히고 있다.

"리눅스의 성공은 훌륭한 설계 원칙과 좋은 개발 모델 때문이라고..." 

### 1994년

1년 6개월여 만에 버전 1.0 이 발표 되었고, 이 버전에는 네트워킹 기능 추가 되어 있었다. 이즈음, 리눅스에 확실한 수익모델이 있다고 판단한 밥 영과 마크유잉은 레드햇사를 설립하고, 최초로 자사에서 패키징한 레드햇의 최초 배포본을 발표하게 되었다.

### 1995년 

리눅스는 더 이상 i386계열에서 돌아가는 학습용 운영체제가 아닌, 인텔, 디지털, 썬 스팍 프로세스에도 포팅됨으로 그 영역을 넓혔으며, 알파프로세서용의 64비트 리눅스도 등장하였다. 

### 1996년

리눅스커널 버전 2.0이 발표 되었는데, 여러 프로세서를 한 번에 사용할 수 있는 컴퓨팅 파워가 추가되었다. 또한 이것은 리눅스가 PC 뿐만 아니라 Server 용으로 그 가능성을 가지게 된 것이다. 그리고 1996년 10월 에는 KDE 데스크탑 프로젝트가 시작되었다.

### 1997년

1997년 3월에는 에릭레이몬드(Eric Raymond)가 "성당과 시장" 이라는 논문을 발표하였다. 그리고 이구엘 드 이카자가 이끌고 Redhat Software가 후원하는 GNOME 데스크탑 프로젝트가 시작되었다. 

### 1998년 

이때부터 오픈소스(OpenSource)라는 용어가 탐생되어 사용되었다. 그리고 수 많은 프로그래머가 뉴스그룹에서 코드 향상과 테스팅에 참여하였다. 

### 1999년 

1991년 1월 리눅스커널 2.2 버전이 공식 발표되었다. SMP 기능의 공식 지원으로 최대 16개까지의 CPU장착 가능해지고, 최대 동시접속 사용자수 2048명까지 지 원하는 시스템이 되었다.  

### 2003년

리눅스커널 2.4 버전이 발표되었다. 2.4 버전에서는 리눅스에서 16 개의 프로세스까지 확장 가능하게 되었으 며 당시 IBM, SUN, HP 등이 주축이던 엔터프라이즈급 대형 시스템에서도 본격적으로 사용하게 되었다. 

### 2006년

2006년 1월 GPL3의 초안 발표되었고 논의를 시작하였다. 하지만 DRM 등을 둘러싼 자유소프트웨어 진영의 원칙론자들과 실용주의자들의 논란이 일게되었다.

### 2007년 

많은 논의 토론끝에 GPL3 정식버전이 발표되었다. 

### 2009년 현재... 

리눅스커널 공식버전 2.6.30 버전이 가장 최근의 안정버전으로 발표되었다. 

# GNU 프로젝트

GNU 프로젝트 (GNU project, 그누 프로젝트)는 리처드 스톨만이 완전한 공개 운영 체제인 GNU 시스템을 만들기 위한 목적으로 시작했다. 이 프로젝트는 1983년 9월 27일 유즈넷 net.unix-wizard 그룹을 통해 일반 에 알려졌다. 스톨만은 첫 선언문에 이은 "GNU 선언문"을 비롯한 여러 글들을 통해서, "초기 전산 공동체에 지배적이었던, 협동 정신을 되돌리자"라고 주장했다. 

GNU는 "GNU는 유닉스가 아니다."란 의미를 갖는 영어 문장 "GNU's Not UNIX"의 약자로, 원래의 문장 안 에 자신이 이미 들어 있는 재귀 약자이다. 스톨만은 GNU를 "그누"로 읽자고 제안한다. 유닉스는 이미 널리 쓰이던 독점 소프트웨어 운영 체제로, 유닉스의 아키텍처는 기술적으로 믿을만 한 것으로 증명되어 있어, GNU 시스템은 유닉스와 호환될 수 있도록 만들어졌다. 유닉스 아키텍처는 개별적인 요소들이 따로 따로 작 성되는 것을 허용한다. 또, 이미 공개되어 있던 조판 소프트웨어 텍(TeX)이나, X 윈도우도 쓸 수 있는 장점이 있었다.  

GNU 프로젝트는 누구나 자유롭게 "실행, 복사, 수정, 배포"할 수 있고, 누구도 그런 권리를 제한하면 안 된 다는 사용 허가권(License) 아래 소프트웨어를 배포한다. 카피레프트로 불리는 이런 생각은 GPL(GNU 일반 공중 사용 허가서)에 나타나 있다.

1985년에 스톨만은 GNU 프로젝트를 철학적, 법률적, 금융적으로 지원하기 위해 자선단체인 자유 소프트웨 어 재단(FSF, Free Software Foundation)을 세웠다. 이 재단은 GNU를 개발할 프로그래머들도 고용했다. 그러 나, 프로젝트의 대부분은 자원 봉사자들이 개발했으며, 앞으로도 그럴 것이다. GNU가 눈길을 끎에 따라, 이 를 주목한 회사들은 GNU 소프트웨어의 개발이나 판매 및 기술 지원을 돕기 시작했다. 이 가운데 가장 두드 러지고 성공적인 것은 (현재는 레드햇의 일부인) Cygnus Solutions이다.

1990년까지, GNU 시스템엔 확장 가능한 문서 편집기(이맥스), 뛰어난 최적화 컴파일러(GCC), 그리고 표준 유 닉스 배포판의 핵심 라이브러리와 유틸리티가 있었다. 하지만, 여기엔 주요 구성요소인 커널이 빠져 있었다.  

GNU 선언문에서, 스톨만은 "기본적인 커널은 있지만 유닉스를 흉내내려면 아직 더 많은 기능이 필요하다" 라고 했다. 여기서 그가 지칭한 것은 MIT에서 개발하여 자유롭게 배포했고, 유닉스 7번째 판과 호환되는 TRIX라는 원격 작업 호출 커널(remote procedure call kernel)이었다. 1986년 12월, 이 커널을 고치는 작업이 시작됐다. 하지만, 개발자들은 결국 TRIX를 기반으로 새 커널을 만드는 것은 어렵다는 결론을 내렸다. 주된 이유는 TRIX는 "애매하고(잘 안 쓰이고?) 비싼 68000 box"에서만 동작했고, 따라서 그 상자에서 쓰이기 전에 다른 구조로 옮겨야(ported) 했기 때문이다. 1988년 즈음에, 카네기멜론 대학교에서 개발되던 Mach 통신-전 송 커널(Mach message-passing kernel)을 그 대체품으로 고려했지만, 이것은 처음에 이것을 개발한 사람들이 AT&T 소유의 코드를 지우면서 지연되었다. 처음엔, 이 커널은 Alix라고 불렸지만, 나중에 개발자 Michael Bushnell는 HURD라는 이름을 선호하여, Alix란 이름은 하부 구조로 옮겨지고 마침내 완전히 떨어졌다. 결국은, HURD의 개발은 기술적이고 개인적인 충돌로 지지부진해 지고 말았다.  

1991년에 리누스 토발즈는 유닉스 호환의 리눅스 커널을 작성하여 GPL 라이선스 아래에 배포했다. 다른 여러 프로그래머들은 인터넷을 통해 리눅스를 더욱 발전시켰다. 1992년 리눅스는 GNU 시스템과 통합되었고, 이로서 완전한 공개 운영 체제가 탄생되었다. GNU 시스템들 가운데 가장 흔한 것이, "GNU/Linux" 또는 "Linux 배포판"이라고 불리는 바로 이 시스템이다. (2003년 기준으로, 허드(HURD)는 여전히 개발 중이며, 리 눅스를 대신하여 허드를 사용한 GNU 시스템을 비공식 실험판으로 사용할 수 있다.)  

또한, 비공개 유닉스 시스템에도 GNU의 구성 요소들이 오리지널 유닉스 프로그램을 대신하여 들어 있는 경 우도 많다. 이는 GNU 프로젝트를 통해 쓰여진 프로그램들이 질적으로 우수하다는 사실을 증명하는 것이다. 종종, 이런 구성요소들은 "GNU 툴"로 불리기도 한다. 다수의 GNU 프로그램은 마이크로소프트 윈도나 맥 오 에스 텐 등으로 포팅되기도 했다.