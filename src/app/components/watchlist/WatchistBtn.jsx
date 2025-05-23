import { ArrowLeft, ChevronDown, Plus, BellOff } from 'lucide-react';
import Image from 'next/image';

export default function WatchlistBtn() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Left Arrow */}
      <button className="text-white">
        <ArrowLeft size={24} />
      </button>

      {/* Product: Fixed Income */}
      <button
        className="flex items-center justify-between px-4 bg-[#FFFFFF33] text-white rounded-[500px]"
        style={{ width: '250px', height: '40px', flexShrink: 0 }}
      >
        <span>Product: Fixed Income</span>
        <ChevronDown size={18} />
      </button>

      {/* Turn off All Alerts */}
      <button className="flex items-center gap-2 text-white  bg-[#FFAB2D]"
        style={{
          borderRadius: '41.463px',
          border: '1.312px solid #FFCE40',
          width: '202.031px',
          height: '40.231px',
          flexShrink: 0,
        }}>
        <Image
          width={24}
          height={24}
          alt="timer"
          src="/assets/icons/timer-close.svg"
        />
        <span>Turn off All Alerts</span>
      </button>

      {/* Create Watchlist */}
      <button
        className="flex items-center justify-center gap-2 text-white font-medium"
        style={{
          borderRadius: '41.463px',
          border: '1.312px solid #006EFF',
          width: '202.031px',
          height: '40.231px',
          flexShrink: 0,
        }}
      >
        <Plus size={24} />
        <span>Create Watchlist</span>
      </button>
    </div>
  );
}
