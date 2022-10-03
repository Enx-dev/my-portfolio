import CloseIcon from "@mui/icons-material/Close";
import Link from "../Custom/Link";
import Icons from "../Custom/Icons";
import { Drawer, IconButton, Box } from "@mui/material";
import React from "react";
import { navLinks, socialLinks } from "./links";
import { ISmallDrawer } from "../../Interface";

const MidDrawer = () => {
  return (
    <Drawer
      sx={(theme) => ({
        display: "none",
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.only("md")]: {
          display: "block",
        },
        "& > div": {
          border: "none",
        },
      })}
      variant="persistent"
      open={true}
      anchor="left">
      <Box
        sx={(theme) => ({
          width: "40vw",
          maxWidth: "20rem",
          paddingInlineStart: "0.8rem",
          paddingBlockStart: "4.4rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          gap: "4.4rem",
          backgroundColor: theme.palette.background.paper,
        })}>
        {/* <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Avatar
            sx={{
              minWidth: "10rem",
              minHeight: "10rem",
              maxWidth: "12rem",
              maxHeight: "12rem",
              width: "20vh",
              height: "20vh",
            }}
          />
        </Box> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",

            gap: "2rem",
          }}>
          {navLinks.map((link) => (
            <React.Fragment key={link._id}>
              <Link name={link.name} to={link.to} Icon={link.icon} />
            </React.Fragment>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            bottom: "0",
            width: "100%",
            left: "0",
            right: "0",
            marginInline: "auto",
          }}>
          {socialLinks.map((link) => (
            <React.Fragment key={link._id}>
              <Icons to={link.to} icon={link.comp} />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};
const LargeDrawer = () => {
  return (
    <Drawer
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down("lg")]: {
          display: "none",
        },
        "& > div": {
          border: "none",
        },
      })}
      variant="persistent"
      open={true}
      anchor="left">
      <Box
        sx={(theme) => ({
          width: "40vw",
          maxWidth: "32rem",
          paddingBlock: "5.6rem",
          paddingInlineStart: "3.2rem",
          height: "100%",
          display: "flex",
          backgroundColor: theme.palette.background.paper,
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        })}>
        {/* <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Avatar
            sx={{
              minWidth: "10rem",
              minHeight: "10rem",
              maxWidth: "12rem",
              maxHeight: "12rem",
              width: "20vh",
              height: "20vh",
            }}
          />
        </Box> */}
        <Box
          sx={{
            paddingBlock: "1.6rem",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "2rem",
          }}>
          {navLinks.map((link) => (
            <React.Fragment key={link._id}>
              <Link name={link.name} to={link.to} Icon={link.icon} />
            </React.Fragment>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            bottom: "0",
            width: "100%",
            left: "0",
            right: "0",
            marginInline: "auto",
          }}>
          {socialLinks.map((link) => (
            <React.Fragment key={link._id}>
              <Icons to={link.to} icon={link.comp} />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

const SmallDrawer = ({ setToggle, toggle }: ISmallDrawer) => {
  return (
    <Drawer
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      })}
      variant="temporary"
      anchor="right"
      open={toggle}
      onClose={() => setToggle(false)}>
      <Box
        sx={(theme) => ({
          width: "24rem",
          padding: "1.6rem",
          height: "100%",
          backgroundColor: theme.palette.background.paper,
        })}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}>
          <IconButton
            onClick={() => setToggle(false)}
            sx={(theme) => ({
              color: theme.palette.background.default,
            })}>
            <CloseIcon sx={{ width: "4rem", height: "4rem" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            paddingBlock: "3.6rem",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2.8rem",
          }}>
          {navLinks.map((link) => (
            <React.Fragment key={link._id}>
              <Link name={link.name} to={link.to} Icon={link.icon} />
            </React.Fragment>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}>
          {socialLinks.map((link) => (
            <React.Fragment key={link._id}>
              <Icons to={link.to} icon={link.comp} />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export { SmallDrawer, MidDrawer, LargeDrawer };
