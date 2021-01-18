import React, { useState } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
    Drawer,
    List,
    CssBaseline,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import DashboardIcon from '@material-ui/icons/Dashboard';

import logo from '../../assets/imagens/logo.png'
import miniLogo from '../../assets/imagens/miniLogo.png'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 8,
        color: '#eee'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        backgroundColor: '#4b5c6b',
        color: '#fff',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#4b5c6b',
        color: '#fff',
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


export default function MiniDrawer() {
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const lastState = JSON.parse(localStorage.getItem("@FERIAS:drawer"))
    const [open, setOpen] = useState(lastState !== null ? lastState : true)

    const handleDrawerOpen = () => {
        setOpen(true);
        localStorage.setItem("@FERIAS:drawer", true)
    };

    const handleDrawerClose = () => {
        setOpen(false);
        localStorage.setItem("@FERIAS:drawer", false)

    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                {open ?
                    <div className={classes.toolbar} onClick={handleDrawerClose}>
                        <img src={logo} style={{ width: "75%", alignSelf: 'center', cursor: 'pointer', margin: 10 }} alt='Logo Aterdata' />
                        <IconButton style={{ color: "#fff" }}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div> :
                    <img src={miniLogo} alt='Mini Logo Alterdata' onClick={handleDrawerOpen}
                        style={{
                            width: 50,
                            cursor: 'pointer',
                            alignSelf: 'center',
                            marginBottom: 10,
                            marginTop: 15
                        }}>
                    </img>}
                <Divider />
                <List>
                    <ListItem button key="Dashboard" onClick={() => history.push('/')}>
                        <ListItemIcon><DashboardIcon style={{ color: '#eee' }} /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    
                    <ListItem button key="Cadastro" onClick={() => history.push('/cadastro')}>
                        <ListItemIcon> <AccountCircleIcon style={{ color: '#eee' }} /></ListItemIcon>
                        <ListItemText primary="Cadastrar Férias" />
                    </ListItem>

                    <ListItem button key="registros" onClick={() => history.push('/registro')}>
                        <ListItemIcon><FindInPageIcon style={{ color: '#eee' }} /></ListItemIcon>
                        <ListItemText primary="Registros de Férias"/>
                    </ListItem>

                    <ListItem button key="Relatorio" onClick={() => history.push('/relatorio')}>
                        <ListItemIcon><PictureAsPdfIcon style={{ color: '#eee' }} /></ListItemIcon>
                        <ListItemText primary="Gerar Relatório" />
                    </ListItem>
                </List>
            </Drawer>

        </div>
    );
}