import React, {useState}  from 'react';
import "./Footer.css";

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Grid, Slider, Box, IconButton, Icon } from '@mui/material';


const Footer = ({playingSong}) =>{


    const duration = 232;
    const [position, setPosition] = React.useState(0);
    const [paused, setPaused] = React.useState(false);
    function formatDuration (value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }


  return (
    <div className='footer'>
        <div className = "footer_left">
            <IconButton style = {{color: "white"}}>
                <SkipPreviousIcon className='footer_icon'/>
            </IconButton>
            <IconButton
                className='footer_icon'
                aria-label={paused ? 'play' : 'pause'}
                onClick={() => setPaused(!paused)}
                style = {{color: "white"}}
            >
            {paused ? (
                <PlayArrowIcon
                    className='footer_icon'
                    sx={{ fontSize: '3rem' }}
              />
            ) : (
              <PauseIcon sx={{ fontSize: '3rem' }}  />
            )}
            </IconButton>
            <IconButton style = {{color: "white"}}>
                <SkipNextIcon className='footer_icon'/>
            </IconButton>
        </div>

        <div className = "footer_right">
            <img className='footer_albumLogo'
                src={playingSong.img}
                alt=""
            />
            <div className='footer_songInfo'>
                <h5>{playingSong.title}</h5>
                <p>{playingSong.author}</p>
            </div>
            <div className = 'footer_time'>
                <Slider 
                    aria-label="time-indicator" 
                    size="small"
                    value ={position}
                    min={0}
                    step={1}
                    max = {duration}
                    onChange ={(_, value) => setPosition(value)}
                    style={{color: "salmon"}}
                    sx={{
                        height: 4,
                        '& .MuiSlider-thumb': {
                          width: 8,
                          height: 8,
                          transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                          '&:before': {
                            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                          },
                          '&.Mui-active': {
                            width: 20,
                            height: 20,
                          },
                        },
                        '& .MuiSlider-rail': {
                          opacity: 0.28,
                        },
                      }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: -2,
                  }}
                >
                  <div class="slider-status">{formatDuration(position)}</div>
                  <div class="slider-status">-{formatDuration(duration - position)}</div>
                </Box>
            </div>
            

        </div>
    </div>
  )
}

export default Footer

