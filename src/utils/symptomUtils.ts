
import { Symptom, SymptomGroup } from "@/types";

// Sample symptom groups based on Post-COVID symptoms categories
export const symptomGroups: SymptomGroup[] = [
  {
    id: "respiratory",
    name: "Respiratory Symptoms",
    symptoms: [
      {
        id: "breathlessness",
        name: "Breathlessness",
        description: "Shortness of breath or difficulty breathing",
      },
      {
        id: "cough",
        name: "Persistent Cough",
        description: "Cough lasting more than 8 weeks after infection",
      },
      {
        id: "chest-pain",
        name: "Chest Pain",
        description: "Pain or discomfort in the chest",
      },
      {
        id: "oxygen",
        name: "Oxygen Issues",
        description: "Low blood oxygen levels or need for supplemental oxygen",
      },
    ],
  },
  {
    id: "fatigue",
    name: "Fatigue & Physical",
    symptoms: [
      {
        id: "fatigue",
        name: "Fatigue",
        description: "Extreme tiredness not relieved by rest",
      },
      {
        id: "post-exertional-malaise",
        name: "Post-Exertional Malaise",
        description:
          "Worsening of symptoms after physical or mental activities",
      },
      {
        id: "muscle-pain",
        name: "Muscle Pain",
        description: "Aches or pains in muscles",
      },
      {
        id: "joint-pain",
        name: "Joint Pain",
        description: "Pain in one or more joints",
      },
    ],
  },
  {
    id: "cognitive",
    name: "Cognitive & Neurological",
    symptoms: [
      {
        id: "brain-fog",
        name: "Brain Fog",
        description:
          "Problems with thinking clearly, concentrating or memory issues",
      },
      {
        id: "headache",
        name: "Headache",
        description: "Ongoing headaches since COVID infection",
      },
      {
        id: "sleep-disturbance",
        name: "Sleep Disturbance",
        description: "Difficulty falling or staying asleep",
      },
      {
        id: "pins-needles",
        name: "Pins and Needles",
        description: "Numbness or tingling in extremities",
      },
      {
        id: "dizziness",
        name: "Dizziness",
        description: "Light-headedness or feeling faint",
      },
    ],
  },
  {
    id: "psychological",
    name: "Psychological & Emotional",
    symptoms: [
      {
        id: "anxiety",
        name: "Anxiety",
        description: "Persistent feelings of anxiety or worry",
      },
      {
        id: "depression",
        name: "Depression",
        description: "Low mood or feelings of hopelessness",
      },
      {
        id: "ptsd",
        name: "PTSD",
        description:
          "Post-traumatic stress symptoms related to COVID experience",
      },
    ],
  },
  {
    id: "cardiovascular",
    name: "Cardiovascular Symptoms",
    symptoms: [
      {
        id: "palpitations",
        name: "Palpitations",
        description: "Noticeable heartbeats or racing heart",
      },
      {
        id: "postural-symptoms",
        name: "Postural Symptoms",
        description:
          "Dizziness or heart rate changes when standing (e.g., POTS)",
      },
    ],
  },
  {
    id: "gastrointestinal",
    name: "Gastrointestinal Symptoms",
    symptoms: [
      {
        id: "abdominal-pain",
        name: "Abdominal Pain",
        description: "Pain in the stomach or abdomen",
      },
      {
        id: "nausea",
        name: "Nausea",
        description: "Feeling of sickness or urge to vomit",
      },
      {
        id: "diarrhea",
        name: "Diarrhea",
        description: "Loose, watery stools",
      },
      {
        id: "appetite-changes",
        name: "Appetite Changes",
        description: "Changes in appetite or weight",
      },
    ],
  },
  {
    id: "ear-nose-throat",
    name: "ENT & Other Symptoms",
    symptoms: [
      {
        id: "loss-smell-taste",
        name: "Loss of Smell/Taste",
        description: "Reduced or altered sense of smell or taste",
      },
      {
        id: "tinnitus",
        name: "Tinnitus",
        description: "Ringing or buzzing in ears",
      },
      {
        id: "sore-throat",
        name: "Sore Throat",
        description: "Persistent sore throat",
      },
      {
        id: "skin-rashes",
        name: "Skin Rashes",
        description: "Skin rashes or changes",
      },
    ],
  },
];

