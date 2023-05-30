import { Saira_Stencil_One } from 'next/font/google';

import CartControl from './CartControl';
import { useFilter } from './hooks/useFilter';
import { PrimaryInputWSearchIcon } from './PrimaryInput';

import styled from 'styled-components';

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
});

const Tagheader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;

const Header = () => {
  const { setSearch, search } = useFilter();
  return (
    <Tagheader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <PrimaryInputWSearchIcon
        value={search}
        handleChange={setSearch}
        placeholder="Procurando por algo especifico?"
      />
      <CartControl />
    </Tagheader>
  );
};

export default Header;
