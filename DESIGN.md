# DESIGN — 버거 키오스크

> 공통 디자인 시스템은 core `DESIGN.md`. 이 문서는 버거 테마와 화면 목록입니다.

## 1. 버거 테마 토큰

| 토큰 | 값 |
|---|---|
| `primary` | `#B42318` |
| `primary-strong` | `#8F1D14` |
| `primary-tint` | `#FDECEA` |
| `accent` | `#F59E0B` |
| `ink` | `#2A1A12` |
| `ink-muted` | `#7A5A48` |
| `background` | `#FFF8F0` |
| `line` | `#F0DCC8` |
| `discount` | `#B42318` |

공통 토큰(더치페이 파랑 `#2563EB`, 안내 노랑 `#FEF3D7` 등)은 core `DESIGN.md` 2장.

## 2. 버거 문구

| 항목 | 값 |
|---|---|
| 번호 이름 | 주문번호 (예: `317`) |
| 번호 규칙 | `001`부터 매일 다시 시작, 주문서 · 영수증 · TV 같은 번호 |
| 완료 후 처음 화면 | 20초 뒤 |

## 3. 화면 목록

### 손님 — 스탠드형 (세로 800×1280)

| 화면 | 원본 | 미리보기 |
|---|---|---|
| HW 00 시작 화면 (매장/포장) | [`00-start`](design/00-start.dc.html) | [PNG](screenshots/00-start.png) |
| HW 01 메뉴 선택 | [`Main`](design/Main.dc.html) | [PNG](screenshots/Main.png) |
| HW 02 단품 · 세트 · 라지세트 | [`02-set`](design/02-set.dc.html) | [PNG](screenshots/02-set.png) |
| HW 03 사이드 · 음료 · 재료 변경 | [`03-custom`](design/03-custom.dc.html) | [PNG](screenshots/03-custom.png) |
| HW 04 주문 확인 | [`04-cart`](design/04-cart.dc.html) | [PNG](screenshots/04-cart.png) |
| HW 05 결제 방법 선택 · 쿠폰 | [`05-pay-method`](design/05-pay-method.dc.html) | [PNG](screenshots/05-pay-method.png) |
| HW 06 더치페이 (N등분) | [`06-dutch`](design/06-dutch.dc.html) | [PNG](screenshots/06-dutch.png) |
| HW 07 주문 완료 · 주방 주문서 | [`07-done`](design/07-done.dc.html) | [PNG](screenshots/07-done.png) |

### 손님 — 갤럭시탭형 (가로 1280×800)

| 화면 | 원본 | 미리보기 |
|---|---|---|
| SW 00 시작 화면 (매장/포장) | [`sw-00-start`](design/sw-00-start.dc.html) | [PNG](screenshots/sw-00-start.png) |
| SW 01 메뉴 선택 | [`sw-01-menu`](design/sw-01-menu.dc.html) | [PNG](screenshots/sw-01-menu.png) |
| SW 02 단품 · 세트 · 라지세트 | [`sw-02-set`](design/sw-02-set.dc.html) | [PNG](screenshots/sw-02-set.png) |
| SW 03 사이드 · 음료 · 재료 변경 | [`sw-03-custom`](design/sw-03-custom.dc.html) | [PNG](screenshots/sw-03-custom.png) |
| SW 04 주문 확인 | [`sw-04-cart`](design/sw-04-cart.dc.html) | [PNG](screenshots/sw-04-cart.png) |
| SW 05 결제 방법 선택 · 쿠폰 | [`sw-05-pay`](design/sw-05-pay.dc.html) | [PNG](screenshots/sw-05-pay.png) |
| SW 06 더치페이 (N등분) | [`sw-06-dutch`](design/sw-06-dutch.dc.html) | [PNG](screenshots/sw-06-dutch.png) |
| SW 07 주문 완료 · 주방 주문서 | [`sw-07-done`](design/sw-07-done.dc.html) | [PNG](screenshots/sw-07-done.png) |

### 사장님 세팅 — 갤럭시탭형

