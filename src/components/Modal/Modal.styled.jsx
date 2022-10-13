import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
export const ModalImg = styled.img`
  cursor: pointer;
`;
export const ShowPrevImg = styled(FiChevronLeft)`
  cursor: pointer;
`;
export const ShowNextImg = styled(FiChevronRight)`
  cursor: pointer;
`;
