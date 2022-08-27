import styled from "styled-components";
import RightHeaderDiv from "./header/RightHeaderDiv";
import SearchSection from "./header/SearchSection";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>fakebnb</div>
      <SearchSection />
      <RightHeaderDiv />
    </StyledHeader>
  );
};

export default Header;
