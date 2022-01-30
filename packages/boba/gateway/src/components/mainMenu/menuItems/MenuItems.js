import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import { menuItems } from '../menuItems';
import * as S from './MenuItems.styles';

import EarnIcon from 'components/icons/EarnIcon'
import SaveIcon from 'components/icons/EarnIcon'
import WalletIcon from 'components/icons/WalletIcon'
import HistoryIcon from 'components/icons/HistoryIcon'
import NFTIcon from 'components/icons/NFTIcon'
import DAOIcon from 'components/icons/DAOIcon'
import HelpIcon from 'components/icons/LearnIcon'
import SwapIcon from 'components/icons/SwapIcon'
import SearchIcon from 'components/icons/SearchIcon'
import SafeIcon from 'components/icons/SafeIcon'

import { useDispatch, useSelector } from 'react-redux'
import { selectModalState } from 'selectors/uiSelector'
import { setPage } from 'actions/uiAction'

function MenuItems ({setOpen }) {

  const [ activeItem, setActiveItem ] = useState(false)
  const theme = useTheme()
  const isLight = theme.palette.mode === 'light'
  const colorIcon = theme.palette.common[isLight ? 'black' : 'white']
  const pageDisplay = useSelector(selectModalState('page'))
  const dispatch = useDispatch()

  const iconObj = {
    WalletIcon,
    EarnIcon,
    SaveIcon,
    HistoryIcon,
    NFTIcon,
    DAOIcon,
    HelpIcon,
    SwapIcon,
    SearchIcon,
    SafeIcon
  }

  return (
    <S.Nav>
      {menuItems.map((item) => {
        const isActive = pageDisplay === item.key
        const title = item.title
        return (
            <S.MenuItem
              onClick={() => {
                if (item.url.startsWith('http')) {
                  window.open(item.url);
                  setOpen(false)
                } else {
                  dispatch(setPage(item.key))
                  setOpen(false)
                }
              }}
              onMouseEnter={() => setActiveItem(title)}
              onMouseLeave={() => setActiveItem(false)}
              selected={isActive}
            >
              {item.title}
            </S.MenuItem>
        )
      })}
    </S.Nav>
  );
}

export default MenuItems
