import React, {Component} from 'react';
import './Nav.less';

export const Nav = (props) =>
  <div className="top-nav">
    {props.menuItems.map((menuItem, i) => <NavItem key={i} menuItem={menuItem} {...props}/>)}
  </div>

class NavItem extends Component {
  render() {
    const {menuItem} = this.props
    return (
      <div className="top-nav-item">
        <a target="_blank" rel="noopener noreferrer" className={menuItem.label} href={menuItem.link}>{menuItem.label}</a>
      </div>
    )
  }
}