// Function to get recommendations based on symptoms
export function getRecommendations(selectedSymptoms: string[]) {
  // This is a simplified recommendation engine
  // In a real app, this would be much more sophisticated with proper clinical logic
  
  const recommendations = [];
  
  // Respiratory recommendations
  if (selectedSymptoms.includes('breathlessness') || 
      selectedSymptoms.includes('cough') || 
      selectedSymptoms.includes('chest-pain')) {
    recommendations.push({
      id: '1',
      title: 'Respiratory Assessment',
      description: 'Recommend chest X-ray, spirometry, and oxygen saturation monitoring.',
      resourceType: 'document',
      tags: ['respiratory', 'clinical']
    });
    recommendations.push({
      id: '2',
      title: 'Breathlessness Management',
      description: 'Breathing exercises and techniques to manage breathlessness.',
      url: 'https://www.blf.org.uk/support-for-you/breathlessness/how-to-manage-breathlessness',
      resourceType: 'website',
      tags: ['respiratory', 'self-management']
    });
  }
  
  // Fatigue recommendations
  if (selectedSymptoms.includes('fatigue') || 
      selectedSymptoms.includes('post-exertional-malaise')) {
    recommendations.push({
      id: '3',
      title: 'Activity Pacing',
      description: 'Techniques to manage energy and avoid post-exertional malaise.',
      resourceType: 'document',
      tags: ['fatigue', 'self-management']
    });
    recommendations.push({
      id: '4',
      title: 'Kent & Medway Long COVID Rehabilitation Program',
      description: 'Specialized rehabilitation program for post-COVID fatigue.',
      resourceType: 'service',
      tags: ['fatigue', 'rehabilitation']
    });
  }
  
  // Cognitive recommendations
  if (selectedSymptoms.includes('brain-fog') || 
      selectedSymptoms.includes('headache') || 
      selectedSymptoms.includes('sleep-disturbance')) {
    recommendations.push({
      id: '5',
      title: 'Cognitive Assessment',
      description: 'Detailed cognitive assessment and management strategies.',
      resourceType: 'document',
      tags: ['cognitive', 'clinical']
    });
    recommendations.push({
      id: '6',
      title: 'Sleep Hygiene Guide',
      description: 'Techniques to improve sleep quality and duration.',
      url: 'https://www.nhs.uk/live-well/sleep-and-tiredness/how-to-get-to-sleep/',
      resourceType: 'website',
      tags: ['sleep', 'self-management']
    });
  }
  
  // Psychological recommendations
  if (selectedSymptoms.includes('anxiety') || 
      selectedSymptoms.includes('depression') || 
      selectedSymptoms.includes('ptsd')) {
    recommendations.push({
      id: '7',
      title: 'Mental Health Assessment',
      description: 'Psychological assessment and support options.',
      resourceType: 'document',
      tags: ['mental-health', 'clinical']
    });
    recommendations.push({
      id: '8',
      title: 'Kent & Medway Mental Health Services',
      description: 'Local mental health support services.',
      resourceType: 'service',
      tags: ['mental-health', 'support']
    });
    recommendations.push({
      id: '9',
      title: 'Online CBT Resources',
      description: 'Self-guided cognitive behavioral therapy resources.',
      url: 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/mental-wellbeing-audio-guides/',
      resourceType: 'website',
      tags: ['mental-health', 'self-management']
    });
  }

  // General recommendations for all post-COVID patients
  recommendations.push({
    id: '10',
    title: 'NICE Guidelines for Post-COVID Syndrome',
    description: 'National guidelines for managing post-COVID syndrome.',
    url: 'https://www.nice.org.uk/guidance/ng188',
    resourceType: 'website',
    tags: ['guidelines', 'clinical']
  });
  
  return recommendations;
}
