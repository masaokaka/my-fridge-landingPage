import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <>
    <Header />
    <main className='container mx-auto'>{children}</main>
    <Footer />
  </>
);

export default Layout;
