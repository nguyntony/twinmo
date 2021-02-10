import {PulseLoader} from "react-spinners"
import {css} from "@emotion/core"

const loaderCSS = css`
  min-width: 25rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Loader({loading}) {
  return (
    <PulseLoader loading={loading} color="#c3c3cf" css={loaderCSS}/>
  )
}