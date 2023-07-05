import styled from 'styled-components';
import image from '../../images/home-bgc.jpg';
export const Section = styled.section`
  /* min-height: 785px; */
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size:cover;
  height: 100vh;
  padding: 50px 0;
`;

export const Title = styled.h1`
  color: white;
  font-size: 100px;
  /* font-family: 'DM Sans'; */
  font-style: italic;
`;
