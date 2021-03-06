import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import * as gtag from '../lib/gtag'
import gtm from '../lib/gtm'
import copyToClipboard from '../utils/copyToClipboard'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1px 0',
    padding: '4rem 0',
  },
  accordionWrapper: {
    margin: '2rem 2rem 0',
  },
  accordionSummary: {
    background: '#eae6e3',
    color: '#63463c',
  },
  accordionContent: {
    justifyContent: 'center',
    paddingLeft: 42,
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,,
  },
  accordianDetails: {
    flexDirection: 'column',
    padding: 0,
  },
  box1: {
    // flexGrow: 1,
    display: 'flex',
    padding: 10,
    borderTop: '1px solid #eee',
    marginTop: -1,
  },
  box2: {
    flexGrow: 1,
    textAlign: 'left',
  },
  box3: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Pretendard-Regular',
    fontSize: theme.typography.pxToRem(13),
    lineHeight: '1.5rem',
  },
  button: {
    fontFamily: 'Pretendard-Regular',
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 600,
    background: '#f2efed',
    color: '#e56623',
  },
}))

export default function Account() {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = (type) => {
    let val = ''
    switch (type) {
      case 'groom':
        val = '3333140865923'
        break
      case 'bride':
        val = '1002251007485'
        break
    }
    copyToClipboard(val)
      .then(() => {
        // alert(
        //   `계좌번호(${val})가 복사되었습니다.\n필요한 곳에 붙여넣기 하세요.`
        // )
        enqueueSnackbar(
          `계좌번호(${val})가 복사되었습니다.\n필요한 곳에 붙여넣기 하세요.`
        )
      })
      .catch(() => {
        console.error('copyToClipboard error')
        alert('복사할 수 없습니다.')
      })
    gtm.event({
      action: 'share',
      category: 'account',
      label: 'account_number',
      value: val,
    })
  }

  return (
    <Box className={classes.root} id="account">
      <Box className={classes.title}>
        <Typography variant="body1" color="textSecondary">
          마음 전하실 곳
        </Typography>
      </Box>
      <Box className={classes.accordionWrapper}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            classes={{
              root: classes.accordionSummary,
              content: classes.accordionContent,
            }}
          >
            <Typography variant="body2" className={classes.heading}>
              신랑측 계좌번호
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordianDetails}>
            <Box className={classes.box1}>
              <Box className={classes.box2}>
                <Typography className={classes.text}>
                  카카오뱅크 3333-14-0865923
                </Typography>
                <Typography
                  className={classes.text}
                >{`김병주 (부: 김충정, 모: 김응숙)`}</Typography>
              </Box>
              <Box className={classes.box3}>
                <Button
                  variant="contained"
                  disableElevation
                  className={classes.button}
                  onClick={() => handleClick('groom')}
                >
                  복사하기
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            classes={{
              root: classes.accordionSummary,
              content: classes.accordionContent,
            }}
          >
            <Typography variant="body2" className={classes.heading}>
              신부측 계좌번호
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordianDetails}>
            <Box className={classes.box1}>
              <Box className={classes.box2}>
                <Typography className={classes.text}>
                  우리은행 1002-251-007485
                </Typography>
                <Typography
                  className={classes.text}
                >{`원빛나 (부: 원동일, 모: 이광식)`}</Typography>
              </Box>
              <Box className={classes.box3}>
                <Button
                  variant="contained"
                  disableElevation
                  className={classes.button}
                  onClick={() => handleClick('bride')}
                >
                  복사하기
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}
