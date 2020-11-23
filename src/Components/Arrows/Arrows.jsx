import React from 'react'
import {Button, SHAPE, SIZE, KIND} from 'baseui/button';
import {ChevronLeft, ChevronRight, ChevronDown } from 'baseui/icon';

const arrowsStyle = theme => {
  return {
    position: 'absolute',
    top: '45%',
    //backgroundColor: theme.colors.warning200
  }
}

export const PrevArrow = ({ onClick }) => {
  //return (<button type="button" className="slick-prev"><ChevronLeft /></button>)
  return (
    <Button 
      onClick={onClick} 
      size={SIZE.compact} 
      shape={SHAPE.circle}
      kind={KIND.tertiary}
      overrides={{
        BaseButton: {
          style: ({$theme}) => ({
            left: '-50px',
            ...arrowsStyle($theme)
          })
        }
      }}
    >
      <ChevronLeft size={30} />
    </Button>
  )
}

export const NextArrow = ({ onClick }) => {
  return (
    <Button 
      onClick={onClick} 
      size={SIZE.compact} 
      shape={SHAPE.circle}
      kind={KIND.tertiary}
      overrides={{
        BaseButton: {
          style: ({$theme}) => ({
            right: '-50px',
            ...arrowsStyle($theme)
          })
        }
      }}
    >
      <ChevronRight size={30} />
    </Button>
  )
  //return (<button type="button" className="slider-next"><ChevronRight /></button>)
}

export const NextArrowDown = ({ onClick }) => {
  return (
    <Button 
      onClick={onClick} 
      size={SIZE.compact} 
      shape={SHAPE.circle}
      kind={KIND.tertiary}
      overrides={{
        BaseButton: {
          style: ({$theme}) => ({
            ...arrowsStyle($theme),
            top: 'auto',
            left: '36%',
            bottom: '-35px'
          })
        }
      }}
    >
      <ChevronDown size={30} />
    </Button>
  )
  //return (<button type="button" className="slider-next"><ChevronRight /></button>)
}