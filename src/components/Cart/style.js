import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItemLink = styled(NavLink)`
    &.selected{
        color:red;
    }
`