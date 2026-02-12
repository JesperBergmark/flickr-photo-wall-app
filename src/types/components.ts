import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { FlickrPhoto } from './flickr';

// Atoms
export interface ButtonAtomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export interface InputAtomProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface HeaderAtomProps {
  title: string;
  children: ReactNode;
}

// Molecules
export interface PhotoCardMoleculeProps {
  photo: FlickrPhoto;
  index: number;
}

export interface SearchBarMoleculeProps {
  onSearch: (tags: string) => void;
  defaultValue?: string;
}

// Organisms
export interface HeaderOrganismProps {
  onSearch: (tags: string) => void;
}

export interface PhotoGridOrganismProps {
  searchTags: string;
}

// Templates
export interface MainLayoutTemplateProps {
  children: ReactNode;
}
