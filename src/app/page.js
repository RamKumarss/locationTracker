'use client';
import { useRouter } from 'next/navigation';
import './page.css';

export default function Home() {
  const router = useRouter();
  const navigateToRoute = () => {
    router.push('/leaflet');
  };
  return (
    <div className='main_button_block'>
      <button className='green-glow-button' onClick={navigateToRoute}>
        LeafLet Location Tracker
      </button>
    </div>
  );
}
