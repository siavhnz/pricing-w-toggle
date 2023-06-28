import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 54,
  height: 34,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 4,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
    "&:hover": {
      "& + .MuiSwitch-track:before": {
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 26,
    height: 26,
  },
  "& .MuiSwitch-track": {
    borderRadius: 36 / 2,
    opacity: 1,
    position: "relative",
    background:
      "linear-gradient(90deg, rgba(163,168,240,1) 0%, rgba(105,111,221,1) 100%)",

    "&:before": {
      borderRadius: 32 / 2,
      position: "absolute",
      content: "''",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background:
        "linear-gradient(90deg, rgba(201,201,240,1) 0%, rgba(201,201,240,1) 100%)",
      zIndex: -1,
      opacity: 0,
      transition: "all 0.5s ease",
    },
  },
}));

export default IOSSwitch;
