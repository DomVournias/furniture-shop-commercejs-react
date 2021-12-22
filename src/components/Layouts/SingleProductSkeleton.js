import React from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";

const SingleProductSkeleton = () => {
  return (
    <SkeletonOut>
      <SkeletonIn>
        <LeftSkeleton>
          <RowSkeleton w="" h="50vh" mb="0" />
        </LeftSkeleton>

        <RightSkeleton>
          <RowSkeleton w="15%" h="3.5%" mb="1rem" />
          <RowSkeleton w="60%" h="5%" mb="1rem" />
          <RowSkeleton w="30%" h="5%" mb="1.5rem" />
          <RowSkeleton w="40%" h="3.5%" mb="1rem" />
          <RowSkeleton w="20%" h="3.5%" mb="1.5rem" />
          <RowSkeleton w="15%" h="8%" mb="1rem" />

          <Quantity></Quantity>
          <AddToCard></AddToCard>
        </RightSkeleton>
      </SkeletonIn>
      <RelatedProducts></RelatedProducts>
    </SkeletonOut>
  );
};

export default SingleProductSkeleton;

const SkeletonOut = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
`;
const SkeletonIn = styled.div`
  display: flex;
  gap: 4rem;
  align-self: center;
  max-width: 1600px;
  padding: 2rem;
`;
const LeftSkeleton = styled.div`
  width: 50%;
`;

const ImagesSkeleten = styled.img`
  height: 50vh;
  background-color: grey;
  border-radius: 20px;
`;

const RightSkeleton = styled.div`
  width: 50%;
`;

const skeletonAnimation = keyframes`
  
  50%{opacity: 0.5}
`;

const RowSkeleton = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${({ theme }) => theme.colors.greyLight};
  border-radius: 20px;
  margin-bottom: ${(props) => props.mb};
  animation-name: ${skeletonAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const Quantity = styled.div``;
const AddToCard = styled.div``;
const RelatedProducts = styled.div``;
