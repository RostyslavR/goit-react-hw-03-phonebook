import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  padding: 30px;
  margin: 0 auto;
  text-align: center;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};

  p,
  h2 {
    font-size: 36px;
  }
`;
