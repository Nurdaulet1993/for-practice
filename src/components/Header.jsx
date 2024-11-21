function Header({ title, menu }) {

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 flex justify-between py-4">
        <h1>{title ? title : 'hello'}</h1>
        <nav>
          <ul className="flex">
            {
              menu.map((item, index) => (
                <li key={index} className="me-2">
                  <a href={item.path}>{item.label}</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header;
