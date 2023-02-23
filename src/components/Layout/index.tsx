import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <>
    <Header />
    <main className='container mx-auto min-w-[768px] max-w-[1960px]'>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
