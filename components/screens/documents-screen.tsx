import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../constants/styles';
import { ProgressBar } from '../ui/progress-bar';
import { UploadModal } from '../upload-modal';

type DocumentType = 'applicantId' | 'directorsId' | 'companyReg' | '';

/**
 * DocumentsScreen Component
 * 
 * Manages the document upload process during onboarding.
 * Allows users to upload required documents including:
 * - Applicant ID document
 * - Directors ID documents
 * - Company registration documents
 * 
 * Displays upload options through a modal interface.
 * 
 * @returns {JSX.Element} The rendered documents upload screen
 */
export const DocumentsScreen = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<DocumentType>('');

  const handleUploadPress = (docType: DocumentType) => {
    setSelectedDocument(docType);
    setModalVisible(true);
  };

  const handleUploadComplete = (option: string) => {
    setModalVisible(false);
    // Handle upload logic here
  };

  /**
   * Gets a human-readable title for the document type
   * @param {DocumentType} docType - The document type identifier
   * @returns {string} The formatted document title
   */
  const getDocumentTitle = (docType: DocumentType) => {
    switch (docType) {
      case 'applicantId':
        return 'applicant ID';
      case 'directorsId':
        return 'directors ID';
      case 'companyReg':
        return 'company registration';
      default:
        return '';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={[styles.header, styles.headerJustifyEnd]}>
        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <X size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <ProgressBar steps={1} currentStep={1} />
      </View>


      <ScrollView style={styles.content}>
        <Text style={styles.title}>Upload supporting documents</Text>
        <Text style={styles.subtitle}>
          Submit the required documents by uploading files or capturing photos to complete your application and verify your information.
        </Text>

        <View style={styles.documentsContainer}>
          <View style={styles.documentCard}>
            <Text style={styles.documentTitle}>Applicant ID document</Text>
            <Text style={styles.documentDescription}>
              Upload a certified version of your ID document.
            </Text>
            <TouchableOpacity 
              style={styles.uploadArea}
              onPress={() => handleUploadPress('applicantId')}
            >
              <Text style={styles.uploadText}>+ Tap here to upload</Text>
            </TouchableOpacity>
            <Text style={styles.supportedFormats}>
              Supported: JPG, PDF, PNG. Maximum file size: 10MB
            </Text>
          </View>

          <View style={styles.documentCard}>
            <Text style={styles.documentTitle}>Directors ID documents</Text>
            <Text style={styles.documentDescription}>
              Upload all directors ID documents.
            </Text>
            <TouchableOpacity 
              style={styles.uploadArea}
              onPress={() => handleUploadPress('directorsId')}
            >
              <Text style={styles.uploadText}>+ Tap here to upload</Text>
            </TouchableOpacity>
            <Text style={styles.supportedFormats}>
              Supported: JPG, PDF, PNG. Maximum file size: 10MB
            </Text>
          </View>

          <View style={styles.documentCard}>
            <Text style={styles.documentTitle}>Company registration documents</Text>
            <Text style={styles.documentDescription}>
              COR 14.3, COR 15.3 or CM1, CM2 or CM9 from CIPC.
            </Text>
            <TouchableOpacity 
              style={styles.uploadArea}
              onPress={() => handleUploadPress('companyReg')}
            >
              <Text style={styles.uploadText}>+ Tap here to upload</Text>
            </TouchableOpacity>
            <Text style={styles.supportedFormats}>
              Supported: JPG, PDF, PNG. Maximum file size: 10MB
            </Text>
          </View>
        </View>
      </ScrollView>

      <UploadModal
        visible={modalVisible}
        documentType={getDocumentTitle(selectedDocument)}
        onClose={() => setModalVisible(false)}
        onUploadComplete={handleUploadComplete}
      />
    </SafeAreaView>
  );
};
