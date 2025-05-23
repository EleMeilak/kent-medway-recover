
// Helper functions for location-based operations

// Function to validate UK postcodes
export function isValidUKPostcode(postcode: string): boolean {
  // Basic UK postcode validation regex
  const regex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
  return regex.test(postcode);
}

// Function to normalize postcodes (remove spaces, uppercase)
export function normalizePostcode(postcode: string): string {
  return postcode.replace(/\s+/g, '').toUpperCase();
}

// Function to check if a postcode is in Kent & Medway region
export function isInKentMedway(postcode: string): boolean {
  // Kent & Medway postcodes generally start with:
  // CT (Canterbury), ME (Medway), TN (Tunbridge Wells), DA (Dartford)
  const kentMedwayPrefixes = ['CT', 'ME', 'TN', 'DA'];
  const normalizedPostcode = normalizePostcode(postcode);
  
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
