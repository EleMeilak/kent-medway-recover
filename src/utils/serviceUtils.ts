
import { ServiceLocation } from "@/types";

// Sample service locations for Kent & Medway
export const kentMedwayServices: ServiceLocation[] = [
  {
    id: "1",
    name: "Kent & Medway Long COVID Assessment Centre",
    address: "Medway Maritime Hospital, Windmill Road",
    postcode: "ME7 5NY",
    phone: "01634 123456",
    email: "longcovid.medway@nhs.net",
    website: "https://www.medway.nhs.uk/services/long-covid",
    description: "Specialist post-COVID assessment and treatment service",
    serviceName: "Post-COVID Assessment Service",
    serviceType: "Specialist Centre",
  },
  {
    id: "2",
    name: "Canterbury Respiratory Clinic",
    address: "Kent & Canterbury Hospital, Ethelbert Road",
    postcode: "CT1 3NG",
    phone: "01227 766877",
    website: "https://www.ekhuft.nhs.uk/respiratory",
    description: "Specialized respiratory assessment and rehabilitation",
    serviceName: "Respiratory Services",
    serviceType: "Specialist Clinic",
  },
  {
    id: "3",
    name: "Maidstone Fatigue Management Service",
    address: "Maidstone Hospital, Hermitage Lane",
    postcode: "ME16 9QQ",
    phone: "01622 224100",
    description: "Specialized service for fatigue management and rehabilitation",
    serviceName: "Fatigue Management Service",
    serviceType: "Specialist Clinic",
  },
  {
    id: "4",
    name: "Kent & Medway NHS Mental Health Services",
    address: "Priority House, Hermitage Lane",
    postcode: "ME16 9PH",
    phone: "0300 222 0123",
    website: "https://www.kmpt.nhs.uk",
    description: "Mental health services including support for post-COVID psychological symptoms",
    serviceName: "Mental Health Services",
    serviceType: "Mental Health",
  },
  {
    id: "5",
    name: "Darent Valley Hospital Pulmonary Rehabilitation",
    address: "Darent Valley Hospital, Darenth Wood Road",
    postcode: "DA2 8DA",
    phone: "01322 428100",
    description: "Pulmonary rehabilitation program including post-COVID breathlessness",
    serviceName: "Pulmonary Rehabilitation",
    serviceType: "Rehabilitation",
  },
  {
    id: "6",
    name: "Tunbridge Wells Community Respiratory Team",
    address: "Tunbridge Wells Hospital, Tonbridge Road",
    postcode: "TN2 4QJ",
    phone: "01892 635884",
    description: "Community-based respiratory support including home visits",
    serviceName: "Community Respiratory Team",
    serviceType: "Community Service",
  },
  {
    id: "7",
    name: "East Kent Cognitive Assessment Service",
    address: "William Harvey Hospital, Kennington Road",
    postcode: "TN24 0LZ",
    phone: "01233 633331",
    description: "Cognitive assessment and support for neurological symptoms",
    serviceName: "Cognitive Assessment Service",
    serviceType: "Specialist Clinic",
  },
  {
    id: "8",
    name: "Medway Community Healthcare",
    address: "MCH House, Bailey Drive, Gillingham Business Park",
    postcode: "ME8 0PZ",
    phone: "01634 337500",
    website: "https://www.medwaycommunityhealthcare.nhs.uk",
    description: "Community healthcare services including post-COVID support",
    serviceName: "Community Healthcare",
    serviceType: "Community Service",
  },
];

// Function to find local services based on postcode
export function findLocalServices(postcode: string, symptomIds: string[]): ServiceLocation[] {
  // This is a simplified function that returns services
  // In a real app, this would use postcode proximity and symptom matching logic
  
  // For now, return different services based on symptom categories
  let filteredServices = [...kentMedwayServices];
  
  // Respiratory symptoms
  if (symptomIds.includes('breathlessness') || 
      symptomIds.includes('cough') || 
      symptomIds.includes('chest-pain')) {
    filteredServices = filteredServices.filter(service => 
      service.serviceType === 'Specialist Centre' || 
      service.serviceType === 'Specialist Clinic' ||
      service.serviceName?.includes('Respiratory')
    );
  }
  
  // Mental health symptoms
  if (symptomIds.includes('anxiety') || 
      symptomIds.includes('depression') || 
      symptomIds.includes('ptsd')) {
    filteredServices = filteredServices.filter(service => 
      service.serviceType === 'Mental Health' || 
      service.serviceType === 'Specialist Centre'
    );
  }
  
  // If no specific filtering applied, return the first 3 services
  if (filteredServices.length === kentMedwayServices.length) {
    filteredServices = filteredServices.slice(0, 3);
  }
  
  return filteredServices;
}
