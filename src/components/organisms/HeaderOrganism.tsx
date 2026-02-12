import { SearchBarMolecule } from '../molecules';
import { HeaderAtom } from '../atoms';

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
