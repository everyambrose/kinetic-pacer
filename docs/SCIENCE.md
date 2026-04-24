# SCIENCE.md — 뉴트리션 계산 근거

## 에너지 소비 공식

### Minetti (2002)
경사도별 에너지 소비를 다항식으로 계산합니다.

gradient = (elevation_gain / distance) 
gap_factor = 155.4×i⁵ - 30.4×i⁴ - 43.3×i³ + 46.3×i² + 19.5×i + 3.6

범위: 0.8배(내리막) ~ 3배(급등)

## 탄수화물 흡수 한계

### Jeukendrup (2011, 2014)
- 최대 흡수량: 85g/hr
- 조건: Glucose + Fructose 3:1 비율
- 개인차: 40~85g/hr

## 수분 손실 계산

### Sawka et al. (2007)
waterPerHour = (500 + temp×15) × (0.5 + sweatRate×0.1)

기온 15°C 이상일 때 1°C마다 약 15ml/hr 증가

## 땀 나트륨 농도

### Baker (2017)
LV.1~10 선형 스케일
- LV.1 (300mg/L): 거의 안 짬
- LV.5 (900mg/L): 평균
- LV.10 (1800mg/L): 심한 발한
