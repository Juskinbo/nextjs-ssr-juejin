import Navbar from './navbar';
function Layout({ children }) {
  return (
    <>
      <div >
        <Navbar />
        <div >{children}</div>
      </div>
    </>
  )
}

export default Layout;