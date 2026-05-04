# CHANGELOG — Kinetic Pacer

## v10.1 (2026-05-04)
> GEL 마커 terrain 기반 전환 (KP-Runner 건의 / 팀 만장일치)

### ✨ 개선
- Changed: GEL 지도 마커 — km 인터벌 방식 → **terrain 블록 경계 방식**으로 전환
  - 각 terrain 블록 끝(다음 블록 진입 전)에 GEL 마커 배치
  - 블록 길이 > 12km 시 등간격 중간 마커 자동 추가 (혈당 유지)
  - 트리거 간격 < 8km 시 자동 병합 (과일 세분화 방지)
  - 5g 미만 누적 시 마커 생략 (에너지젤 일부만 먹는 상황 제외)
- Unchanged: WATER·SALT 마커는 km 인터벌 유지 (생리학적 근거 — 지속 보충 원칙)

## v10.0.1 (2026-04-30)
> 팀 시뮬레이션(Seoul 100K) 리뷰 기반 패치

### 🔴 Critical
- Fixed: UPHILL 카드 "진입 전 보급" 배지 → FLAT/DOWN 카드(업힐 직전)에만 표시로 이동
- Fixed: DOWN 블록 하강 고도 `lossM` 집계 추가 — `−Xm` 정확 표시

### 🟠 High
- Fixed: DOWN 블록 예상 시간 — 에너지 지표(GAP factor)와 분리, trail pace factor 0.85 적용
- Fixed: 업힐 예상 시간 avgGf 보정 유지 (BUG-3 v2)
- Fixed: GI 경고 임계값 60→75 g/hr (Jeukendrup 2014 다중 운반체 기준, 과잉 트리거 방지)

### 🟡 UX
- Added: terrainPanel 빈 상태 안내 문구 (GPX 업로드 전)
- Added: GI 위험 경고 배너 (10hr+ + 75g/hr 초과 시, Costa 2017 근거)

## v10.0 (2026-04-30)
> TERRAIN TAB 신규 기능 (KP-Runner / KP-Debug / KP-Science 협업)

### ✨ NEW
- Added: 우측 패널 탭 전환 UI — 🔺 TERRAIN (기본값) / 📊 1KM PLAN
- Added: `buildTerrainBlocks()` — 거리 기반(300m 창) grade 계산, GPS 밀도 무관
- Added: grade ±8% threshold — Minetti 2002 + KP-Runner 현장 검증 (GAP factor ≈ 1.28)
- Added: 0.5km 미만 파편 블록 자동 병합 알고리즘
- Added: TERRAIN 카드 — 구간별 고도/예상시간/탄수화물/수분/염분 표시
- Added: "⚠️ 다음 업힐 전 보급 권고" / "🔺 진입 전 보급 완료 권장" 배지
- Added: 레퍼런스 2건 추가 — Tiller 2019 (ISSN Ultra-Marathon, PMID 31480033), Costa 2017 (Gut-Training, PMID 28177715)

## v9.4 (2026-04-25)
- Added: 모바일 최적화 (2열 그리드 레이아웃)
- Added: USER MANUAL 버튼 (로고 옆)
- Fixed: Leaflet 지도 모바일 렌더링 이슈
- Changed: 땀 염도 디폴트 LV.1로 변경
- Changed: 체중 디폴트 60kg로 변경
- Docs: 전해질 계산 근거 상세화

## v9.3 (2026-04-20)
- Added: Absorption Cutoff 기능
- Added: Pre-Start Loading UI
- Changed: 마지막 보급 시점을 시간 기준으로 계산

## v9.2 (2026-04-18)
- Fixed: 지도 타일 로딩 (모바일)
- Added: 색상 구분 레퍼런스

## v9.1 (초기 버전)
- 기본 뉴트리션 계산 시스템
- 지도·차트·CSV 내보내기
