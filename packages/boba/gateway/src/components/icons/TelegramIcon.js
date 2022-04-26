import { useTheme } from "@mui/material";
import * as React from "react";

function TwitterIcon() {

  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const color = theme.palette.common[isLight ? 'black' : 'white'];


  return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8444 2.41471L1.39436 7.18184C1.34781 7.20356 1.30826 7.23899 1.28051 7.28384C1.25275 7.32868 1.23798 7.38101 1.23798 7.4345C1.23798 7.48798 1.25275 7.54031 1.28051 7.58516C1.30826 7.63 1.34781 7.66543 1.39436 7.68715L4.31844 9.08869L5.726 13.2361C5.74106 13.2787 5.76838 13.3154 5.80417 13.341C5.83997 13.3667 5.88247 13.38 5.92578 13.3791H5.93486C5.97823 13.3778 6.01988 13.361 6.05292 13.3314L8.28684 11.4246L6.84296 10.2805L11.5015 13.8558C11.5367 13.882 11.5775 13.8987 11.6203 13.9045C11.6631 13.9103 11.7066 13.9049 11.7469 13.8889C11.7873 13.8729 11.8233 13.8467 11.8517 13.8127C11.8802 13.7787 11.9003 13.7378 11.9102 13.6937L14.1895 2.71027C14.1949 2.66394 14.189 2.61693 14.1724 2.57363C14.1558 2.53033 14.129 2.49215 14.0945 2.46264C14.0601 2.43313 14.0191 2.41326 13.9754 2.40488C13.9316 2.3965 13.8866 2.39988 13.8444 2.41471ZM5.93486 12.3589L4.71801 8.91707L11.6287 4.47411L6.47972 10.0421C6.45631 10.0702 6.43786 10.1025 6.42524 10.1375L5.93486 12.3589Z" fill={color} fillOpacity="0.65" />
  </svg>
  )
}

export default TwitterIcon;
