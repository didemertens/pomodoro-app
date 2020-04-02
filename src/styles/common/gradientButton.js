import { styled } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export const GradientButton = styled(Button)({
  // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  background: 'linear-gradient(45deg, #F9D423 20%, #FF4E50 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(99, 4, 5, .3)',
  color: 'white',
  height: 70,
  fontSize: 28,
  padding: '0 45px'
})

