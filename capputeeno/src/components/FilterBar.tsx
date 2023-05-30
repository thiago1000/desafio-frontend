'use client';

import FilterByType from './FilterByType';
import FilterPriority from './FilterPriority';

import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterPriority />
    </FilterContainer>
  );
}
