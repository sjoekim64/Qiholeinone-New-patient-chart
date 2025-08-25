import { GoogleGenerativeAI } from '@google/genai';

// API 키 가져오기
const getApiKey = (): string => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error('Google GenAI API key is not configured. Please set VITE_GOOGLE_API_KEY in your .env file.');
  }
  return apiKey;
};

// Google GenAI 클라이언트 초기화
export const initializeGenAI = () => {
  try {
    const apiKey = getApiKey();
    return new GoogleGenerativeAI(apiKey);
  } catch (error) {
    console.error('Failed to initialize Google GenAI:', error);
    return null;
  }
};

// AI 진단 생성
export const generateDiagnosis = async (patientSummary: string): Promise<string> => {
  const genAI = initializeGenAI();
  if (!genAI) {
    throw new Error('Google GenAI is not properly configured.');
  }

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  
  const prompt = `You are a Traditional Chinese Medicine (TCM) practitioner. Based on the following patient information, provide a TCM diagnosis and treatment plan.

Patient Information:
${patientSummary}

Please provide:
1. TCM Diagnosis (Syndrome/Differentiation)
2. Treatment Principle
3. Acupuncture Points (with brief explanation)
4. Herbal Formula (if applicable)
5. Other Treatment Recommendations

Format your response in a clear, professional manner.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating diagnosis:', error);
    throw new Error('Failed to generate AI diagnosis. Please try again.');
  }
};

// SOAP 노트 생성
export const generateSoapNote = async (patientData: any): Promise<string> => {
  const genAI = initializeGenAI();
  if (!genAI) {
    throw new Error('Google GenAI is not properly configured.');
  }

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  
  const prompt = `Create a SOAP note for the following patient:

Patient Data:
${JSON.stringify(patientData, null, 2)}

Please create a comprehensive SOAP note with:
- Subjective: Patient's chief complaint and history
- Objective: Findings from examination
- Assessment: TCM diagnosis and differential
- Plan: Treatment plan and recommendations

Format as a professional medical note.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating SOAP note:', error);
    throw new Error('Failed to generate SOAP note. Please try again.');
  }
};

// HPI (History of Present Illness) 생성
export const generateHPI = async (chiefComplaintData: any, patientInfo: any): Promise<string> => {
  const genAI = initializeGenAI();
  if (!genAI) {
    throw new Error('Google GenAI is not properly configured.');
  }

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  
  const prompt = `Create a History of Present Illness (HPI) narrative for the following patient:

Patient Info: ${JSON.stringify(patientInfo, null, 2)}
Chief Complaint: ${JSON.stringify(chiefComplaintData, null, 2)}

Please write a coherent, professional HPI paragraph that includes:
- Patient demographics
- Chief complaint details
- Onset, duration, and course
- Aggravating and alleviating factors
- Associated symptoms
- Relevant context

Write in a clinical, professional tone suitable for medical documentation.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating HPI:', error);
    throw new Error('Failed to generate HPI. Please try again.');
  }
};
