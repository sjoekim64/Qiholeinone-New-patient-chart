import React, { useState, useEffect } from 'react';
import { PatientForm } from './components/PatientForm';
import { PrintableView } from './components/PrintableView';
import { PatientList } from './components/PatientList';
import type { PatientData } from './types';
import { usePatientData } from './hooks/usePatientData';

const App: React.FC = () => {
  const [currentPatient, setCurrentPatient] = useState<PatientData | null>(null);
  const [view, setView] = useState<'list' | 'form' | 'print'>('list');
  const [formMode, setFormMode] = useState<'new' | 'edit'>('new');
  
  const { 
    patients, 
    getNewPatientState, 
    addPatient, 
    deletePatient, 
    updateClinicInfoFromPatient,
    initializeWithSampleData 
  } = usePatientData();

  useEffect(() => {
    initializeWithSampleData();
  }, [initializeWithSampleData]);

  const handleFormSubmit = (data: PatientData) => {
    // Save clinic and therapist info
    updateClinicInfoFromPatient(data);
    
    // Save/update patient record
    addPatient(data);
    
    setCurrentPatient(data);
    setView('print');
  };

  const handleNewPatient = () => {
    setCurrentPatient(getNewPatientState('new'));
    setFormMode('new');
    setView('form');
  }
  
  const handleNewFollowUpChart = () => {
    setCurrentPatient(getNewPatientState('follow-up'));
    setFormMode('new');
    setView('form');
  };

  const handleSelectPatient = (patient: PatientData) => {
    setCurrentPatient(patient);
    setFormMode('edit');
    setView('form');
  }

  const handleDeletePatient = (fileNo: string) => {
    if (window.confirm(`Are you sure you want to delete patient record ${fileNo}? This action cannot be undone.`)) {
      deletePatient(fileNo);
    }
  }
  
  const handleGoToList = () => {
    setCurrentPatient(null);
    setView('list');
  };

  const handleEdit = () => {
    setView('form');
  };

  const renderView = () => {
    switch (view) {
      case 'form':
        return <PatientForm 
                  initialData={currentPatient!} 
                  onSubmit={handleFormSubmit}
                  onBack={handleGoToList}
                  mode={formMode}
               />;
      case 'print':
        return <PrintableView data={currentPatient!} onEdit={handleEdit} onGoToList={handleGoToList} />;
      case 'list':
      default:
        return <PatientList 
                    patients={patients} 
                    onSelectPatient={handleSelectPatient} 
                    onNewPatient={handleNewPatient} 
                    onDeletePatient={handleDeletePatient} 
                    onStartFollowUp={handleNewFollowUpChart} 
                />;
    }
  };

  return (
    <div className="min-h-screen container mx-auto p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800">Patient Chart System</h1>
        <p className="text-slate-600 mt-2">A modern solution for digital patient records.</p>
      </header>
      
      <main>
        {renderView()}
      </main>
    </div>
  );
};

export default App;