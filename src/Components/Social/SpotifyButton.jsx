import React from 'react'
import { Button, SHAPE, SIZE } from "baseui/button";

import { SpotifyIcon } from '../../Svg/SocialIcons'

const SpotifyButton = () => {
  return (
    <Button
      shape={SHAPE.circle}
      size={SIZE.compact}
      $as="a"
      href="https://open.spotify.com/show/70kFVy2pUsDAQ4YY3SooGl?si=rT7juHAkTEa60XmcEvBPuA"
      target="_blank"
      $style={({ $theme }) => ({
        position: 'fixed',
        right: '4.5vw',
        bottom: '4vh',
        boxShadow: $theme.lighting.shadow700,
      })}
    >
      <SpotifyIcon size={18} />
    </Button>
  )
}

export default SpotifyButton
