export const CONSULTATION_AREA_VALUES = [
   "residential_new",
   "commercial",
   "steel_frame",
   "wood_frame",
   "panel",
   "interior",
   "renovation",
   "other",
] as const;

export type ConsultationAreaValue = (typeof CONSULTATION_AREA_VALUES)[number];

export const CONSULTATION_AREA_LABELS: Record<ConsultationAreaValue, string> = {
   residential_new: "주거용 신축",
   commercial: "상가·상업 시설",
   steel_frame: "철골 구조",
   wood_frame: "목조 주택",
   panel: "판넬 시공",
   interior: "인테리어·마감",
   renovation: "증축·개축·리모델링",
   other: "기타",
};
