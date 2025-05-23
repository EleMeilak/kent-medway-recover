
// Helper functions for location-based operations

// List of valid Kent & Medway areas
const KENT_MEDWAY_AREAS = [
  'canterbury', 'medway', 'maidstone', 'dover', 'folkestone', 'ashford',
  'tonbridge', 'tunbridge wells', 'sevenoaks', 'dartford', 'gravesend',
  'faversham', 'whitstable', 'herne bay', 'margate', 'ramsgate', 'broadstairs',
  'deal', 'sandwich', 'hythe', 'new romney', 'lydd', 'tenterden', 'cranbrook',
  'edenbridge', 'westerham', 'swanley', 'chatham', 'gillingham', 'rochester',
  'strood', 'rainham', 'sittingbourne', 'sheerness', 'isle of sheppey',
  'kent', 'medway'
];

// Function to validate UK postcodes
export function isValidUKPostcode(postcode: string): boolean {
  // Basic UK postcode validation regex
  const regex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
  return regex.test(postcode);
}

// Function to validate UK postcodes or Kent & Medway area names
export function isValidUKPostcodeOrArea(input: string): boolean {
  // First check if it's a valid postcode
  if (isValidUKPostcode(input)) {
    return true;
  }
  
  // Then check if it's a valid Kent & Medway area
  const normalizedInput = input.toLowerCase().trim();
  return KENT_MEDWAY_AREAS.includes(normalizedInput);
}

// Function to normalize postcodes (remove spaces, uppercase)
export function normalizePostcode(postcode: string): string {
  return postcode.replace(/\s+/g, '').toUpperCase();
}

// Function to check if a postcode or area is in Kent & Medway region
export function isInKentMedway(input: string): boolean {
  // First check if it's an area name
  const normalizedInput = input.toLowerCase().trim();
  if (KENT_MEDWAY_AREAS.includes(normalizedInput)) {
    return true;
  }
  
  // Then check if it's a postcode in Kent & Medway
  // Kent & Medway postcodes generally start with:
  // CT (Canterbury), ME (Medway), TN (Tunbridge Wells), DA (Dartford)
  const kentMedwayPrefixes = ['CT', 'ME', 'TN', 'DA'];
  const normalizedPostcode = normalizePostcode(input);
  
  // Check if the postcode starts with any of the Kent & Medway prefixes
  return kentMedwayPrefixes.some(prefix => 
    normalizedPostcode.startsWith(prefix)
  );
}

// Function to format a postcode with the standard space
export function formatPostcode(postcode: string): string {
  const normalized = normalizePostcode(postcode);
  const len = normalized.length;
  
  // Insert a space before the last 3 characters
  return len > 3 
    ? `${normalized.slice(0, len - 3)} ${normalized.slice(len - 3)}` 
    : normalized;
}
