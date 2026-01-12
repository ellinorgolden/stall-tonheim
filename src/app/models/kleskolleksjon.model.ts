export interface KlesProdukt {
  tittel: string;
  farge: string;
  str: string[];
  beskrivelse: string;
  materiale: string;
  modell: ModellType[];
  prisBarn?: number;
  prisVoksen?: number;
  bilde: string;
}

export enum ModellType {
  Herre = 'herre',
  Dame = 'dame'
}