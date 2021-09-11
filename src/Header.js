import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>
      <img className='header__logo' src='/images/logo.svg' />
    </div>
  );
}
