/*
Copyright 2019-present OmiseGO Pte Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

import { ArrowDropDown } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { resetToken, setBridgeType } from 'actions/bridgeAction'
import { openModal } from 'actions/uiAction'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBridgeTokens, selectBridgeType, selectMultiBridgeMode } from 'selectors/bridgeSelector'
import { selectLayer } from 'selectors/setupSelector'
import { BRIDGE_TYPE } from 'util/constant'
import * as S from './bridgeTransfer.styles'

import DoExitStep from 'containers/modals/exit/steps/DoExitStep'
import DoExitStepFast from 'containers/modals/exit/steps/DoExitStepFast'
import InputStep from 'containers/modals/deposit/steps/InputStep'
import InputStepFast from 'containers/modals/deposit/steps/InputStepFast'
import InputStepBatch from 'containers/modals/deposit/steps/InputStepBatch'

function BridgeTransfer() {

  const layer = useSelector(selectLayer())
  const bridgeType = useSelector(selectBridgeType())
  const multibridgeMode = useSelector(selectMultiBridgeMode())

  const dispatch = useDispatch()
  const tokens = useSelector(selectBridgeTokens())

  useEffect(() => {
    dispatch(setBridgeType(BRIDGE_TYPE.CLASSIC_BRIDGE))
  }, [ dispatch ])

  const switchBridgeType = () => {
    dispatch(openModal('bridgeTypeSwitch'))
  }

  const onReset = () => {
    dispatch(resetToken())
  }

  const openTokenPicker = (index = 0) => {
    dispatch(openModal('tokenPicker', null, null, index))
  }

  return (
    <S.BridgeTransferContainer my={1}>

      {!tokens.length && !multibridgeMode &&
        <S.TokenPicker
          sx={{
            background: '#BAE21A',
            color: '#031313',
          }}
          onClick={() => { openTokenPicker(0) }}
        >
          <Typography whiteSpace="nowrap" variant="body2">Select Token </Typography>
          <ArrowDropDown fontSize="medium" />
        </S.TokenPicker>
      }

      {tokens.length > 0 && !multibridgeMode &&
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2">
            {bridgeType === BRIDGE_TYPE.CLASSIC_BRIDGE ? 'Classic bridge' : 'Fast Bridge'}
          </Typography>
          <Typography variant="body2"
            onClick={switchBridgeType}
            sx={{
              textDecoration: 'underline',
              opacity: 0.6,
              cursor: 'pointer'
            }}
          >To {BRIDGE_TYPE.CLASSIC_BRIDGE !== bridgeType ? 'Classic bridge' : 'Fast Bridge'}
          </Typography>
        </Box>
      }

      {tokens.length > 0 && !multibridgeMode && <>
        {layer === 'L1' && bridgeType === BRIDGE_TYPE.CLASSIC_BRIDGE &&
          <InputStep handleClose={onReset} openTokenPicker={openTokenPicker} isBridge={true} token={tokens[ 0 ]} />
        }
        {layer === 'L1' && bridgeType === BRIDGE_TYPE.FAST_BRIDGE &&
          <InputStepFast handleClose={onReset} openTokenPicker={openTokenPicker} isBridge={true} token={tokens[ 0 ]} />
        }
        {layer === 'L2' && bridgeType === BRIDGE_TYPE.FAST_BRIDGE &&
          <DoExitStepFast handleClose={onReset} openTokenPicker={openTokenPicker} isBridge={true} token={tokens[ 0 ]} />
        }
        {layer === 'L2' && bridgeType === BRIDGE_TYPE.CLASSIC_BRIDGE &&
          <DoExitStep handleClose={onReset} openTokenPicker={openTokenPicker} isBridge={true} token={tokens[ 0 ]}/>
        }
        </>
      }

      {multibridgeMode ? <InputStepBatch handleClose={onReset} isBridge={true}  /> : null}

    </S.BridgeTransferContainer>
  )
}

export default React.memo(BridgeTransfer)
