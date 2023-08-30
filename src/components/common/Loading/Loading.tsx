import { LoadingComponent, LoadingDot } from './Loading.styled'

function Loading() {
  return (
    <LoadingComponent>
      <LoadingDot _animationDelay="0s" />
      <LoadingDot _animationDelay="0.25s" />
      <LoadingDot _animationDelay="0.5s" />
      <LoadingDot _animationDelay="0.75s" />
    </LoadingComponent>
  )
}

export default Loading
