import React from 'react'
import {withPrefix} from 'gatsby'
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`




function Hero({title, subtitle, className}) {

  return (
    <HeroContainer className={className}>
      <div className="container">
        <div className="glitch" data-text={title}>{title}</div>
        <div className="glow">{title}</div>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="scanlines"></div>
    </HeroContainer>
  )
}

export default styled(Hero)`
  ${p => `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
  height: 40vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
