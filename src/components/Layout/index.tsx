import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
