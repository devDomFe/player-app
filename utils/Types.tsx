// Interface for the image data
export interface PlayerImage {
  added: string;
  baseId: string;
  baseType: string;
  fileType: string;
  imageId: string;
  imageType: string;
  maximumHeight: number;
  maximumWidth: number;
  organization: {
    id: string;
    resourceType: string;
  };
  organizationId: string;
  secondaryType: string | null;
  updated: string;
  url: string;
}

// Interface for the player
export interface Player {
  added: string;
  deceased: string | null;
  dob: string;
  externalId: string;
  gender: string;
  historicalNames: string | null;
  images: PlayerImage[];
  languageLocal: string | null;
  nameAbbreviated: string | null;
  nameFamilyLatin: string | null;
  nameFamilyLocal: string;
  nameFullLatin: string | null;
  nameFullLocal: string;
  nameGivenLatin: string | null;
  nameGivenLocal: string;
  nationality: string;
  organization: {
    id: string;
    resourceType: string;
  };
  organizationId: string;
  personId: string;
  status: string;
  updated: string;
}

// Interface for the API response
export interface PlayerResponse {
  data: Player[];
}