| 화면 | 원본 | 미리보기 |
|---|---|---|
| SW 세팅 1 사장님 시작 | [`set-01-start`](design/set-01-start.dc.html) | [PNG](screenshots/set-01-start.png) |
| SW 세팅 2 매장 정보 | [`set-02-store`](design/set-02-store.dc.html) | [PNG](screenshots/set-02-store.png) |
| SW 세팅 3 메뉴 · 세트 등록 | [`set-03-menu`](design/set-03-menu.dc.html) | [PNG](screenshots/set-03-menu.png) |
| SW 세팅 4 결제 단말 · 프린터 연결 | [`set-04-devices`](design/set-04-devices.dc.html) | [PNG](screenshots/set-04-devices.png) |
| SW 세팅 5 키오스크 모드 · 주문번호 안내 | [`set-05-kiosk`](design/set-05-kiosk.dc.html) | [PNG](screenshots/set-05-kiosk.png) |

### 쿠폰

| 화면 | 원본 | 미리보기 |
|---|---|---|
| 쿠폰 1 사장님 쿠폰 관리 대시보드 (반응형) | [`coupon-dashboard`](design/coupon-dashboard.dc.html) | [PNG](screenshots/coupon-dashboard.png) |
| 쿠폰 2 사장님 쿠폰 발행 (반응형) | [`coupon-create`](design/coupon-create.dc.html) | [PNG](screenshots/coupon-create.png) |
| 쿠폰 3 손님 · 스탠드형 시리얼 입력 | [`hw-coupon-serial`](design/hw-coupon-serial.dc.html) | [PNG](screenshots/hw-coupon-serial.png) |
| 쿠폰 4 손님 · 스탠드형 바코드 스캔 | [`hw-coupon-scan`](design/hw-coupon-scan.dc.html) | [PNG](screenshots/hw-coupon-scan.png) |
| 쿠폰 5 손님 · 갤럭시탭 시리얼 입력 | [`sw-coupon-serial`](design/sw-coupon-serial.dc.html) | [PNG](screenshots/sw-coupon-serial.png) |
| 쿠폰 6 손님 · 갤럭시탭 바코드 스캔 | [`sw-coupon-scan`](design/sw-coupon-scan.dc.html) | [PNG](screenshots/sw-coupon-scan.png) |

### 기획 문서 (참고용)

| 화면 | 원본 | 미리보기 |
|---|---|---|
| 08 결제 단계 플로우차트 | [`08-flow`](design/08-flow.dc.html) | [PNG](screenshots/08-flow.png) |
| 09 시스템 구조도 | [`09-structure`](design/09-structure.dc.html) | [PNG](screenshots/09-structure.png) |
| 10 반응형 구간 · 폰트 기준 | [`10-responsive`](design/10-responsive.dc.html) | [PNG](screenshots/10-responsive.png) |
| 설치 방식 비교 (HW vs SW) | [`install-compare`](design/install-compare.dc.html) | [PNG](screenshots/install-compare.png) |

## 4. 버거 전용 컴포넌트

| 컴포넌트 | 설명 | 디자인 |
|---|---|---|
| `SetChoiceCards` | 단품 / 세트 / 라지세트 카드 + 라지 권유 | `02-set` |
| `SetStepper` | 1 세트 · 2 사이드 · 3 음료 · 4 재료 단계 표시 | `03-custom` |
| `ToppingToggleRow` | 재료 빼기 · 추가 토글 | `03-custom` |
| `OrderNumberBoard` | TV 주문번호 안내 화면 (웹) | `set-05-kiosk` 안내, 디자인 추가 필요 |
| `HeadcountPicker` | N등분 인원 2–6+ | `06-dutch` |

공통 컴포넌트는 core `DESIGN.md` 6장.

## 5. 디자인과 명세 차이

| 화면 | 디자인 원본 | 구현 기준 |
|---|---|---|
| `06-dutch` N등분 안내 | "남는 원 단위는 마지막 결제자에게" | core `docs/04` 규칙과 동일 (확정) |
| 시작 화면 | `한국어 · English`, `큰 글씨` 버튼 | MVP에서는 숨김 (core D8, task-026) |
| 메뉴 상단 매장/포장 탭 | 어두운 배경 + 앰버(`#F59E0B`) 선택 | 버거 테마 예외로 유지 — `accent` 토큰 사용 |
