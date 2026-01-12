import { Camera, ChevronRight, Image as ImageIcon, Upload, X } from 'lucide-react-native';
import React from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/theme';

type UploadModalProps = {
  visible: boolean;
  documentType: string;
  onClose: () => void;
  onUploadComplete: (option: string) => void;
};

/**
 * UploadModal Component
 * 
 * A modal dialog that presents upload options for document submission.
 * Provides three methods for document upload:
 * - Take a photo with camera
 * - Choose from gallery
 * - Upload a file
 * 
 * @param {boolean} visible - Controls modal visibility
 * @param {string} documentType - The type of document being uploaded (for display)
 * @param {() => void} onClose - Function called when modal is closed
 * @param {(option: string) => void} onUploadComplete - Function called when an upload option is selected
 * @returns {JSX.Element} The rendered modal
 */
export const UploadModal = ({ 
  visible, 
  documentType, 
  onClose, 
  onUploadComplete 
}: UploadModalProps) => {
  const handleOption = (option: string) => {
    Alert.alert('Upload', `Selected: ${option} for ${documentType}`);
    onUploadComplete(option);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Add {documentType}</Text>
            <TouchableOpacity onPress={onClose}>
              <X size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.optionsContainer}>
            <TouchableOpacity 
              style={styles.optionCard}
              onPress={() => handleOption('Take a photo')}
            >
              <View style={styles.optionIcon}>
                <Camera size={24} color="#10B981" />
              </View>
              <Text style={styles.optionText}>Take a photo</Text>
              <ChevronRight size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.optionCard}
              onPress={() => handleOption('Choose from gallery')}
            >
              <View style={styles.optionIcon}>
                <ImageIcon size={24} color="#10B981" />
              </View>
              <Text style={styles.optionText}>Choose a photo from gallery</Text>
              <ChevronRight size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.optionCard}
              onPress={() => handleOption('Upload a file')}
            >
              <View style={styles.optionIcon}>
                <Upload size={24} color="#10B981" />
              </View>
              <Text style={styles.optionText}>Upload a file</Text>
              <ChevronRight size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  optionsContainer: {
    gap: 16,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
  },
});
