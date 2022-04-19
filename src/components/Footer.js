import React from 'react'
import LinkedinIcon from '../icons/linkedin.png'
import GithubIcon from '../icons/github-48.png'

function Footer() {
  return (
    <div className='footer'>
        <div>
            Developed by {""}
            <a href="https://www.linkedin.com/in/fatma-gülmez">Fatma Gülmez</a>
        </div>

        <div>
            <span className='icons'>
                <a href="https://www.linkedin.com/in/fatma-gülmez" >
                    <img src={LinkedinIcon} alt="linkedin" width="30"/>
                </a>
            </span>

            <span className='icons'>
                <a href="https://github.com/fatmagulmez" >
                    <img src={GithubIcon} alt="github" width="30" />
                    
                </a>
            </span>

        </div>
    </div>
  )
}

export default Footer