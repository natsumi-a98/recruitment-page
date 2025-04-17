import styled from "styled-components";
import { ReactNode, forwardRef } from "react";
import media from "../../styles/mediaQuery";

interface SectionLayoutProps {
  children: ReactNode;
  as?: React.ElementType;
  id?: string;
}

const SectionContainer = styled.section<SectionLayoutProps>`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;

  ${media.mobile`
    padding-top: 100px;
  `}
`;

const SectionLayout = forwardRef<HTMLElement, SectionLayoutProps>(
  ({ children, as = "section", id }, ref) => {
    return (
      <SectionContainer as={as} ref={ref} id={id}>
        {children}
      </SectionContainer>
    );
  }
);

export default SectionLayout;
