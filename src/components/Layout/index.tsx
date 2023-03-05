import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <>
    <Header />
    <main className='container mx-auto max-w-[1960px] md:min-w-[768px]'>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
