// Database type definitions
// This file will be updated by the Supabase migration workflow

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      // Tables will be auto-generated here
    }
    Views: {
      // Views will be auto-generated here
    }
    Functions: {
      // Functions will be auto-generated here
    }
    Enums: {
      // Enums will be auto-generated here
    }
    CompositeTypes: {
      // Composite types will be auto-generated here
    }
  }
}
