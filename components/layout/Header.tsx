import Image from "next/image";
import styled from "styled-components";
import RightHeaderDiv from "./header/RightHeaderDiv";
import SearchSection from "./header/SearchSection";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 100px;
  border-bottom: 1px solid #ddd;
  top: 0px;
  position: sticky;
  background-color: white;

  & > div {
    flex-grow: 1;
    flex-basis: 33%;
    display: flex;
  }
  #cc {
    justify-content: center;
  }

  span {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Image
          src={"/../public/logo.png"}
          layout={"intrinsic"}
          objectFit={"contain"}
          width={200}
          height={70}
          alt="rien"
        />
      </div>
      <div id="cc">
        <SearchSection />
      </div>
      <RightHeaderDiv />
    </StyledHeader>
  );
};

export default Header;
