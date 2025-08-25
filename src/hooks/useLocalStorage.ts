import { useState, useEffect } from 'react';
import { PatientData } from '../types';

const CLINIC_INFO_KEY = 'clinicTherapistInfo';
const PATIENT_RECORDS_KEY = 'patientRecords';

interface StoredInfo {
  clinicName: string;
  clinicLogo: string;
  therapistName: string;
  therapistLicNo: string;
}

export const useLocalStorage = () => {
  const [patients, setPatients] = useState<PatientData[]>([]);
  const [clinicInfo, setClinicInfo] = useState<StoredInfo>({
    clinicName: '',
    clinicLogo: '',
    therapistName: '',
    therapistLicNo: ''
  });

  // Load clinic info from localStorage
  const getClinicInfo = (): StoredInfo => {
    try {
      const storedData = localStorage.getItem(CLINIC_INFO_KEY);
      return storedData ? JSON.parse(storedData) : { clinicName: '', clinicLogo: '', therapistName: '', therapistLicNo: '' };
    } catch (error) {
      console.error("Failed to load clinic info from localStorage:", error);
      return { clinicName: '', clinicLogo: '', therapistName: '', therapistLicNo: '' };
    }
  };

  // Save clinic info to localStorage
  const saveClinicInfo = (info: StoredInfo) => {
    try {
      localStorage.setItem(CLINIC_INFO_KEY, JSON.stringify(info));
      setClinicInfo(info);
    } catch (error) {
      console.error("Failed to save clinic info to localStorage:", error);
    }
  };

  // Load patients from localStorage
  const loadPatients = (): PatientData[] => {
    try {
      const storedPatients = localStorage.getItem(PATIENT_RECORDS_KEY);
      return storedPatients ? JSON.parse(storedPatients) : [];
    } catch (error) {
      console.error("Failed to load patient records from localStorage:", error);
      return [];
    }
  };

  // Save patients to localStorage
  const savePatients = (updatedPatients: PatientData[]) => {
    try {
      localStorage.setItem(PATIENT_RECORDS_KEY, JSON.stringify(updatedPatients));
      setPatients(updatedPatients);
    } catch (error) {
      console.error("Failed to save patient records to localStorage:", error);
    }
  };

  // Initialize data on mount
  useEffect(() => {
    const storedClinicInfo = getClinicInfo();
    setClinicInfo(storedClinicInfo);
    
    const storedPatients = loadPatients();
    setPatients(storedPatients);
  }, []);

  return {
    patients,
    clinicInfo,
    savePatients,
    saveClinicInfo,
    getClinicInfo,
    loadPatients
  };
};
