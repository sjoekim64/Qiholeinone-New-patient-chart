import { PatientData } from '../types';
import { complaintLocationMap } from '../constants/formOptions';

export const getActiveLocationSuggestions = (selectedComplaints: string[]): string[] => {
  const suggestions = new Set<string>();
  selectedComplaints.forEach(complaint => {
    if (complaintLocationMap[complaint]) {
      complaintLocationMap[complaint].forEach(sugg => suggestions.add(sugg));
    }
  });
  return Array.from(suggestions);
};

export const getFollowUpOptions = (baseOptions: Array<{ value: string; label: string }>) => {
  return [{ value: 'Same as before', label: 'Same as before' }, ...baseOptions];
};

export const getBaseCptCodes = (isFollowUp: boolean): string[] => {
  return isFollowUp ? ['99212', '97813', '97814'] : ['99202', '97810', '97811', '97026'];
};

export const updateCptCodes = (
  currentCpt: string,
  selectedTreatment: string,
  isFollowUp: boolean
): string => {
  const baseCpt = getBaseCptCodes(isFollowUp);
  const manualCode = '97140';
  
  let newCptSet = new Set(baseCpt);

  if (selectedTreatment !== 'Acupressure' && selectedTreatment !== 'None' && selectedTreatment !== '') {
    newCptSet.add(manualCode);
  }
  
  const existingCpt = currentCpt.split(',').map(c => c.trim()).filter(Boolean);
  existingCpt.forEach(code => {
    if (!baseCpt.includes(code) && code !== manualCode) {
      newCptSet.add(code);
    }
  });

  return Array.from(newCptSet).join(', ');
};

export const formatDisplayText = (items: string[], otherText?: string): string => {
  const allItems = [...items, otherText].filter(Boolean);
  return allItems.join(', ');
};

export const getFormulaName = (treatment: string): string => {
  if (!treatment) return '';
  // Handle "Formula: [Name]" and just "[Name]" from AI or user input
  return treatment.replace(/^Formula:\s*/i, '').split('\n')[0].trim();
};

export const renderCombinedOtherTreatments = (
  selectedTreatment: string,
  otherTreatmentText: string
): string => {
  if (!selectedTreatment || selectedTreatment === 'None') {
    return 'None';
  }

  if (selectedTreatment === 'Other' || selectedTreatment === 'Auricular Acupuncture') {
    const label = selectedTreatment === 'Auricular Acupuncture' ? 'Auricular Acupuncture / Ear Seeds' : selectedTreatment;
    return otherTreatmentText ? `${label}: ${otherTreatmentText}` : label;
  }
  
  return selectedTreatment;
};
