import styled from "styled-components";

export const Layout = (props) => {
  const MyWrapper = styled.div`
    width: 480px;
    height: 720px;
    margin: auto;
    margin-top: 20px;
    background: #eee;
    padding: 10px;
    border-radius:10px;
  `;

  return <MyWrapper>{props.children}</MyWrapper>;
};
