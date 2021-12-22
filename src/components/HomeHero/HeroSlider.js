// import React from "react";
// import styled from "styled-components";

// const HeroSlider = () => {
//   const data = useStaticQuery(graphql`
//     query Slides {
//       allWpProduct(sort: { fields: date, order: DESC }) {
//         nodes {
//           title
//           slug
//           uri
//           date(locale: "MMMM DD, YYYY")
//           id
//           link
//           product {
//             slug
//             description
//             price
//             photo {
//               altText
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData(
//                     width: 200
//                     placeholder: BLURRED
//                     formats: [AUTO, WEBP, AVIF]
//                   )
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//   const slides = data?.allWpProduct.nodes;
//   console.log(slides);

//   return (
//     <StyledCarousel interval="6000">
//       {slides.map((slide, i) => {
//         const slideImage =
//           slide.product.photo.localFile.childImageSharp.gatsbyImageData;
//         return (
//           <Slide key={i}>
//             <GatsbyImage
//               draggable="false"
//               image={getImage(slideImage)}
//             ></GatsbyImage>
//             <h2>Hello World</h2>
//           </Slide>
//         );
//       })}
//     </StyledCarousel>
//   );
// };

// export default HeroSlider;

// const StyledCarousel = styled(Carousel)`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Slide = styled.div`
//   max-width: 100vw;
//   background-color: ${(props) => props.bg};
//   height: 100%;

//   > h2 {
//     color: black;
//   }
// `;
import React from "react";

function HeroSlider() {
  return (
    <div>
      <h1>slider</h1>
    </div>
  );
}

export default HeroSlider;
