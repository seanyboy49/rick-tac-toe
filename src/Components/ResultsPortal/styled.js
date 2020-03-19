import styled from "styled-components"

export const ResultsPortalWrap = styled.div`
  position: absolute;
  margin: auto;
  top: 40%;
  z-index: 100;
  text-align: center;
  cursor: pointer;
`

export const PortalLayer = styled.div`
    height: 15rem;
    width: 15rem;
    background: url(${p => p.src}) center center / cover no-repeat;

    animation: spinning 8s linear infinite;
    @keyframes spinning {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
`

export const ResultsContent = styled.div`
  position: absolute;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;
  top: 20%;
`
