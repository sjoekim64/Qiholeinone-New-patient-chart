export const commonComplaints = [
  { value: 'Neck Pain', label: 'Neck Pain' },
  { value: 'Shoulder Pain', label: 'Shoulder Pain' },
  { value: 'Back Pain', label: 'Back Pain' },
  { value: 'Knee Pain', label: 'Knee Pain' },
  { value: 'Headache', label: 'Headache' },
  { value: 'Migraine', label: 'Migraine' },
  { value: 'Insomnia', label: 'Insomnia' },
  { value: 'Digestive Issues', label: 'Digestive Issues' },
  { value: 'Fatigue / Lethargy', label: 'Fatigue / Lethargy' },
  { value: 'Menstrual Issues', label: 'Menstrual Issues' },
  { value: 'Numbness / Tingling', label: 'Numbness / Tingling' }
];

export const baseAggravatingFactors = [
  { value: 'Prolonged Sitting / Standing', label: 'Prolonged Sitting / Standing' },
  { value: 'Lifting Heavy Objects', label: 'Lifting Heavy Objects' },
  { value: 'Stairs / Weight Bearing', label: 'Stairs / Weight Bearing' },
  { value: 'Specific Postures', label: 'Specific Postures' },
  { value: 'Weather Changes', label: 'Weather Changes' }
];

export const baseAlleviatingFactors = [
  { value: 'Rest / Lying Down', label: 'Rest / Lying Down' },
  { value: 'Stretching / Light Exercise', label: 'Stretching / Light Exercise' },
  { value: 'Warm Packs / Shower', label: 'Warm Packs / Shower' },
  { value: 'Massage / Acupressure', label: 'Massage / Acupressure' },
  { value: 'Medication', label: 'Medication' }
];

export const painQualities = [
  { value: 'Sharp', label: 'Sharp' },
  { value: 'Dull', label: 'Dull' },
  { value: 'Burning', label: 'Burning' },
  { value: 'Throbbing', label: 'Throbbing' },
  { value: 'Tingling', label: 'Tingling' },
  { value: 'Numb', label: 'Numb' },
  { value: 'Stiff', label: 'Stiff' },
  { value: 'Aching', label: 'Aching' }
];

export const basePossibleCauses = [
  { value: 'Traffic Accident', label: 'Traffic Accident' },
  { value: 'Fall / Slip', label: 'Fall / Slip' },
  { value: 'Overwork / Repetitive Labor', label: 'Overwork / Repetitive Labor' },
  { value: 'Excessive Exercise', label: 'Excessive Exercise' },
  { value: 'Poor Posture', label: 'Poor Posture' },
  { value: 'Lifting / Sudden Movements', label: 'Lifting / Sudden Movements' },
  { value: 'Poor Sleeping Posture', label: 'Poor Sleeping Posture' },
  { value: 'Exposure to Cold / Damp', label: 'Exposure to Cold / Damp' },
  { value: 'Degenerative Changes', label: 'Degenerative Changes' },
  { value: 'Post-Injury / Surgery', label: 'Post-Injury / Surgery' }
];

export const complaintLocationMap: { [key: string]: string[] } = {
  'Neck Pain': ['Left', 'Right', 'Upper', 'Lower'],
  'Shoulder Pain': ['Left', 'Right', 'Both'],
  'Back Pain': ['Upper', 'Middle', 'Lower', 'Left', 'Right'],
  'Knee Pain': ['Left', 'Right', 'Both'],
  'Headache': ['Frontal', 'Temporal', 'Occipital', 'Parietal'],
  'Numbness / Tingling': ['Hands', 'Feet', 'Arms', 'Legs']
};

export const pastMedicalHistoryOptions = [
  { value: 'Hypertension', label: 'Hypertension' },
  { value: 'Diabetes Mellitus', label: 'Diabetes Mellitus' },
  { value: 'Hyperlipidemia', label: 'Hyperlipidemia' },
  { value: 'Heart Disease', label: 'Heart Disease' },
  { value: 'Cerebrovascular Disease', label: 'Cerebrovascular Disease' },
  { value: 'Asthma / COPD', label: 'Asthma / COPD' },
  { value: 'GI Disease', label: 'GI Disease' },
  { value: 'Liver Disease', label: 'Liver Disease' },
  { value: 'Kidney Disease', label: 'Kidney Disease' },
  { value: 'Cancer', label: 'Cancer' }
];

export const medicationOptions = [
  { value: 'Antihypertensives', label: 'Antihypertensives' },
  { value: 'Antidiabetics', label: 'Antidiabetics' },
  { value: 'Statins (Cholesterol)', label: 'Statins (Cholesterol)' },
  { value: 'Heart Medication', label: 'Heart Medication' },
  { value: 'Blood Thinners', label: 'Blood Thinners' },
  { value: 'GI Medication', label: 'GI Medication' },
  { value: 'NSAIDs', label: 'NSAIDs' },
  { value: 'Thyroid Medication', label: 'Thyroid Medication' },
  { value: 'Hormones', label: 'Hormones' },
  { value: 'Psychiatric Meds', label: 'Psychiatric Meds' }
];

