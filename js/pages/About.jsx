const { NavLink, Route } = ReactRouterDOM;

function Team() {
  return (
    <div className='card about-card'>
      <ul className=' clean-list'>
        <li>Tsur Drori</li>
      </ul>
    </div>
  );
}

function Vision() {
  return (
    <div className='card about-card'>
      <span>My Vision:</span>
      <ul className=' clean-list'>
        <li>To be a full-stack Ninja</li>
        <li>To Create Beutiful Things</li>
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section className='about'>
      <h1>WI am all about Full-Stack Development</h1>
      <p>
        Use the best tech, including: HTML5, CSS3, Javascirpt, React, Node.js,
        and more...
      </p>
      <NavLink
        activeClassName='active'
        className=' clean-link'
        to='/about/team'>
        <div className='about-nav btn primary-btn'>My Team</div>
      </NavLink>
      <NavLink
        activeClassName='active'
        className=' clean-link'
        to='/about/vision'>
        <div className='about-nav btn primary-btn'>Our vision</div>
      </NavLink>
      <Route component={Team} path='/about/team' />
      <Route component={Vision} path='/about/vision' />
    </section>
  );
}
