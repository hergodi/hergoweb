import React from 'react'
import { Menu } from 'antd'
import './MenuAdminPartidos.scss'
import { Link } from 'react-router-dom'

export default function MenuHergo (props) {
  const SubMenu = Menu.SubMenu
  const MenuItemGroup = Menu.ItemGroup
  return (
    <Menu
      className='ant-menu-verificacion-header'
      mode='horizontal'
      style={{ textAlign: 'center', backgroundColor: 'white', width: 'auto' }}
    >
      <Menu.Item key='inicio' url='/' id='link__1'>
        <Link to='/' className='link-1'>
          Inicio
        </Link>
      </Menu.Item>

      <Menu.Item key='nosotros' url='/nosotros' id='link__2'>
        <Link to='/nosotros' className='link-1'>Nosotros</Link>
      </Menu.Item>

      <Menu.Item key='services' url='/services' id='link__3'>
        <Link to='/services' className='link-1'>Servicios</Link>
      </Menu.Item>

      <Menu.Item key='contacto' url='/contacto' id='link__4'>
        <Link to='/contacto' className='link-1'>Contacto</Link>
      </Menu.Item>

      <SubMenu title='Galería de proyectos' className='link-1'>
        <MenuItemGroup title=''>
          <Menu.Item key='setting:1'><Link to='/residencial' className='link-1'>Residencial</Link></Menu.Item>
          <Menu.Item key='setting:2'><Link to='/fachadas' className='link-1'>Fachadas</Link></Menu.Item>
          <Menu.Item key='setting:3'><Link to='/domos' className='link-1'>Domos y pérgolas</Link></Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  )
}
