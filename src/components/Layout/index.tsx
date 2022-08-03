import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
