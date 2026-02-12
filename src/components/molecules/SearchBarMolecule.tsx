import { useState, FormEvent } from 'react';
import { InputAtom } from '@/components/atoms/InputAtom';
import { ButtonAtom } from '@/components/atoms/ButtonAtom';

interface SearchBarMoleculeProps {
  onSearch: (tags: string) => void;
  defaultValue?: string;
}

export const SearchBarMolecule = ({ onSearch, defaultValue = 'nature' }: SearchBarMoleculeProps) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full max-w-2xl">
      <InputAtom
        type="text"
        placeholder="Sök taggar (t.ex. nature, sunset)..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1"
      />
      <ButtonAtom type="submit" className="w-full sm:w-auto">
        Sök
      </ButtonAtom>
    </form>
  );
};
