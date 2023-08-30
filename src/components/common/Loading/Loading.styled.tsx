import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`

export const LoadingComponent = styled.div`
  display: flex;
  gap: 8px;
`

export const LoadingDot = styled.div<{ _animationDelay: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #9b9bff;
  animation: ${scale} 1.5s ease-in-out infinite;
  animation-delay: ${({ _animationDelay }) => _animationDelay};
`