export const familyHistoryOptions = [
  { value: 'Hypertension', label: 'Hypertension' },
  { value: 'Diabetes', label: 'Diabetes' },
  { value: 'Heart Disease', label: 'Heart Disease' },
  { value: 'Stroke', label: 'Stroke' },
  { value: 'Hyperlipidemia', label: 'Hyperlipidemia' },
  { value: 'Cancer', label: 'Cancer' },
  { value: 'Tuberculosis', label: 'Tuberculosis' },
  { value: 'Liver Disease', label: 'Liver Disease' },
  { value: 'Alcoholism', label: 'Alcoholism' },
  { value: 'Psychiatric Illness', label: 'Psychiatric Illness' }
];

export const allergyOptions = [
  { value: 'Penicillin', label: 'Penicillin' },
  { value: 'Aspirin', label: 'Aspirin' },
  { value: 'NSAIDs', label: 'NSAIDs' },
  { value: 'Anesthetics', label: 'Anesthetics' },
  { value: 'Contrast Media', label: 'Contrast Media' },
  { value: 'Seafood', label: 'Seafood' },
  { value: 'Peanuts', label: 'Peanuts' },
  { value: 'Eggs', label: 'Eggs' },
  { value: 'Milk', label: 'Milk' },
  { value: 'Other Medications', label: 'Other Medications' }
];

export const tongueBodyColorOptions = [
  'Pale', 'Pink', 'Red', 'Dark Red', 'Purple', 'Reddish Purple', 
  'Bluish Purple', 'Red Tip', 'Redder side', 'Orange side', 'Purple side'
].map(o => ({ value: o, label: o }));

export const tongueBodyShapeOptions = [
  'Stiff', 'Long', 'Flaccid', 'Cracked', 'Swollen', 'Short', 
  'Rolled up or Down', 'Ulcerate', 'Tooth-marked', 'Half Swollen', 
  'Thin', 'Thick', 'Narrow', 'Deviation', 'Trembling', 'Normal'
].map(o => ({ value: o, label: o }));

export const tongueCoatingColorOptions = [
  'White', 'Yellow', 'Gray', 'Black', 'Greenish', 'Half White or Yellow'
].map(o => ({ value: o, label: o }));

export const tongueCoatingQualityOptions = [
  'Thin', 'Thick', 'Scanty', 'None', 'Dry', 'Wet', 
  'Slippery', 'Greasy', 'Rough', 'Sticky', 'Graphic', 'Mirror'
].map(o => ({ value: o, label: o }));

export const tongueLocationOptions = [
  'Heart (Tip)', 'Lung (Upper-mid)', 'Stomach/Spleen (Center)', 
  'Liver/Gallbladder (Sides)', 'Kidney/Bladder (Root)'
].map(o => ({ value: o, label: o }));

export const otherTreatmentOptions = [
  { value: 'None', label: 'None' },
  { value: 'Tui-Na', label: 'Tui-Na' },
  { value: 'Acupressure', label: 'Acupressure' },
  { value: 'Moxa', label: 'Moxa' },
  { value: 'Cupping', label: 'Cupping' },
  { value: 'Electro Acupuncture', label: 'Electro Acupuncture' },
  { value: 'Heat Pack', label: 'Heat Pack' },
  { value: 'Auricular Acupuncture', label: 'Auricular Acupuncture / Ear Seeds' },
  { value: 'Other', label: 'Other' }
];

export const severityOptions = [
  { value: 'Minimal', label: 'Minimal' },
  { value: 'Slight', label: 'Slight' },
  { value: 'Moderate', label: 'Moderate' },
  { value: 'Severe', label: 'Severe' }
];

export const frequencyOptions = [
  { value: 'Occasional', label: 'Occasional' },
  { value: 'Intermittent', label: 'Intermittent' },
  { value: 'Frequent', label: 'Frequent' },
  { value: 'Constant', label: 'Constant' }
];

export const onsetUnitOptions = [
  { value: 'days', label: 'Days' },
  { value: 'weeks', label: 'Weeks' },
  { value: 'months', label: 'Months' },
  { value: 'years', label: 'Years' }
];

export const heartRhythmOptions = [
  { value: 'Normal', label: 'Normal' },
  { value: 'Occasionally Irregular', label: 'Occasionally Irregular' },
  { value: 'Constantly Irregular', label: 'Constantly Irregular' }
];

export const lungSoundOptions = [
  { value: 'Clear', label: 'Clear' },
  { value: 'Wheezing', label: 'Wheezing' },
  { value: 'Crackles', label: 'Crackles' },
  { value: 'Rhonchi', label: 'Rhonchi' },
  { value: 'Diminished', label: 'Diminished' },
  { value: 'Apnea', label: 'Apnea' }
];

export const sexOptions = [
  { value: 'M', label: 'Male' },
  { value: 'F', label: 'Female' }
];

export const respondToCareStatusOptions = [
  { value: 'Resolved', label: 'Resolved' },
  { value: 'Improved', label: 'Improved' },
  { value: 'Same', label: 'Same' },
  { value: 'Worse', label: 'Worse' }
];

export const eightPrinciplesOptions = {
  exteriorInterior: [
    { value: 'Exterior', label: 'Exterior' },
    { value: 'Interior', label: 'Interior' }
  ],
  heatCold: [
    { value: 'Heat', label: 'Heat' },
    { value: 'Cold', label: 'Cold' }
  ],
  excessDeficient: [
    { value: 'Excess', label: 'Excess' },
    { value: 'Deficient', label: 'Deficient' }
  ],
  yangYin: [
    { value: 'Yang', label: 'Yang' },
    { value: 'Yin', label: 'Yin' }
  ]
};
