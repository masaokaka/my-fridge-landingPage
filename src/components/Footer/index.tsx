import Image from 'next/image';

const Footer = (): JSX.Element => (
  <footer>
    <a href="https://google.com" target="_blank" rel="noopener noreferrer">
      Powered by{' '}
      <span>
        <Image src="/logo.svg" alt="MyFridge Logo" width={80} height={40} />
      </span>
    </a>
  </footer>
);

export default Footer;
