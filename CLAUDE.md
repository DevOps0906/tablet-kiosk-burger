# CLAUDE.md — tablet-kiosk-burger (버거 설계서)

## 1. 이 저장소는 설계서입니다 (코드 없음)

- 버거 업종의 **기획 · 디자인 · 화면 명세**만 있습니다.
- 실제 코드는 `tablet-kiosk-core`에 작성합니다.
  - 버거 전용 코드: `tablet-kiosk-core/apps/kiosk/lib/verticals/burger/`
  - 공통 코드(결제 · 출력 · 쿠폰 · 기기): `tablet-kiosk-core/apps/kiosk/lib/core/`
- 이 저장소에 코드 파일을 만들지 않습니다.

## 2. 함께 여는 방법

```bash
cd kiosk/tablet-kiosk-core
claude --add-dir ../tablet-kiosk-burger
```

core 저장소의 `CLAUDE.md` 규칙이 우선이고, 이 저장소 문서는 버거 기능의 **무엇을 · 어떻게 보이게**를 정합니다.

## 3. 문서 우선순위

1. `specs/` — 화면별 동작 명세 (가장 우선)
2. `docs/01-vertical-rules.md` — 버거 업무 규칙 · 데이터 키 · 확장 지점
3. `DESIGN.md` — 테마 · 화면 목록
4. `design/*.dc.html`, `screenshots/*.png` — 디자인 원본 (크기 · 여백 · 글자 크기 기준, px = dp)
5. `PRD.md` — 범위 · 우선순위

명세와 디자인 원본이 다르면 **명세가 우선**이고, 차이는 `DESIGN.md` "디자인과 명세 차이" 표에 적습니다.

## 4. 수정 규칙

- `design/`, `screenshots/`는 디자인 캔버스에서 만든 원본입니다. 직접 고치지 말고, 디자인을 고친 뒤 다시 내보냅니다.
- 명세를 바꾸면 core의 관련 작업(`tasks/README.md`에 적힌 작업)과 맞는지 확인하고, 필요하면 core `tasks/README.md` "발견한 문제"에 적습니다.
- 문서는 한국어로 씁니다.
