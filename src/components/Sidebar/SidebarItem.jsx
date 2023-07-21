
function SidebarItem({ img }) {
  return (
      <div className="sidebar__item">
          <a className="sidebar__link" href="/">
              <img className="sidebar__img" src={img} alt="day's playlist" />
          </a>
      </div>
  )
}

export default SidebarItem