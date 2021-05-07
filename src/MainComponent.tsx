import React, { useContext } from 'react';
import { authContext } from './AuthComponent';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import styles from './styles/main.module.css'
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      width: '18px',
      height: '18px',
      borderRadius: '8px',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

const MainComponent = () => {
    
    const auth = useContext(authContext);
    const links: any = [
        { _id: 2232323, online: true, gender: 'm', avatar: 'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg', age: 40, location: 'Paris', name: 'Jackob' },
        { _id: 232323, online: false, gender: 'f', avatar: 'https://cdn.pixabay.com/photo/2021/04/03/07/14/beauty-6146709_960_720.jpg', age: 22, location: 'London', name: 'Lisa' },
        { _id: 823232323, online: true, gender: 'm', avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png', age: 34, location: 'Moscow', name: 'Paul' },
        { _id: 24423, online: true, gender: 'f', avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_960_720.png', age: 55, location: 'Helsinki', name: 'Jessica' },
        { _id: 2990923, online: false, gender: 'm', avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png', age: 20, location: 'Oslo', name: 'Peter' },
        { _id: 5653, online: true, gender: 'f', avatar: 'https://cdn.pixabay.com/photo/2021/03/03/08/39/woman-6064799_960_720.jpg', age: 19, location: 'Tallinn', name: 'Jenny' }
    ];
    return (
            <div>
           { auth.username && 
            <h1 style={{ textAlign: 'center' }}> Hello {auth.username} </h1>
           } 
            <div style={{ marginTop: '5vh' }} className={styles.grid}>
                {links.map((item: any) => {
                    return (
                        <div key={item._id} className={`${styles.card} `}>
                  
                            <Link to={`/profile/${item._id} `}>
                                <h1>
                                    <StyledBadge invisible={!item?.online} overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} variant="dot">
                                        <Avatar className={`${item.gender === "m" ? styles.male : styles.female }`} style={{ width: '300px', height: '300px' }} src={item.avatar}/>
                                    </StyledBadge>
                                </h1>
                                <h1>{item.name}</h1>
                                <p>Age: {item.age}</p>
                                <p>Location: {item.location}</p>
                            </Link>
                        </div>
            
                    )
                })}
     
    </div>

        </div>
        
        
   

   
)}



export { MainComponent }