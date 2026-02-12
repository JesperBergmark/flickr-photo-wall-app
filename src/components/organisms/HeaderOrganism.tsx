import { SearchBarMolecule } from '@/components/molecules/SearchBarMolecule';
import { HeaderAtom } from '@/components/atoms/HeaderAtom';

interface HeaderOrganismProps {
  onSearch: (tags: string) => void;
}

export const HeaderOrganism = ({ onSearch }: HeaderOrganismProps) => {
  return (
    <HeaderAtom title="Fotovägg">
      <SearchBarMolecule onSearch={onSearch} />
    </HeaderAtom>
  );
};
