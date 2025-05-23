
// Symptom definition types
export interface Symptom {
  id: string;
  name: string;
  description: string;
  severity?: 'mild' | 'moderate' | 'severe';
  duration?: string;
}

export interface SymptomGroup {
  id: string;
  name: string;
  symptoms: Symptom[];
}

export interface ServiceLocation {
  id: string;
  name: string;
  address: string;
  postcode: string;
  phone: string;
  email?: string;
  website?: string;
  description?: string;
  serviceName?: string;
  serviceType?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface RecommendationResource {
  id: string;
  title: string;
  description: string;
  url?: string;
  resourceType: 'document' | 'website' | 'contact' | 'service';
  tags?: string[];
}

export interface PatientAssessment {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clinicianId: string;
  symptoms: Symptom[];
  postcode: string;
  notes?: string;
  recommendations?: RecommendationResource[];
  localServices?: ServiceLocation[];
}
