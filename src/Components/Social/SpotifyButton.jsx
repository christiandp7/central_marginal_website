import React from 'react'
import { Button, SHAPE, } from "baseui/button";

import { SpotifyIcon } from '../../Svg/SocialIcons'

const SpotifyButton = () => {
  return (
    <Button
      shape={SHAPE.circle}
      $as="a"
      href="https://open.spotify.com/show/70kFVy2pUsDAQ4YY3SooGl?si=rT7juHAkTEa60XmcEvBPuA"
      target="_blank"
      $style={({ $theme }) => ({
        position: 'fixed',
        right: '3vw',
        bottom: '5vh',
        boxShadow: $theme.lighting.shadow700
      })}
    >
      <SpotifyIcon />
    </Button>
  )
}

export default SpotifyButton
