
"use client";
import React, { useEffect, useState } from 'react';

interface NFT {
  id: number;
  title: string;
  image: string;
  createdAt: string;
}

const RecentNFTsPage = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3002/api/creations/recent/')
      .then((res) => res.json())
      .then((data) => {
        setNfts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Recent NFTs</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={nft.image}
                alt={nft.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{nft.title}</h2>
                  <p className="text-gray-500 text-sm">
                    Created: {new Date(nft.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentNFTsPage;
