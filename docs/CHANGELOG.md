# CHANGELOG — Kinetic Pacer

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
