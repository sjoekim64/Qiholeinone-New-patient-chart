import React, { useState } from 'react';
import type { PatientData } from '../types';



interface PrintableViewProps {
  data: PatientData;
  onEdit: () => void;
  onGoToList: () => void;
}




export const PrintableView: React.FC<PrintableViewProps> = ({ data, onEdit, onGoToList }) => {
  const [soapNote, setSoapNote] = useState<string | null>(null);
  const [isGeneratingSoap, setIsGeneratingSoap] = useState(false);
  const isFollowUp = data.chartType === 'follow-up';

  const handlePrint = () => {
    window.print();
  };

  const generateSoapNote = async () => {
    setIsGeneratingSoap(true);
    setSoapNote('Generating, please wait...');





    try {
        // Note: In a real app, you'd need to handle API keys properly
        // For now, we'll just set a placeholder message
        setSoapNote("SOAP note generation requires proper API key configuration. Please set up your Google GenAI API key.");
    } catch (error) {
        console.error("Error generating SOAP note:", error);
        setSoapNote("Failed to generate SOAP note. Please check the console for details.");
    } finally {
        setIsGeneratingSoap(false);
    }
  };

  const renderRespondToCare = () => {
    if (!data.respondToCare) return 'N/A';
    return `Status: ${data.respondToCare.status}, Improved Days: ${data.respondToCare.improvedDays}, Notes: ${data.respondToCare.notes || 'N/A'}`;
  };






  const allComplaints = [
      ...data.chiefComplaint.selectedComplaints,
      data.chiefComplaint.otherComplaint,
  ].filter(Boolean).join(', ');

  const locationDisplay = [...data.chiefComplaint.locationDetails, data.chiefComplaint.location].filter(Boolean).join(', ');
  const onsetDisplay = data.chiefComplaint.onsetValue ? `${data.chiefComplaint.onsetValue} ${data.chiefComplaint.onsetUnit}` : '';
  const severityDisplay = [
      data.chiefComplaint.severityScore ? `P/L= ${data.chiefComplaint.severityScore} / 10` : '',
      data.chiefComplaint.severityDescription
  ].filter(Boolean).join(', ');
  
  const getFormulaName = (treatment: string) => {
      if (!treatment) return <span className="text-gray-400">N/A</span>;
      // Handle "Formula: [Name]" and just "[Name]" from AI or user input
      return treatment.replace(/^Formula:\s*/i, '').split('\n')[0].trim();
  };
  
  const renderCombinedOtherTreatments = () => {
    const { selectedTreatment, otherTreatmentText } = data.diagnosisAndTreatment;
    
    if (!selectedTreatment || selectedTreatment === 'None') {
        return 'None';
    }

    if (selectedTreatment === 'Other' || selectedTreatment === 'Auricular Acupuncture') {
        const label = selectedTreatment === 'Auricular Acupuncture' ? 'Auricular Acupuncture / Ear Seeds' : selectedTreatment;
        return otherTreatmentText ? `${label}: ${otherTreatmentText}` : label;
    }
    
    return selectedTreatment;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Print Controls */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6 print:hidden">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handlePrint}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Print Chart
            </button>
            <button
              onClick={onEdit}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Edit Chart
            </button>
            <button
              onClick={onGoToList}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Back to List
            </button>
            <button
              onClick={generateSoapNote}
              disabled={isGeneratingSoap}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {isGeneratingSoap ? 'Generating...' : 'Generate SOAP Note'}
            </button>
          </div>
        </div>

        {/* SOAP Note Section */}
        {soapNote && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 print:hidden">
            <h3 className="text-xl font-semibold mb-4">Generated SOAP Note</h3>
            <div className="bg-gray-50 p-4 rounded border whitespace-pre-wrap font-mono text-sm">
              {soapNote}
            </div>
          </div>
        )}

        {/* Print Area */}
        <div id="print-area" className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Chart content would go here - this is a simplified version */}
          <div className="p-8">
            <h1 className="text-2xl font-bold text-center mb-6">Patient Chart</h1>
            <p className="text-center text-gray-600 mb-8">
              {data.clinicName} | {data.diagnosisAndTreatment.therapistName} | {data.diagnosisAndTreatment.therapistLicNo}
            </p>
            
            {/* Basic patient info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div><strong>Name:</strong> {data.name}</div>
              <div><strong>File No:</strong> {data.fileNo}</div>
              <div><strong>Date:</strong> {data.date}</div>
              <div><strong>Chart Type:</strong> {data.chartType === 'new' ? 'New Patient' : 'Follow-up'}</div>
            </div>

            {/* Chief Complaint */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Chief Complaint</h2>
              <p><strong>Complaints:</strong> {allComplaints || 'N/A'}</p>
              <p><strong>Location:</strong> {locationDisplay || 'N/A'}</p>
              <p><strong>Onset:</strong> {onsetDisplay || 'N/A'}</p>
              <p><strong>Severity:</strong> {severityDisplay || 'N/A'}</p>
            </div>

            {/* TCM Diagnosis */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">TCM Diagnosis</h2>
              <p><strong>Diagnosis:</strong> {data.diagnosisAndTreatment.tcmDiagnosis || 'N/A'}</p>
              <p><strong>Treatment Principle:</strong> {data.diagnosisAndTreatment.treatmentPrinciple || 'N/A'}</p>
              <p><strong>Acupuncture Points:</strong> {data.diagnosisAndTreatment.acupuncturePoints || 'N/A'}</p>
              <p><strong>Herbal Formula:</strong> {getFormulaName(data.diagnosisAndTreatment.herbalTreatment)}</p>
              <p><strong>Other Treatments:</strong> {renderCombinedOtherTreatments()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};