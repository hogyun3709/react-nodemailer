import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle  } from '@fortawesome/free-brands-svg-icons'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { Footer, Button, Svg } from './Footer-Styless'

/* Retrieve props value from component's attribute value*/
export default props =>
  <Footer>
    <Button
      href={`https://github.com/hogyun3709/${props.githubRepo}`}
      title='Github repo'
      provider='green'
    >
      <Svg>
        <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
      </Svg>
    </Button>
    <Button
      href={`https://github.com/hogyun3709/${props.githubRepo}`}
      title='Github repo'
      provider='github'
    >
      <Svg>
        <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
      </Svg>
    </Button>
  </Footer>
