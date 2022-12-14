import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../ui/atoms/Button";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    max-w-xl
    lg:w-2/3
    flex
    justify-between
    items-center
    rounded-md
    bg-white
    px-3
    py-4
    md:px-5
    md:py-2
    mx-4
    my-6
    z-10
  `};
`;

const ItemContainer = styled.div`
  ${tw`w-3/4 flex relative items-baseline`};
`;

const Icon = styled.span`
  ${tw`
    text-secondary
    fill-current
    text-lg
    md:text-xl
    mr-1
    md:mr-3
  `};
`;

const StyledSelect = styled.select`
  ${tw`
  w-full
  appearance-none
  text-gray-700
  text-sm md:text-base lg:text-lg
  `}
`;

const SearchCard = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Icon>
        <StyledSelect
          id="location"
          name="location"
          onChange={(e) => {
            e.preventDefault();
            setLocation(e.target.value.toLowerCase());
          }}
        >
          <option value="" disabled selected>
            My adventure starts in...
          </option>
          <option value="Melbourne">Melbourne</option>
          <option value="Adelaide">Adelaide</option>
          <option value="Sydney">Sydney</option>
        </StyledSelect>
      </ItemContainer>

      {/* 
      // datalist example
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Icon>
        <input
          className="w-full"
          type="text"
          name="location"
          list="location-list"
          placeholder="My adventure starts in..."
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <datalist id="location-list">
          <option value="Melbourne">Melbourne</option>
          <option value="Adelaide">Adelaide</option>
          <option value="Sydney">Sydney</option>
        </datalist>
      </ItemContainer> */}
      {/* <Link to={"/campervans"}></Link> */}
      <Button
        className="bg-secondary
        hover:bg-transparent
        hover:text-secondary
        hover:border-secondary"
        text="Find a van"
        theme={"base"}
        onClick={() =>
          navigate(
            `/campervans/${location}`
            // navigate("/campervans", {
            //   state: { location: location },
            //   replace: true,
            // }
          )
        }
      />
    </CardContainer>
  );
};

export default SearchCard;
